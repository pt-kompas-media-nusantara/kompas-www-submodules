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
      'h6',
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
    @apply font-serif font-bold text-base text-grey-600;
  }
</style>
