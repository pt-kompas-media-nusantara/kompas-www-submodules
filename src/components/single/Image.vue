<template>
  <component :is="el" :style="style" />
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'KsmSingleImage',
  props: {
    align: {
      type: String,
      default: 'alignnone',
      validator: (x) => ['alignleft', 'alignnone', 'alignright'].includes(x)
    },
    alt: {
      type: String,
      default: '',
    },
    credit: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 0
    },
    src: {
      type: String,
      required: true
    },
    srcset: {
      type: Array as () => Array<string>,
      required: true
    },
    width: {
      type: Number,
      default: 0
    },
  },
  computed: {
    el (): string {
      return 'div'
    },
    style () {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`
      }
    }
  }
})
</script>
<style module lang="postcss">
  .core {
    @apply bg-grey-400
  }
</style>
