<template>
  <div class="Header">
     <div class="wrapper">
       <div class="left"></div>
       <div class="right">
         <i class="el-icon-search icon" />
         <el-dropdown>
            <span class="info">
              <span>AdminUser</span>
              <el-avatar size="small" :src="'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'"></el-avatar>
            </span>
           <el-dropdown-menu slot="dropdown">
             <el-dropdown-item @click.native="handleLogout">登出系统</el-dropdown-item>
           </el-dropdown-menu>
         </el-dropdown>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    handleLogout () {
      console.log('handleLogout')
      this.$router.push({ path: '/login' })
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
@import "~@/assets/scss/common.scss";
.Header {
  min-height: 80px;
  display: flex;
  align-items: center;
  .wrapper {
    flex: 1;
    box-sizing: border-box;
    height: 60px;
    background: Gradients(118deg, var(--color-primary));
    border-radius: 12px;
    @include gk-box-shadow;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {}
    .right {
      display: flex;
      align-items: center;
      .icon {
        color: #FFF;
        cursor: pointer;
      }
      .info {
        display: flex;
        align-items: center;
        cursor: pointer;
        span {
          margin: 0 12px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
