<template>
  <div class="Header">
    <div class="wrapper">
      <div class="left">
        <div class="img"></div>
        <div class="title">乾坤-{{ appName }}</div>
      </div>
      <div class="right">
        <i class="el-icon-search icon" />
        <el-dropdown>
            <span class="info">
              <span>{{ username }}</span>
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
import { mapState } from 'vuex'
import { appName } from '../../systemConfig'
export default {
  name: 'Header',
  components: {},
  props: {},
  data () {
    return {
      appName: appName
    }
  },
  computed: {
    ...mapState({
      username: state => state.system.username
    })
  },
  watch: {
  },
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
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  .wrapper {
    flex: 1;
    box-sizing: border-box;
    height: 60px;
    background: Gradients(118deg, var(--color-primary));
    /*border-radius: 0 0 12px 12px;*/
    @include box-shadow;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: flex-end;
      .img {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        background: Gradients(118deg, var(--color-primary));
        margin-right: 8px;
        border: 1px solid #ffffff;
      }
      .title {
        overflow: hidden;
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
        font-family: cursive;
        &.app {
          cursor: pointer;
        }
      }
    }
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
