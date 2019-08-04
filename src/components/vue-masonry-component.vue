<template>
  <div
    class="grid"
    id="masonry-container"
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
    const _this = this
    ImageLoaded('#masonry-container', function (instance) {
      _this.masonry = new Masonry('.grid', {
        itemSelector: _this.itemSelector,
        columnWidth: _this.columnWidth,
        gutter: _this.gutter,
        horizontalOrder: _this.horizontalOrder,
        percentPosition: _this.percentPosition,
        stamp: _this.stamp,
        fitWidth: _this.fitWidth,
        originLeft: _this.originLeft,
        originTop: _this.originTop,
        containerStyle: _this.containerStyle,
        stagger: _this.stagger,
        resize: _this.resize,
        initLayout: _this.initLayout
      })
      _this.masonry.on('layoutComplete', function (laidOutItems) {
        _this.$emit('layoutComplete', laidOutItems)
      })
    })
  },
  data () {
    return {
      masonry: null
    }
  },
  methods: {
    getInstance () {
      return this.masonry
    }
  }
}
</script>
