<template>
    <div class="index">
      子应用 菜单管理
      <div class="title">测试</div>
      <div class="title">主应用信息:{{ JSON.stringify(globalData) }}</div>
      <el-button @click="handleInfo">调用主应该修改数据接口</el-button>
      <div class="btn" @click="handleSelfRouter">子应用页面跳转</div>
      <div class="btn" v-if="$isChild" @click="$jumpRouter('/menuManage', {name: 1})">子应用 跳转 主应用</div>
      <div class="btn" v-if="$isChild" @click="$jumpRouter('/app-vue-demo2/menuManage', {name: 1})">子应用A 跳转 子应用B</div>
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
    }
  },
  computed: {
    ...mapState({
      globalData: state => state.global.globalData
    })
  },
  watch: {},
  methods: {
    handleSelfRouter () {
      this.$router.push({ path: '/roleManage' })
    },
    handleInfo () {
      this.$setGlobalState({ info: 1 })
    }
  },
  created () {
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
.index {
  .btn {
    display: inline-block;
    margin: 0 12px;
    padding: 8px 16px;
    border: 1px solid #409eff;
    border-radius: 8px;
    cursor: pointer;
    color: #409eff;
    &:hover {
      background: #409eff;
      color: #ffffff;
    }
  }
}
</style>
