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
    @apply font-serif font-bold leading-tight text-3xl text-grey-600 text-center pb-4;
  }

  @screen sm {
    .core {
      @apply text-4xl;
    }
  }

  @screen lg {
    .core {
      @apply text-5xl;
    }
  }
</style>
