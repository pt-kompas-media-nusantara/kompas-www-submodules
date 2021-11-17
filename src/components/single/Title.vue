<script lang="ts">
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

const componentProps = Vue.extend({
  props: {
    textCenter: {
      type: Boolean,
      default: false
    }
  }
})

@Component
export default class KsmSingleTitle extends componentProps {
  get classes (): Array<string> {
    const res = [
      this.$style.core
    ]

    if (this.textCenter) {
      res.push(this.$style.textCenter)
    }

    return res
  }

  render (h: CreateElement) {
    return h(
      'h1',
      {
        class: this.classes
      },
      this.$slots.default
    )
  }
}
</script>
<style module lang="postcss">
  .core {
    @apply font-serif font-bold leading-tight text-3xl text-grey-600 pb-4;
  }

  .textCenter {
    @apply text-center
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
