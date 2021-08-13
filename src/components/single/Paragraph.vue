<script lang="ts">
import Vue, { VNode } from 'vue'
export default /*#__PURE__*/Vue.extend({
  props: {
    fontSize: {
      type: String,
      default: '',
    }
  },
  computed: {
    classes() {
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
    @apply font-system mx-auto max-w-md text-grey-600 my-4 px-4;
  }

  @screen lg {
    .core {
      @apply px-0;
    }
  }

  .base {
    @apply text-lg;
  }

  .medium {
    @apply text-xl;
  }

  .large {
    @apply text-2xl;
  }

</style>
