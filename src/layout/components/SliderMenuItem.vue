<template>
  <div>
    <el-submenu v-if="isAloneMenu" :index="index">
      <template slot="title">
        <i :class="menu.icon || ''"></i>
        <span slot="title">{{ menu.title }}</span>
      </template>
      <SliderMenuItem v-for="item in menu.children" :key="item.path" :menu="item" :index="item.path"/>
    </el-submenu>
    <el-menu-item v-else :index="index" @click.native="handleMenu(menu)">
      <template slot="title">
        <i :class="menu.icon || ''"></i>
        <span slot="title">{{ menu.title }}</span>
      </template>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'SliderMenuItem',
  components: {},
  props: {
    menu: {
      type: Object
    },
    index: {
      type: String
    }
  },
  data () {
    return {}
  },
  computed: {
    isAloneMenu () {
      let isHidden = this.menu.hidden
      let isHaveChild = Boolean(this.menu.children && this.menu.children.length >= 1)
      let isHaveShowChild = false
      if (isHaveChild) {
        for (let i = 0; i < this.menu.children.length; i++) {
          if (this.menu.children[i].hidden === false) {
            isHaveShowChild = true
            break
          }
        }
      }
      // 返回 不隐藏 且 有children 且 有children不隐藏
      return !isHidden && isHaveChild && isHaveShowChild
    }
  },
  watch: {
  },
  methods: {
    // 切换菜单
    handleMenu (menu) {
      this.$router.push({ path: menu.path })
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
    .SilderMenuItem {
    }
</style>
