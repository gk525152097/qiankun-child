<template>
  <div class="index">
    <global-card class="card">
      <div class="search-bar" v-show="showSearch">
        <el-form v-if="showSearch" label-position="top" label-width="80px" :model="searchForm" ref="searchForm" :rules="searchFormRules">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="配置名称" prop="name">
                <el-input v-model="searchForm.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="btn-wrapper">
        <div class="right">
          <el-button class="btn-primary" @click="() => handleVisibleForm()">+ 新增配置</el-button>
        </div>
        <div class="right">
          <el-button class="bg-primary have-bg-color" icon="el-icon-search" circle @click="handlePageData" title="查询"></el-button>
          <el-button class="bg-primary have-bg-color" icon="el-icon-refresh-right" circle @click="handleReset" title="重制"></el-button>
          <el-button v-if="showSearch" icon="el-icon-arrow-up" circle @click="showSearch = !showSearch" title="展开"></el-button>
          <el-button v-else icon="el-icon-arrow-down" circle @click="showSearch = !showSearch" title="收回"></el-button>
        </div>
      </div>
    </global-card>
    <global-card>
      <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        default-expand-all
      >
        <el-table-column prop="parentId" label="配置名称"></el-table-column>
        <el-table-column prop="name" label="配置描述"></el-table-column>
        <el-table-column prop="code" label="配置字段"></el-table-column>
        <el-table-column prop="code" label="配置值"></el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="() => handleVisibleForm(scope.row)">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </global-card>
    <ActionBox
      :checkItem="checkItem"
      :visible="visibleForm"
      @handleVisibleForm="handleVisibleForm"
      @handleAdd="handleAdd"
    />
  </div>
</template>

<script>
import ActionBox from './ActionBox'
import mixin from '@/mixins/cTable'
export default {
  name: 'index',
  components: {
    ActionBox
  },
  mixins: [mixin],
  props: {},
  data () {
    return {
      showSearch: true,
      activeName: '主应用',
      tableData: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: 2,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }]
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleClick (tab, event) {
      this.activeName = tab.name
    },
    /**
     * 修改
     */
    handleModify (formData) {
      console.log(formData)
      console.log(this.checkItem)
      // handleModify()
      //   .then(res => console.log(res))
      //   .catch(res => console.log(res))
    },
    /**
     * 新增
     */
    handleAdd (formData) {
      console.log(formData)
      // handleAdd()
      //   .then(res => console.log(res))
      //   .catch(res => console.log(res))
    },
    /**
     * 删除操作
     * @param record 删除的当前项
     */
    handleDelete (record) {
      // handleDelete({ id: record.id })
      //   .then(res => this.$message(res.message))
      //   .catch(res => this.$message(res.message))
    },
    /**
     * 查询
     */
    handlePageData () {
      // handlePageData({
      //   ...this.searchForm,
      //   pageSize: this.pageSize,
      //   currentPage: this.currentPage
      // })
      //   .then(res => { this.tableData = res.data })
      //   .catch(res => this.$message(res.message))
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
  @import "~@/assets/scss/common";
  .index {
    .card {
      margin-bottom: 12px;
    }
    .btn-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
