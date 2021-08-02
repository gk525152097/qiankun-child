<template>
  <div class="index">
    <global-card>
      <div class="inner-box">
        <global-card class="role-box">
          <div class="title">角色</div>
          <div class="list-wrapper">
            <div v-for="(item, index) in roleList" :class="['item', item.id === activeRole ? 'active' : '']" :key="index" @click="handleRole(item.id)">
              {{ item.name }}
            </div>
          </div>
        </global-card>
        <global-card class="menu-box">
          <div class="title">菜单权限</div>
          <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            default-expand-all
            :default-checked-keys="[5]"
            :props="defaultProps"
          >
          </el-tree>
        </global-card>
        <global-card class="function-box">
          <div class="title">功能权限</div>
          <div class="list-wrapper">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="item in functionList" :label="item.name" :key="item.id">{{ item.name }}</el-checkbox>
            </el-checkbox-group>
          </div>
        </global-card>
      </div>
    </global-card>
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
      checkAll: false,
      checkedCities: ['用户新增', '用户修改'],
      isIndeterminate: true,
      activeName: '主应用',
      roleList: [
        { id: 1, name: '系统管理员' },
        { id: 2, name: '配置管理员' },
        { id: 3, name: '用户管理员' }
      ],
      activeRole: 1,
      functionList: [
        { id: 1, name: '用户新增' },
        { id: 12, name: '用户修改' },
        { id: 13, name: '用户删除' }
      ],
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
  },
  watch: {},
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? this.functionList.map(item => item.name) : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.functionList.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.functionList.length
    },
    // 切换角色
    handleRole (id) {
      this.activeRole = id
    },
    // 切换应用
    handleClick (tab, event) {
      this.activeName = tab.name
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
  .inner-box {
    border-radius: 12px;
    background: #f5f5f5;
    display: flex;
    align-items: baseline;
    padding: 12px;
    .title {
      font-size: 16px;
      color: #3E3E3E;
      margin-bottom: 12px;
    }
    .role-box {
      width: 200px;
      .list-wrapper {
        .item {
          cursor: pointer;
          color: #3E3E3E;
          border-bottom: 1px solid #dddddd;
          padding: 12px;
          &:last-child {
            border: none;
          }
          &.active, &:hover {
            color: #409eff;
          }
        }
      }
    }
    .menu-box {
      flex: 1;
      margin: 0 12px;
    }
    .function-box {
      flex: 3;
    }
  }
}
</style>
