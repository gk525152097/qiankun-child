<template>
  <div class="index">
    child
    <div class="title">{{ error.code }}</div>
    <div class="info">{{ error.info }}</div>
  </div>
</template>

<script>
const errorInfo = {
  '404': {
    code: 404,
    info: '页面不存在'
  },
  '500': {
    code: 500,
    info: '系统错误'
  },
  '401': {
    code: 401,
    info: '暂无权限'
  }
}
export default {
  name: 'index',
  components: {},
  props: {},
  data () {
    return {
      error: {
        code: '404',
        info: '页面不存在'
      }
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created () {
  },
  mounted () {
    // 获取query 判断错误
    let query = ''
    this.error = errorInfo[query || '404']
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
.index {
}
</style>
