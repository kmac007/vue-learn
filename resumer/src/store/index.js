import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
import AV from '../lib/leancloud'
import getAVUser from '../lib/getAVUser'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },
    resume: {
      config: [{
          field: 'profile',
          icon: 'id'
        },
        {
          field: 'workHistory',
          icon: 'work'
        },
        {
          field: 'education',
          icon: 'edu'
        },
        {
          field: 'projects',
          icon: 'project'
        },
        {
          field: 'awards',
          icon: 'award'
        },
        {
          field: 'contacts',
          icon: 'contact'
        }
      ],
      profile: {
        name: 'DK',
        city: 'LA',
        title: 'id'
      },
      workHistory: [{
          company: 'AL',
          content: '我的第一份工作是'
        },
        {
          company: 'cf',
          content: '我的第er份工作是'
        }
      ],
      education: [{
          school: 'AL',
          content: '我的高中'
        },
        {
          school: 'AL',
          content: '我的大学'
        }
      ],
      projects: [{
          project: 'projectA',
          content: 'project A'
        },
        {
          project: 'projectB',
          content: 'projectB'
        }
      ],
      awards: [{
          award: '你以为呢你以为呢你以为呢你以为呢你以为呢',
          content: '我以为我以为我以为我以为我以为我以为我以为我以为'
        },
        {
          award: '你好吗你好吗你好吗你好吗你好吗',
          content: '好好哈哈哈哈哈哈哈哈哈哈哈哈'
        }
      ],
      contacts: [{
          contact: 'wechat',
          content: 'abc123'
        },
        {
          contact: 'qq',
          content: '123456'
        }
      ]
    }
  },
  mutations: {
    initState(state, payload) {
      Object.assign(state, payload)
    },
    switchTab(state, payload) {
      state.selected = payload
    },
    updateResume(state, {
      path,
      value
    }) {
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state, payload) {
      Object.assign(state.user, payload)
    },
    removeUser(state) {
      state.user.id = null
    }
  }
})
