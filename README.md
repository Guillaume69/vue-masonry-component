# vue-masonry-component

[![](https://data.jsdelivr.com/v1/package/npm/vue-masonry-component/badge)](https://www.jsdelivr.com/package/npm/vue-masonry-component)

Vue.js component wrapping [masonry library](http://masonry.desandro.com/)

## Usage

### Install

- npm:  ```npm install vue-masonry-component --save ```
- yarn: ```yarn add vue-masonry-component```

### Usage in your app
in you main.js
    
```js
import Vue from 'vue'
import VueMasonryComponent from 'vue-masonry-component'

Vue.use(VueMasonryComponent)
```
    
in your vue files
```html
<template>
    <masonry>
        <!-- blocks -->
    </masonry>
</template>
```

### Properties & example

all the props and events are available according to the [original masonry plugin](http://masonry.desandro.com/options.html).

those are passed to the component with kebab-case (for the props and NOT for the events) instead of camelCase like in the masonry doc.

example (taken from the [original masonry example](https://codepen.io/desandro/pen/Jdbzvx)):
    
```html
<template>
    <masonry
            :item-selector="itemSelector"
            :column-width="columnWidth"
            @layoutComplete="onLayoutComplete"
        >
            <div class="static-banner">Static banner</div>
            <div class="grid-item"></div>
            <div class="grid-item grid-item--width2 grid-item--height2"></div>
            <div class="grid-item grid-item--height3"></div>
            <div class="grid-item grid-item--height2"></div>
            <div class="grid-item grid-item--width3"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item grid-item--height2"></div>
            <div class="grid-item grid-item--width2 grid-item--height3"></div>
            <div class="grid-item"></div>
            <div class="grid-item grid-item--height2"></div>
            <div class="grid-item"></div>
            <div class="grid-item grid-item--width2 grid-item--height2"></div>
            <div class="grid-item grid-item--width2"></div>
            <div class="grid-item"></div>
            <div class="grid-item grid-item--height2"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item grid-item--height3"></div>
            <div class="grid-item grid-item--height2"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item grid-item--height2"></div>   
    </masonry>
</template>

<script>
export default {
    data () {
        return {
            itemSelector: '.grid-item',
            columnWidth: 160
        }
    },
    methods: {
        onLayoutComplete () {
            console.log('layout complete !')
        }
    }
}
</script>

<style>
    /* ---- grid ---- */
    
    .grid {
      background: #EEE;
      max-width: 1200px;
    }
    
    /* clearfix */
    .grid:after {
      content: '';
      display: block;
      clear: both;
    }
    
    /* ---- grid-item ---- */
    
    .grid-item {
      width: 160px;
      height: 120px;
      float: left;
      background: #D26;
      border: 2px solid #333;
      border-color: hsla(0, 0%, 0%, 0.5);
      border-radius: 5px;
    }
    
    .grid-item--width2 { width:  320px; }
    .grid-item--width3 { width:  480px; }
    .grid-item--width4 { width:  720px; }
    
    .grid-item--height2 { height: 200px; }
    .grid-item--height3 { height: 260px; }
    .grid-item--height4 { height: 360px; }
    
    /* ---- static-banner ---- */
    
    .static-banner {
      position: absolute;
      left: 10px;
      top: 10px;
      padding: 10px 30px;
      color: white;
      background: #A2C;
      font-size: 22px;
      z-index: 2; /* above items */
    }
</style>
```

you can call any [method](https://masonry.desandro.com/methods.html) by getting the instance this way:

```html
<template>
	<masonry ref="masonry">
	</masonry>
</template>

<script>
export default {
	mounted () {
    	this.$refs.masonry.getInstance().masonryMethod()
        // calling this.$refs.masonry.getInstance().layout() will probably be usefull when
        // an item has changed size
    }
}
</script>
```
 

### License

 MIT licence