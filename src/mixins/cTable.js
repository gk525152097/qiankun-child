export default {
  data () {
    return {
      pageName: '',
      showSearch: true,
      visibleForm: false,
      currentPage: 1,
      pageSize: 20,
      searchForm: {},
      searchFormRules: {},
      tableData: [],
      checkItem: {},
      totalData: 1
    }
  },
  computed: {},
  methods: {
    /**
     * 切换显示form弹窗
     * @param record 编辑的时候 传入record
     */
    handleVisibleForm (record) {
      this.checkItem = record || {}
      this.visibleForm = !this.visibleForm
    },
    /**
     * 修改分页大小
     * 同时修改查询页 以防止查询空数据
     * @param e 分页大小
     */
    handleSizeChange (e) {
      this.pageSize = e
      this.currentPage = 1
      this.handlePageData()
    },
    /**
     * 修改页码
     * @param e 页码
     */
    handleCurrentChange (e) {
      this.currentPage = e
      this.handlePageData()
    },
    /**
     * 重制
     * 重制查询框内容
     * 重制分页大小
     * 重制页码
     */
    handleReset () {
      this.$refs['searchForm'].resetFields()
      this.pageSize = 20
      this.currentPage = 1
      this.handlePageData()
    }
  }
}
