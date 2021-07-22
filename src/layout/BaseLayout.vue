<template>
  <div class="BaseLayout">
    <Header />
    <div class="contain">
      <div :class="['left', sideLock ? 'lock' : 'unlock', '']">
        <div
          :class="['slider-bar', !sideLock ? 'hidden' : '', sideShow ? 'show' : '']"
          @mouseenter="!sideLock ? sideShow = true : null"
          @mouseleave="!sideLock ? sideShow = false : null"
        >
          <div v-show="sideShow ? true : sideLock" class="btn" @click="handleChangeLock">
            <i v-if="sideLock" class="el-icon-lock icon active"></i>
            <i v-else class="el-icon-unlock icon"></i>
          </div>
          <div :class="['slider-menu', sideLock ? null : (sideShow ? null : 'lock') ]">
            <SliderMenu :isCollapse="sideLock ? false : !sideShow"/>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="wrapper">
          <div class="header">
            <TabsBar />
          </div>
          <div class="views">
            <transition :name="routerTransition" mode="out-in">
              <keep-alive>
                <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath" />
              </keep-alive>
            </transition>
            <transition :name="routerTransition" mode="out-in">
              <router-view v-if="!$route.meta.keepAlive" />
            </transition>
          </div>
          <div class="footer">
            <GlobalFooter />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import GlobalFooter from './components/GlobalFooter'
import SliderMenu from './components/SliderMenu'
import TabsBar from './components/TabsBar'
import { mapState } from 'vuex'
export default {
  name: 'BaseLayout',
  components: {
    GlobalFooter,
    SliderMenu,
    TabsBar,
    Header
  },
  props: {},
  data () {
    return {
      isCollapse: false,
      routerTransition: 'zoom-fade',
      sideLock: true,
      sideShow: false
    }
  },
  computed: {
    ...mapState({
      routers: state => state.system.routers
    })
  },
  watch: {},
  methods: {
    handleChangeLock () {
      this.sideLock = !this.sideLock
    }
  },
  created () {
  },
  mounted () {
    // console.log(this.$router.getRoutes())
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/common";
  .BaseLayout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    /*background: #20233a;*/
    .contain {
      flex: 1;
      display: flex;
      justify-content: stretch;
    }
    .left {
      position: relative;
      z-index: 1020;
      transition: all 0.3s;
      &.lock {
        width: 224px;
      }
      &.unlock {
        width: 60px;
      }
      .slider-bar {
        width: 100%;
        padding: 12px;
        box-sizing: border-box;
        transition: all 0.3s linear 0.01s;
        background: rgba(46, 51, 87, 1);
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        border-radius: 0 8px 8px 0;
        &.hidden {
          width: 60px;
        }
        &.show {
          width: 224px;
        }
        .btn {
          float: right;
          cursor: pointer;
          .icon {
            font-size: 16px;
            color: #FFF;
            &.active {
              color: #409eff;
            }
          }
        }
      }
    }
    .right {
      flex: 1;
      overflow-y: scroll;
      padding: 0 12px;
      .wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        .views {
          flex: 1;
        }
      }
    }
  }
</style>
