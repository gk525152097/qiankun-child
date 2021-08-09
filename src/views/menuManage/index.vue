<template>
  <div class="index">
    子应用A
    <global-card>
      <el-button class="btn-primary" @click="() => handleVisibleForm()">+ 新增菜单</el-button>
      <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
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
      checkItem: {},
      microApp: '',
      activeName: '',
      preActiveName: '',
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
      }, {
        id: 3,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [{
          id: 31,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 32,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }]
      }, {
        id: 4,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  computed: {
  },
  watch: {},
  methods: {
    handleAdd (record) {
      console.log(record)
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
  #container {
    min-height: 200px;
  }
}
</style>
