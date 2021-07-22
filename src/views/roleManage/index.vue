<template>
  <div class="index">
    <div class="box box1">{{ appName }}</div>
    <div class="box box2">
      <el-button @click="num += 1">+ 数据</el-button>
      <span>{{ num }}</span>
    </div>
    <div class="box box3">
      <el-button @click="drawer = true" type="primary" >抽屉</el-button>
    </div>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import actions from '../../actions'
import { mapState } from 'vuex'
import { appName } from '@/systemConfig'
export default {
  name: 'index',
  components: {},
  props: {},
  data () {
    return {
      num: 0,
      appName: appName,
      drawer: false
    }
  },
  computed: {
    ...mapState({
      test: state => state.system.test
    })
  },
  watch: {},
  methods: {
    handleActions () {
      actions.setGlobalState({ test: 2 })
      console.log(window.childAppList)
      window.childAppList[0].childStore.commit('system/SET_TEST', '主应用')
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
    }
</style>
