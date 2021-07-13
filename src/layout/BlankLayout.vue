<template>
  <div class="BlankLayout">
    <TabsBar />
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
import TabsBar from './components/TabsBar'
export default {
  name: 'BlankLayout',
  components: {
    TabsBar
  },
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
    .BlankLayout {
    }
</style>
