<template>
  <div class="TabsBar">
    <el-tabs v-model="activeTab" type="card" closable @tab-remove="handleRemoveTab" @tab-click="handleLink">
      <el-tab-pane v-for="(item, index) in tabsList" :key="index" :label="item.name" :name="item.path" :value="item"/>
    </el-tabs>
  </div>
</template>

<script>
import { appName } from '@/systemConfig'
export default {
  name: 'TabsBar',
  components: {},
  props: {},
  data () {
    return {
      activeTab: '',
      tabsList: []
    }
  },
  computed: {
  },
  watch: {
    $route () {
      this.handleAddTab(this.$route)
    }
  },
  methods: {
    /**
     * 添加标签
     * @param route
     */
    handleAddTab (route) {
      const pathList = this.tabsList.map(item => item.path)
      if (!pathList.includes(route.path)) {
        this.tabsList = [...this.tabsList, { name: route.name, path: route.path }]
      }
      this.activeTab = route.path
      sessionStorage.setItem(`${appName}_tabsList`, JSON.stringify(this.tabsList))
    },
    /**
     * 删除标签
     * @param name
     */
    handleRemoveTab (path) {
      if (this.tabsList.length === 1) {
        this.$message('仅存在一个标签，不能删除！')
        return
      } else if (this.activeTab === path) {
        // 删除activeTab
        let tabIndex
        // 获取删除的位置
        this.tabsList.forEach((item, index) => {
          if (item.path === path) {
            tabIndex = index
          }
        })
        // 跳转到 tabIndex - 1 对应标签的path
        this.$router.push({ path: this.tabsList[tabIndex - 1].path })
      }
      // 删除tab
      let _tabsList = this.tabsList.map(item => {
        if (item.path !== path) {
          return item
        }
      }).filter(item => item)
      // 替换新列表
      this.tabsList = _tabsList
      // 存储到sessionStorage里
      sessionStorage.setItem(`${appName}_tabsList`, JSON.stringify(this.tabsList))
    },
    /**
     * 跳转页面
     * @param path 标签对应的页面地址
     */
    handleLink (tab) {
      if (tab.$attrs.value.path !== this.$route.path) {
        this.$router.push({ path: tab.$attrs.value.path })
      }
    }
  },
  created () {
  },
  mounted () {
    this.tabsList = sessionStorage.getItem(`${appName}_tabsList`) ? JSON.parse(sessionStorage.getItem(`${appName}_tabsList`)) : []
    this.handleAddTab(this.$route)
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
.TabsBar {
    padding-bottom: 12px;
    >>> .el-tabs__nav-next {
      line-height: 24px;
    }
    >>> .el-tabs__nav-prev {
      line-height: 24px;
    }
    >>> .el-tabs.el-tabs--card.el-tabs--top {
      height: 24px;
    }
    >>> .el-tabs--card>.el-tabs__header {
      border: none;
    }
    >>> .el-tabs--card>.el-tabs__header .el-tabs__nav {
      border: none;
    }
    >>> .el-tabs__item {
      border: 1px solid #409eff !important;
      border-radius: 4px !important;
      height: 24px;
      line-height: 24px;
      padding: 0 8px !important;
      margin-right: 8px;
      color: #409eff;
      background: rgba(255,255,255, 1);
    }
    >>> .el-tabs__item.is-active {
      background: linear-gradient(118deg, #409eff, #409eff99) !important;
      color: rgba(255,255,255, 1) !important;
    }
  }
</style>
