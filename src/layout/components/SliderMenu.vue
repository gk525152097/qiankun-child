<template>
  <div class="SilderMenu2">
    <el-menu :default-active="menuActive" class="el-menu-vertical-demo" :collapse="isCollapse">
      <SliderMenuItem v-for="item in menuTree" :key="item.path" :menu="item" :index="item.path"/>
    </el-menu>
  </div>
</template>

<script>
import SliderMenuItem from './SliderMenuItem'
import { mapState } from 'vuex'
export default {
  name: 'SliderMenu',
  components: {
    SliderMenuItem
  },
  props: {
    isCollapse: {
      required: true,
      type: Boolean
    }
  },
  data () {
    return {
      menuActive: ''
    }
  },
  computed: {
    ...mapState({
      menuTree: state => state.system.menuTree
    })
  },
  watch: {
    $route () {
      const { path } = this.$route
      // 路由跳转 修改路由
      this.menuActive = path
    }
  },
  methods: {
    // 切换应用
    handleApp (app) {
      this.$router.push({ path: app.activeRule, mate: app })
    }
  },
  created () {
  },
  mounted () {
  },
  updated () {
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/common.scss";
>>> .menu-icon {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}

>>> .el-menu {
  transition: var(--transition-m);
  border: none;
  background: transparent;
  margin-left: -12px;
}
>>> .el-submenu__title {
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  transition: all 0.3s;
  padding-left: 20px;
  color: #ffffff;
}
>>> .el-submenu__title:hover  {
  transform: translateX(5px);
  background: none;
}
>>> .el-menu-item {
  color: #ffffff;
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  border-radius: var(--border-radius-m);
  padding-left: 20px;
}
>>> .el-submenu .el-menu-item {
  height: 40px;
  line-height: 40px;
}
>>> .el-menu-item-group__title {
  padding-left: 20px;
}
>>> .el-menu-item:hover {
  transition: all 0.3s;
  transform: translateX(5px);
  background: none;
}
>>> .el-menu-item.is-active {
  color: rgba(var(--color-font-contrary), 1);
  background: Gradients(118deg, var(--color-primary));
  box-shadow: BoxShow(var(--color-primary));
}
.SilderMenu2 {
  .separate-title {
    font-size: 16px;
    color: rgba(var(--color-primary), 1);
    margin: 20px 0 8px 0;

  }
}
</style>
