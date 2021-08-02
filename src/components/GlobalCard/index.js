import GlobalCard from './GlobalCard.vue'

const loading = {
  install (Vue) {
    Vue.component('GlobalCard', GlobalCard)
  }
}

export default loading
