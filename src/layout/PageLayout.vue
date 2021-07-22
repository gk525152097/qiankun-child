<template>
  <div class="pageLayout">
    <transition :name="routerTransition" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath" />
      </keep-alive>
    </transition>
    <transition :name="routerTransition" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'pageLayout',
  components: {},
  props: {},
  data () {
    return {
      routerTransition: 'zoom-fade'
    }
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
    .pageLayout {
    }
</style>
