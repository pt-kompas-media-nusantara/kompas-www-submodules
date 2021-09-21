<script lang="ts">
import Vue, { VNode } from 'vue'
export default /*#__PURE__*/Vue.extend({
  computed: {
    classes() {
      return [
        this.$style.core
      ]
    }
  },
  render (h): VNode {
    return h(
      'h1',
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
    @apply font-serif font-bold text-3xl text-grey-600;
  }

  .textCenter {
    @apply text-center
  }

  @screen md {
    .core {
      @apply text-5xl;
    }
  }
</style>
