import Vue from 'vue'
import AV from 'leancloud-storage'

var APP_ID = 'nNguzyNBNM07xuzlWRhUyYTl-gzGzoHsz'
var APP_KEY = '4cQ7JYsnLv8lBGSWfcA5uTFk'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

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
  created: function () {
    window.onbeforeunload = () => { //当窗口即将被卸载时，触发事件
      let dataString = JSON.stringify(this.todoList)
      window.localStorage.setItem('myTodos', dataString)
    }

    let oldDateString = window.localStorage.getItem('myTodos')
    let oldData = JSON.parse(oldDateString)
    this.todoList = oldData || []

    this.currentUser = this.getCurrentUser()
  },
  methods: {
    addTodo: function () {
      if (!/\S+/g.test(this.newTodo)) {
        return alert('请输入待办事项。')
      }
      this.todoList.push({
        title: this.newTodo,
        createdDate: (new Date()).toLocaleString(),
        done: false
      })
      this.newTodo = ''
    },
    removeTodo: function (todo) {
      let index = this.todoList.indexOf(todo)
      this.todoList.splice(index, 1)
    },
    signUp: function () {
      //新建AVUser对象实例
      let user = new AV.User()
      user.setUsername(this.formData.username)
      user.setPassword(this.formData.password)
      user.signUp().then((loginedUser) => {
        this.currentUser = this.getCurrentUser()
      }, function (error) {
        alert("注册失败")
      })
    },
    login: function () {
      AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => {
        this.currentUser = this.getCurrentUser()
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
      }else {
        return null
      }
    },
    logout: function () {
      AV.User.logOut()
      this.currentUser = null
      window.location.reload()
    }
  }
})