/*!
 * vue-masonry-component v1.0.13
 * (c) Guillaume Marchand
 * Released under the ISC License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Masonry = _interopDefault(require('masonry-layout'));
var ImageLoaded = _interopDefault(require('imagesloaded'));

//
var script = {
  name: 'VueMasonryComponent',
  props: {
    containerId: {
      type: String,
      "default": 'masonry-container'
    },
    itemSelector: {
      type: String,
      "default": '.grid-item'
    },
    columnWidth: {
      type: Number,
      "default": undefined
    },
    gutter: {
      type: Number,
      "default": undefined
    },
    horizontalOrder: {
      type: Boolean,
      "default": false
    },
    percentPosition: {
      type: Boolean,
      "default": true
    },
    stamp: {
      type: String,
      "default": undefined
    },
    fitWidth: {
      type: Boolean,
      "default": false
    },
    originLeft: {
      type: Boolean,
      "default": true
    },
    originTop: {
      type: Boolean,
      "default": true
    },
    containerStyle: {
      type: Object,
      "default": function _default() {
        return {
          position: 'relative'
        };
      }
    },
    transitionDuration: {
      type: [String, Number],
      "default": '0.4s'
    },
    stagger: {
      type: Number,
      "default": undefined
    },
    resize: {
      type: Boolean,
      "default": true
    },
    initLayout: {
      type: Boolean,
      "default": true
    }
  },
  mounted: function mounted() {
    var _this = this;

    ImageLoaded('#' + this.containerId, function (instance) {
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
      });

      _this.masonry.on('layoutComplete', function (laidOutItems) {
        _this.$emit('layoutComplete', laidOutItems);
      });

      _this.$emit('loaded');
    });
  },
  data: function data() {
    return {
      masonry: null
    };
  },
  methods: {
    getInstance: function getInstance() {
      return this.masonry;
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "grid",
    attrs: {
      "id": _vm.containerId
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

var VueMasonryComponent = normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

var MasonryComponent = {
  install: function install(Vue, options) {
    Vue.component('masonry', VueMasonryComponent);
  }
};

module.exports = MasonryComponent;
