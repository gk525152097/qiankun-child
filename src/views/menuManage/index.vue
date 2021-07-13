<template>
    <div class="index">
      子应用 菜单管理
      <div class="btn" @click="handleSelfRouter">子应用页面跳转</div>
      <div class="btn" v-if="$jumpRouter" @click="$jumpRouter('/menuManage', {name: 1})">子应用 跳转 主应用</div>
      <div class="btn" v-if="$jumpRouter" @click="$jumpRouter('/app-vue-demo2/menuManage', {name: 1})">子应用A 跳转 子应用B</div>
    </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    handleSelfRouter () {
      this.$router.push({ path: '/roleManage' })
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
