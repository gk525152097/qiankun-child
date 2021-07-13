<template>
  <div class="GlobalFooter">
    <a href="https://gk525152097.github.io" target="_block">GKLiguang</a> copyright @ 2021 - {{ new Date().toLocaleString().slice(0,4) }}
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  components: {},
  props: {},
  data () {
    return {}
  },

  computed: {},
  watch: {},
  methods: {},
  created () {
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
.GlobalFooter {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cccccc;
  padding: 12px;
  a {
    margin-right: 12px;
    color: #cccccc;
    &:active, &:focus {
      color: #cccccc;
    }
    &:hover {
      color: dodgerblue;
    }
  }
}
</style>
