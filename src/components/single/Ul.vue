<template>
  <ul :class="$style.parent">
    <li v-for="item in items" :key="item" :class="$style.child" v-html="item" />
  </ul>
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
export default class KsmSingleUl extends componentProps {}
</script>
<style module lang="postcss">
  .parent {
    @apply font-system leading-loose mx-auto pb-8 px-4 text-grey-600 text-lg w-full;
		list-style: none;
  }

  @screen lg {
    .parent {
      @apply max-w-md;
    }
  }

  .child::before {
    @apply mr-4;
    content: "\203A";
  }

</style>
