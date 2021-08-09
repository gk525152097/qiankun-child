<template>
  <div class="index">
    <div class="item">
      <div>跳转测试</div>
      <el-button @click="handleRouter(1)" type="primary" >跳转主应用</el-button>
      <el-button @click="handleRouter(2)" type="primary" >跳转子应用B</el-button>
    </div>
    <div class="item">
      <div>抽屉测试</div>
      <el-button @click="drawer = true" type="primary" >抽屉</el-button>
    </div>
    <div class="item">
      <div>弹窗测试</div>
      <el-button @click="centerDialogVisible = true" type="primary" >弹窗</el-button>
    </div>
    <div class="item">
      <div>通信测试</div>
      <div>{{ JSON.stringify(globalData) }}</div>
      <el-button @click="handleVuex" type="primary">全局通信</el-button>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-drawer
      title="主应用"
      :visible.sync="drawer"
      :with-header="false">
      <span>主应用 弹窗</span>
    </el-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'index',
  components: {},
  props: {},
  data () {
    return {
      drawer: false,
      centerDialogVisible: false
    }
  },
  computed: {
    ...mapState({
      globalData: state => state.global.globalData
    })
  },
  watch: {
    globalData: {
      handler: function (val, oldVal) {
        console.log('子应用a')
        console.log(val)
        this.handleIframe()
      },
      deep: true
    }
  },
  methods: {
    handleIframe () {
      this.$message('子应用message')
    },
    handleRouter (code) {
      if (code === 1) {
        this.$jumpRouter('/', { form: '子应用A' })
      } else {
        this.$jumpRouter(`/app-vue-demo${code}`, { form: '子应用A' })
      }
    },
    handleVuex () {
      if (this.$setGlobalState) {
        this.$setGlobalState({ id: 'appA' })
      } else {
        this.$message('子应用message')
      }
    }
  },
  created () {
  },
  mounted () {
    console.log(this.globalData)
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
    .index {
      .item {
        margin: 24px;
      }
    }
</style>
