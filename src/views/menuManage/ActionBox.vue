<template>
  <el-dialog
    class="ActionBox"
    :title="getTitle"
    :visible.sync="visible"
    width="50%"
    custom-class="dialog-box"
    :destroy-on-close="true"
    :before-close="() => this.$emit('handleVisibleForm')"
  >
    <span slot="title">
      <span class="title">{{ getTitle }}</span>
      <el-popover
        placement="top-start"
        trigger="hover"
      >
        <span slot="reference" class="sub">说明</span>
        <p>父级菜单：新增菜单的上级菜单</p>
        <p>菜单名称：菜单的显示名称</p>
        <p>菜单图标：可选择、可输入地址</p>
        <p>菜单地址：菜单地址</p>
        <p>组件路径：菜单对应页面的组件项目路径src下</p>
        <p>转发地址：点击菜单跳转到新菜单的地址</p>
        <p>是否隐藏：菜单是否显示在菜单栏里</p>

      </el-popover>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="() => this.$emit('handleVisibleForm')">取 消</el-button>
      <el-button type="primary" class="btn-primary" @click="handleOk">确 定</el-button>
    </span>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="父级菜单" prop="parentId">
        <el-select
          v-model="form.title"
          style="width: 100%"
          clearable
          placeholder="请选择"
          ref="parentId"
        >
          <el-option hidden key="parentId" :value="form.parentId" :label="parentId" />
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-select>
      </el-form-item>
      <el-form-item label="菜单名称" prop="name">
        <el-input v-model.trim="form.name"></el-input>
      </el-form-item>
      <el-form-item label="菜单图标" prop="icon">
        <el-autocomplete
          style="width: 100%"
          v-model="form.icon"
          :fetch-suggestions="defaultIconList"
          placeholder="请输入内容"
          @select="handleIcon">
          <template slot-scope="{ item }">
            <div class="component-select">
              <i :class="item" />
              <span>{{ item }}</span>
            </div>
          </template>
        </el-autocomplete>
      </el-form-item>
      <el-form-item label="菜单地址" prop="path">
        <el-input v-model.trim="form.path"></el-input>
      </el-form-item>
      <el-form-item label="组件路径" prop="component">
        <el-autocomplete
          style="width: 100%"
          v-model="form.component"
          :fetch-suggestions="defaultComponentList"
          placeholder="请输入内容"
          @select="handleComponent">
          <template slot-scope="{ item }">
            <div class="component-select">
              <span>{{ item.name }}</span>
              <span>{{ item.component }}</span>
            </div>
          </template>
        </el-autocomplete>
      </el-form-item>
      <el-form-item label="转发地址" prop="redirect">
        <el-input v-model.trim="form.redirect"></el-input>
      </el-form-item>
      <el-form-item label="是否隐藏" prop="hidden">
        <el-radio-group v-model="form.hidden">
          <el-radio-button label="0">否</el-radio-button>
          <el-radio-button label="1">是</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'ActionBox',
  components: {},
  props: {
    visible: {
      required: true
    },
    checkItem: {},
    title: {}
  },
  data () {
    return {
      parentId: '',
      form: {
        parentId: '',
        name: '',
        icon: '',
        path: '',
        component: '',
        redirect: '',
        hidden: 0
      },
      rules: {
        parentId: [{ required: true, message: '请选择父级菜单', trigger: 'blur' }],
        name: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
        path: [{ required: true, message: '请输入菜单地址', trigger: 'blur' }],
        component: [{ required: true, message: '请输入组件路径', trigger: 'blur' }]
      },
      data: [{
        label: '一级 1',
        name: '测试',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    getTitle () {
      return this.title ? this.title : (Object.keys(this.checkItem).length ? '编辑' : '新增')
    }
  },
  watch: {},
  methods: {
    defaultIconList (queryString, cb) {
      if (queryString) {
        this.form.icon = queryString
      }
      let list = [
        'el-icon-edit'
      ]
      cb(list)
    },
    handleIcon (record) {
      this.form.icon = record
      this.$refs['form'].clearValidate(['icon'])
    },
    defaultComponentList (string, cb) {
      if (string) {
        this.form.component = string
      }
      let list = [
        { name: '基础布局', component: '/layout/BaseLayout' }
      ]
      cb(list)
    },
    handleComponent (record) {
      this.form.component = record.component
      this.$refs['form'].clearValidate(['component'])
    },
    handleNodeClick (data) {
      this.upResName = data.name
      this.form.title = data.name
      this.$refs.parentId.blur()
      this.$refs['form'].clearValidate(['parentId'])
    },
    handleOk () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (Object.keys(this.checkItem).length) {
            this.$emit('handleModify', {
              ...this.checkItem,
              ...this.form
            })
          } else {
            this.$emit('handleAdd', this.form)
          }
          this.$refs['form'].resetFields()
          this.parentId = ''
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
>>> .el-radio-button__orig-radio:checked+.el-radio-button__inner {
  @include bg-primary;
}
>>> [class*=" el-icon-"], [class^=el-icon-] {
  display: flex;
  align-items: center;
}
.ActionBox {
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .sub {
    color: #3E3E3E;
    cursor: pointer;
    &:hover {
      color: #409eff;
    }
  }
}
.component-select {
  display: flex;
  justify-content: space-between;
}
</style>
