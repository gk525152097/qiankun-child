<template>
  <div class="index">
    <div class="login-box">
      <div class="img">
        <div>
          <a href="https://gk525152097.github.io" target="_block">GKLiguang</a> copyright @ 2021 - {{ new Date().toLocaleString().slice(0,4) }}
        </div>
      </div>
      <div class="box">
        <div class="title-wrapper">
          <div class="title">登陆系统</div>
          <div class="titleSub">欢迎使用 微前端 系统！</div>
        </div>
        <div class="form">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
              <el-input placeholder="请输入用户名" prefix-icon="el-icon-help" v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input placeholder="请输入密码" prefix-icon="el-icon-help" v-model="ruleForm.password" auto-complete="new-password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
              <div class="code-wrapper">
                <el-input placeholder="请输入验证码" prefix-icon="el-icon-help" v-model="ruleForm.code" />
                <img src="#" alt="">
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="btn-wrapper">
          <el-button type="primary" class="btn" @click="() => handleSubmit('ruleForm')">登 &nbsp;&nbsp; 录</el-button>
          <div class="btnSub-wrapper">
            <div class="btnsub" @click="handleHelp">使用帮助</div>
            <div class="btnsub" @click="handleForget">忘记密码</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { handleLogin } from '@/api/system/index'
import { mapMutations } from 'vuex'
export default {
  name: 'index',
  components: {},
  props: {},
  data () {
    return {
      ruleForm: {
        name: '',
        password: '',
        code: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    ...mapMutations({
      SET_ROUTERS: 'system/SET_ROUTERS'
    }),
    handleLogin () {
      // 登陆 获取用户信息
      handleLogin()
        .then(res => {
          console.log(res) // 用户信息 登陆页面只做登陆请求 路由创建放到permission做
          this.$router.push({ path: '/' })
        })
    },
    handleSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.handleLogin()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleHelp () {
      console.log('handleHelp')
    },
    handleForget () {
      console.log('handleForget')
    }
  },
  created () {
  },
  mounted () {
    console.log(this.$store)
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>

>>> .el-form--label-top .el-form-item__label {
  font-size: 12px;
  line-height: 18px;
  padding: 0;
}

.index {
  width: 100%;
  height: 100%;
  background: url("~@/assets/img/login_bg.png") center no-repeat ;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(5px);
    background-image: inherit;
    background-position: center;
  }
  .login-box {
    z-index: 2;
    width: 66%;
    height: 66%;
    border-radius: 24px;
    box-shadow: 5px 5px 5px #666666;
    background: #ffffff;
    display: flex;
    overflow: hidden;
    .img {
      flex: 1;
      background: url("~@/assets/img/login_bg.png") center no-repeat ;
      display: flex;
      align-items: flex-end;
      padding: 24px;
    }
    .box {
      width: 360px;
      box-sizing: border-box;
      padding: 24px;
      .title-wrapper {
        margin-bottom: 40px;
        .title {
          font-size: 32px;
          font-weight: bold;
        }
      }
      .form {
        margin-bottom: 40px;
        .code-wrapper {
          display: flex;
          .el-input {
            flex: 1;
          }
          img {
            background: #EEEEEE;
            width: 120px;
          }
        }
      }
      .btn-wrapper {
        .btn {
          width: 100%;
          margin-bottom: 8px;
        }
        .btnSub-wrapper {
          display: flex;
          justify-content: space-between;
          .btnsub {
            cursor: pointer;
            &:hover {
              color: dodgerblue;
            }
          }
        }
      }
    }
  }
}
</style>
