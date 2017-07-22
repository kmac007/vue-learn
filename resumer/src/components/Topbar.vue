<template>
  <div id="topbar">
    <div class="wrap">
      <span class="logo">Resumer</span>

      <div class="actions">
        <div v-if="logined" class="userActions">
          <span class="welcome">你好，{{user.username}}</span>
          <a class="button" href="#" @click.prevent="signOut">登出</a>
        </div>
        <div v-else class="userActions">
          <a href="#" class="primary" @click.prevent="signUpDialogVisible=true">注册</a>
          <a href="#" class="primary" @click.prevent="signInDialogVisible=true">登录</a>
          <!-- 点击注册按钮时，signUpDialogVisible变为true，通过在子组件上显示的用props选项将父组件的数据传入子组件中,要动态地绑定父组件的数据到子模板的 props可使用v-bind -->
        </div>
        <myDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible=false">
          <SignUpForm @success="signIn($event)"></SignUpForm>
        </myDialog>
        <myDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible=false">
          <SignInForm @success="signIn($event)"></SignInForm>
        </myDialog>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import myDialog from './myDialog'
import AV from '../lib/leancloud'

export default {
  name: 'Topbar',
  data() {
    return {
      signUpDialogVisible: false,
      signInDialogVisible: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    logined() {
      return this.user.id
    }
  },
  components: {
    SignUpForm, myDialog, SignInForm
  },
  methods: {
    signIn(user) {
      this.signUpDialogVisible = false
      this.signInDialogVisible = false
      this.$store.commit('setUser', user)
    },
    signOut() {
      AV.User.logOut()
      this.$store.commit('removeUser')
    }
  }
}
</script>

<style scoped lang="scss">
#topbar {
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  .wrap {
    min-width: 1024px;
    max-width: 1440px;
    margin: 0 auto;
    height: 64px;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }
  .logo {
    font-size: 24px;
    color: #000;
  }
}

.primary {
  font-size: 16px;
  color: #000;
  background-color: lightblue;
  text-decoration: none;
  padding: 5px 10px;
  &:hover {
    background-color: lightgray;
    color: #fff;
  }
}

.actions {
  display: flex;
  .userActions {
    margin-right: 3em;
  }
}
</style>