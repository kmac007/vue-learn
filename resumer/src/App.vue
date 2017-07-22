<template>
  <div class="page">
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</template>

<script>
//引入组件
import Topbar from './components/Topbar'
import ResumePreview from './components/ResumePreview'
import ResumeEditor from './components/ResumeEditor'
import store from './store/index'

export default {
  name: 'app',
  store,
  components: { Topbar, ResumeEditor, ResumePreview }
}
</script>

<style lang="scss">
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  >main {
    flex-grow: 1;
    min-width: 1024px;
    max-width: 1440px;
    margin: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-self: center; //自身在容器中居中
    margin-top: 16px;
    margin-bottom: 16px;
  }
}
</style>
