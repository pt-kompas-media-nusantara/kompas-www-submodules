<script lang="ts">
import Vue, { VNode } from 'vue'

interface ComponentClasses extends Array<string> {
  [index: number]: string
}

export default /*#__PURE__*/Vue.extend({
  props: {
    fontSize: {
      type: String,
      default: 'base',
      validator (size: string) {
        return ['base', 'medium', 'large'].includes(size)
      }
    }
  },
  computed: {
    classes(): ComponentClasses {
      let res: ComponentClasses = [
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
    @apply font-system leading-normal max-w-md mx-auto my-3 px-4 text-grey-600;
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
