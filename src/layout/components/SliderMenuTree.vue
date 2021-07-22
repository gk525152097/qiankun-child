<script>
export default {
  name: 'SliderMenuTree',
  components: {
  },
  props: {
    isCollapse: {
      required: true,
      type: Boolean
    },
    routers: {
      required: true,
      type: Array
    }
  },
  methods: {
    handleIcon (h, item) {
      // http | https 正则
      const reg = /(http|https):\/\/([\w.]+\/?)\S*/
      // 静态资源 正则
      const reg2 = /^static\S*/
      if (reg.test(item.icon)) { // 外链
        return h(
          'img',
          {
            class: 'menu-icon',
            attrs: {
              src: item.icon
            }
          }
        )
      } else if (reg2.test(item.icon)) { // 静态资源
        return h(
          'img',
          {
            class: 'menu-icon',
            attrs: {
              src: item.icon
            }
          }
        )
      } else { // element内置
        return h(
          'i',
          { class: item.icon }
        )
      }
    },
    handleLink (item) {
      // http | https 正则
      const reg = /(http|https):\/\/([\w.]+\/?)\S*/
      // 判定是否外链地址
      const httpLink = reg.test(item.path)
      if (httpLink) {
        return () => window.open(item.path)
      } else {
        return () => this.handleRouter(item.path)
      }
    },
    handleMenuItem (h, item) {
      // 判定是否存在子节点
      const haveChild = item.children && item.children.length
      // 是否唯一子节点
      const onlyChild = haveChild && item.children.length === 1
      // 唯一子节点是否隐藏
      const onlyChildHidden = onlyChild && item.children[0].hidden
      // 唯一子节点隐藏的 将 子节点地址作为跳转地址
      const redirectPath = onlyChildHidden ? item.children[0].path : null
      // 菜单隐藏
      if (item.hidden) {
        return null
      }
      if (haveChild && !onlyChild) {
        return h(
          'el-submenu',
          {
            props: {
              index: `'${item.path}'`,
              path: item.path
            },
            on: {
              click: this.handleLink(item)
            }
          },
          [
            h(
              'template',
              { slot: 'title' },
              [
                this.handleIcon(h, item),
                h(
                  'span',
                  { slot: 'title' },
                  item.name
                )
              ]
            ),
            ...item.children.map(child => this.handleMenuItem(h, child))
          ]
        )
      } else if (haveChild && onlyChild && !onlyChildHidden) {
        return h(
          'el-submenu',
          {
            props: {
              index: `'${item.path}'`,
              path: redirectPath
            },
            on: {
              click: this.handleLink(item)
            }
          },
          [
            h(
              'template',
              { slot: 'title' },
              [
                this.handleIcon(h, item),
                h(
                  'span',
                  { slot: 'title' },
                  item.name
                )
              ]
            ),
            ...item.children.map(child => this.handleMenuItem(h, child))
          ]
        )
      } else {
        return h(
          'el-menu-item',
          {
            props: {
              index: `'${item.path}'`,
              path: item.path
            },
            on: {
              click: this.handleLink(item)
            }
          },
          [
            this.handleIcon(h, item),
            h(
              'span',
              {
                slot: 'title'
              },
              item.name
            )
          ]
        )
      }
    },
    handleRouter (path) {
      if (this.$route.path !== path) {
        this.$router.push({ path: path })
      }
    },
    // rank正序
    description (a, b) {
      return a.rank - b.rank
    },
    descriptionRank (list) {
      list.sort(this.description)
      list.forEach(item => {
        if (Array.isArray(item.children)) {
          this.descriptionRank(item.children)
        }
      })
    }
  },
  created () {
    this.descriptionRank(this.routers)
  },
  mounted () {
  },
  updated () {
    this.$nextTick(() => {
      this.$refs['elMenu'].activeIndex = `'${this.$route.path}'`
    })
  },
  destroyed () {
  },
  render (h) {
    return h(
      'el-menu',
      {
        ref: 'elMenu',
        props: {
          collapse: this.isCollapse,
          defaultActive: `'${this.$route.path}'`
        }
      },
      this.routers.map(child => this.handleMenuItem(h, child))
    )
  }
}
</script>
