import Vue from 'vue'

var app = new Vue({
  el: '#app',
  data: {
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
    }
  }
})