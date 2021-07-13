<template>
  <div class="index">
    子应用 的 角色管理
    <div @click="num += 1"> 数据 + </div>
    {{ num }}
  </div>
</template>

<script>
import actions from '../../actions'
import { mapState } from 'vuex'
export default {
  name: 'index',
  components: {},
  props: {},
  data () {
    return {
      num: 0
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
