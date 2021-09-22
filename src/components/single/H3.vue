<script lang="ts">
import Vue, { VNode } from 'vue'
export default /*#__PURE__*/Vue.extend({
  computed: {
    classes () {
      return [
        this.$style.core
      ]
    }
  },
  render (h): VNode {
    return h(
      'h3',
      {
        class: this.classes
      },
      this.$slots.default
    )
  }
})
</script>
<style module lang="postcss" scoped>
  .core {
    @apply font-serif font-bold text-grey-600;
    font-size: 1.375rem; /* 22px; */
    line-height: 2rem;
  }

  @screen md {
    .core {
      @apply text-3xl;
    }
  }
</style>
