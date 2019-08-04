import VueMasonryComponent from './components/vue-masonry-component.vue'

const MasonryComponent = {
  install (Vue, options) {
    Vue.component('masonry-component', VueMasonryComponent)
  }
}

export default MasonryComponent
