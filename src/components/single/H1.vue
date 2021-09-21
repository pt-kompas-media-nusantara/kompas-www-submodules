<script lang="ts">
import Vue, { VNode } from 'vue'

interface ComponentClasses extends Array<string> {
  [index: number]: string
}

export default /*#__PURE__*/Vue.extend({
  props: {
    textCenter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes(): ComponentClasses {
      let res: ComponentClasses = [ this.$style.core ]
      if (this.textCenter) { res.push(this.$style.textCenter) }
      return res
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
