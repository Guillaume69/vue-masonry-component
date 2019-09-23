<template>
  <div
    class="grid"
    :id="containerId"
  >
    <slot />
  </div>
</template>

<script>
import Masonry from 'masonry-layout'
import ImageLoaded from 'imagesloaded'

export default {
  name: 'VueMasonryComponent',
  props: {
    containerId: {
      type: String,
      default: 'masonry-container'
    },
    itemSelector: {
      type: String,
      default: '.grid-item'
    },
    columnWidth: {
      type: Number,
      default: undefined
    },
    gutter: {
      type: Number,
      default: undefined
    },
    horizontalOrder: {
      type: Boolean,
      default: false
    },
    percentPosition: {
      type: Boolean,
      default: true
    },
    stamp: {
      type: String,
      default: undefined
    },
    fitWidth: {
      type: Boolean,
      default: false
    },
    originLeft: {
      type: Boolean,
      default: true
    },
    originTop: {
      type: Boolean,
      default: true
    },
    containerStyle: {
      type: Object,
      default: () => {
        return { position: 'relative' }
      }
    },
    transitionDuration: {
      type: [String, Number],
      default: '0.4s'
    },
    stagger: {
      type: Number,
      default: undefined
    },
    resize: {
      type: Boolean,
      default: true
    },
    initLayout: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    this.instantiate()
  },
  data () {
    return {
      masonry: null,
      options: {
        itemSelector: this.itemSelector,
        columnWidth: this.columnWidth,
        gutter: this.gutter,
        horizontalOrder: this.horizontalOrder,
        percentPosition: this.percentPosition,
        stamp: this.stamp,
        fitWidth: this.fitWidth,
        originLeft: this.originLeft,
        originTop: this.originTop,
        containerStyle: this.containerStyle,
        stagger: this.stagger,
        resize: this.resize,
        initLayout: this.initLayout
      }
    }
  },
  methods: {
    instantiate () {
      const _this = this
      ImageLoaded('#' + this.containerId, function (instance) {
        console.log(_this.options)
        _this.masonry = new Masonry('#' + _this.containerId, _this.options)
        _this.masonry.on('layoutComplete', function (laidOutItems) {
          _this.$emit('layoutComplete', laidOutItems)
        })
        _this.$emit('loaded');
      })
    },
    getInstance () {
      return this.masonry
    },
    reInstantiate () {
      this.masonry.layout(this.options)
    }
  }
}
</script>
