<template>
  <ol :class="$style.parent">
    <li v-for="item in items" :key="item" :class="$style.child" v-html="item" />
  </ol>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const componentProps = Vue.extend({
  props: {
    items: {
      type: Array,
      required: true
    }
  }
})

@Component
export default class KsmSingleOl extends componentProps {}
</script>
<style module lang="postcss">
  .parent {
    @apply font-system leading-loose px-4 lg:px-0 text-grey-600 text-lg w-full max-w-md mx-auto pb-8;
    counter-reset: inst;
		list-style: none;
  }

  .child::before {
    @apply mr-4;
    counter-increment: inst;
    content: counter(inst)".";
  }

</style>
