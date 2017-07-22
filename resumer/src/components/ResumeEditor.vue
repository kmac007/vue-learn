<template>
  <div id="ResumeEditor">
    <nav>
      <ol>
        <!-- 遍历resume.visibleItems 如果item === selected 则给他加上class active 每个li绑定点击事件 点击后将其item赋予selceted属性 -->
        <li v-for="(item,index) in resume.config" :class="{active: item['field'] === selected}" @click="selected = item['field']">
          <svg class="icon">
            <use :xlink:href="`#icon-${item['icon']}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <!-- 遍历resume.visibleItems当item与selected一致，则显示，每个li中的内容为resume[item] -->
      <li v-for="item in resume.config" v-show="item['field'] === selected">
        <!-- 当resume[item.field]为数组时 -->
        <div v-if="resume[item.field] instanceof Array">
          <div class="subitem" v-for="subitem in resume[item.field]">
            <div class="resumeField" v-for="(value, key) in subitem">
              <label>{{key}}</label>
              <input type="text" v-model="subitem[key]">
            </div>
          </div>
        </div>
        <!-- 当resume[item.field]为对象时 -->
        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <input type="text" v-model="resume[item.field][key]">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'ResumeEditor',
  computed: {
    selected:{
      get(){
        return this.$store.state.selected
      },
      set(value){
        return this.$store.commit('switchTab',value)
      }
    },
    resume() {
      return this.$store.state.resume
    }
  },
  methods: {
    add() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style scoped lang="scss" scoped>
#ResumeEditor {
  width: 35%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  >nav {
    width: 48px;
    background-color: black;
    color: #fff;
    >ol {
      >li {
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 16px;
        margin-bottom: 16px;
        &.active {
          background-color: white;
          color: #000;
          >.icon {
            fill: #000;
          }
        }
        .icon {
          width: 24px;
          height: 24px;
          fill: #fff;
          overflow: hidden;
        }
      }
    }
  }
  >.panels {
    flex-grow: 1;
    >li {
      padding: 24px;
    }
  }
  ol {
    list-style: none;
  }
  .resumeField {
    >lable {
      display: block;
    }
    input[type=text] {
      margin: 16px 0;
      border: 1px solid #ddd;
      box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 40px;
      padding: 0 8px;
    }
  }
}
</style>