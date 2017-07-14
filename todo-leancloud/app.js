import Vue from 'vue'
import AV from 'leancloud-storage'

//初始化leancloud
var APP_ID = 'nNguzyNBNM07xuzlWRhUyYTl-gzGzoHsz'
var APP_KEY = '4cQ7JYsnLv8lBGSWfcA5uTFk'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})
/*
  主要思路：1.html部分注册和登录可以进行tab切换
           2.通过注册按钮注册成功后直接进入todolist界面
           3.todolist界面包含欢迎当前用户以及登出按钮
           4.通过todolist可以添加和删除todo，存储与当前用户名相对应
           5.登录后，读取相应用户的todolist
*/
var app = new Vue({
  el: '#app',
  data: {
    actionType: 'signUp',
    formData: {
      username: '',
      password: ''
    },
    currentUser: null,
    newTodo: '',
    todoList: []
  },
  created: function () { //组件实例创建完成，属性已绑定，但DOM未生成
    this.currentUser = this.getCurrentUser()
    this.fetchTodos()
  },
  methods: {
    fetchTodos: function () {
      if (this.currentUser) {
        var query = new AV.Query('ALLTodos')
        query.find()
          .then((todos) => {
            let avAllTodos = todos[0]
            let id = avAllTodos.id
            this.todoList = JSON.parse(avAllTodos.attributes.content)
            this.todoList.id = id
          }, function (error) {
            console.error(error)
          })
      }
    },
    updateTodos: function () { //更新对象
      let dataString = JSON.stringify(this.todoList)
      let avTodos = AV.Object.createWithoutData('ALLTodos', this.todoList.id)
      avTodos.set('content', dataString)
      avTodos.save().then(() => {
        console.log('更新成功')
      })
    },
    saveTodos: function () { //设置权限,使用ACL
      let dataString = JSON.stringify(this.todoList)
      var AVTodos = AV.Object.extend('ALLTodos')
      var avTodos = new AVTodos()
      var acl = new AV.ACL()
      acl.setReadAccess(AV.User.current(), true) //只有这个user可以读
      acl.setWriteAccess(AV.User.current(), true)
      //只有这个user可以写
      avTodos.set('content', dataString)
      avTodos.setACL(acl)
      avTodos.save().then(function (todo) {
        this.todoList.id = todo.id //把id挂在在this.todoList上
        console.log('保存成功')
      }, function (error) {
        console.log('保存失败')
      })
    },
    saveOrUpdateTodos: function () { //判断是否存在todoList
      if (this.todoList.id) {
        this.updateTodos()
      } else {
        this.saveTodos()
      }
    },
    addTodo: function () { //增加todos
      if (!/\S+/g.test(this.newTodo)) {
        return alert('请输入待办事项。')
      }
      this.todoList.push({
        title: this.newTodo,
        createdDate: (new Date()).toLocaleString(),
        done: false
      })
      this.newTodo = ''
      this.saveOrUpdateTodos() //保存或更新todoList
    },
    removeTodo: function (todo) { //删除todo
      let index = this.todoList.indexOf(todo)
      this.todoList.splice(index, 1)
      this.saveOrUpdateTodos() //保存或更新
    },
    signUp: function () {
      //新建AVUser对象实例
      let user = new AV.User()
      user.setUsername(this.formData.username)
      user.setPassword(this.formData.password)
      user.signUp().then((loginedUser) => {
        this.currentUser = this.getCurrentUser() //注册后将当前用户赋予currentUser
      }, function (error) {
        alert("注册失败")
      })
    },
    login: function () {
      AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => {
        this.currentUser = this.getCurrentUser() //获取当前用户
        this.fetchTodos() //获取当前用户下的todos
      }, function (error) {
        alert('登录失败')
      })
    },
    getCurrentUser: function () {
      let current = AV.User.current()
      if (current) {
        let {
          id,
          createdAt,
          attributes: {
            username
          }
        } = current
        return {
          id,
          createdAt,
          username
        }
      } else {
        return null
      }
    },
    logout: function () { //登出
      AV.User.logOut()
      this.currentUser = null
      window.location.reload() //刷新页面
    }
  }
})