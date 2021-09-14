<script lang="ts">
import Vue, { VNode } from 'vue'
export default /*#__PURE__*/Vue.extend({
  props: {
    fontSize: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes(): string[] {
      let res= [
        this.$style.core
      ]
      res.push(this.$style[this.fontSize])
      return res
    }
  },
  render (h): VNode {
    return h(
      'p',
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
    @apply font-system mx-auto text-grey-600 mt-1;
  }

  @screen lg {
    .core {
      @apply px-0;
    }
  }

  .base {
    @apply text-sm;
  }

  .medium {
    @apply text-base;
  }

  .large {
    @apply text-lg;
  }

</style>
