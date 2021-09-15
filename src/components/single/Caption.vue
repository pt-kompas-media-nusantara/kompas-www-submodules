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
    },
    align: {
      type: String,
      default: 'alignnone',
      validator (align: string) {
        return ['alignnone', 'right'].includes(align)
      }
    }
  },
  computed: {
    classes(): ComponentClasses {
      let res: ComponentClasses = [
        this.$style.core
      ]
      res.push(this.$style[this.fontSize])
      res.push(this.$style[this.align])
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
    @apply font-system mx-auto max-w-xl text-grey-600 mt-1;
  }

  @screen lg {
    .core {
      @apply px-0;
    }
  }
  .alignnone {
    @apply text-left;
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

  .right {
    @apply text-right;
  }

</style>
