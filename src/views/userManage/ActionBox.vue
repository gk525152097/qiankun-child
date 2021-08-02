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
        <p>登陆账号：登陆账号</p>
        <p>用户名称：用户名称</p>
        <p>用户角色：用户角色</p>
      </el-popover>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="() => this.$emit('handleVisibleForm')">取 消</el-button>
      <el-button type="primary" class="btn-primary" @click="handleOk">确 定</el-button>
    </span>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="登陆账号" prop="account">
        <el-input v-model.trim="form.account"></el-input>
      </el-form-item>
      <el-form-item label="用户名称" prop="username">
        <el-input v-model.trim="form.username"></el-input>
      </el-form-item>
      <el-form-item label="用户角色" prop="role">
        <el-input v-model.trim="form.role"></el-input>
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
      form: {
        name: '',
        appName: '',
        entry: '',
        activeRule: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入应用名称', trigger: 'blur' }
        ],
        appName: [
          { required: true, message: '请输入项目名称', trigger: 'blur' }
        ],
        entry: [
          { required: true, message: '请输入应用地址', trigger: 'blur' }
        ],
        activeRule: [
          { required: true, message: '请输入匹配路径', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    getTitle () {
      return this.title ? this.title : (Object.keys(this.checkItem).length ? '编辑' : '新增')
    }
  },
  watch: {
    checkItem () {
      this.form = {
        ...this.form,
        ...this.checkItem
      }
    }
  },
  methods: {
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
  updated () {
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
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
</style>
