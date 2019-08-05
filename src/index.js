import VueMasonryComponent from './components/vue-masonry-component.vue'

const MasonryComponent = {
  install (Vue, options) {
    Vue.component('masonry', VueMasonryComponent)
  }
}

export default MasonryComponent
