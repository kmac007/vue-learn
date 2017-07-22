import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'profile',
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
          company: 'AL',
          content: '我的第一份工作是'
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
    switchTab(state,payload){
      state.selected = payload
    }
  }
})
