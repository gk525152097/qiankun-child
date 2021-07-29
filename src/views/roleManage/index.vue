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
    <div>{{ JSON.stringify(info) }}</div>
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false">
      <span>{{ appName }} 弹窗</span>
    </el-drawer>
  </div>
</template>

<script>
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
      drawer: false,
      info: {}
    }
  },
  computed: {
    ...mapState({
      globalData: state => state.global.globalData
    })
  },
  watch: {
    globalData: {
      handler: function(val, oldVal) {
        console.log('watch')
        console.log(val)
      },
      deep: true
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  },
  destroyed () {
  },
  activated () {
    console.log(this.globalData)
  }
}
</script>

<style lang="scss" scoped>
    .index {
    }
</style>
