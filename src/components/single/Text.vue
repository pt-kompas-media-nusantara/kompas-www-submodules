<script lang="ts">
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

const componentProps = Vue.extend({
  props: {
    fontSize: {
      type: String,
      default: 'base',
      validator (size: string) {
        return ['base', 'medium', 'large'].includes(size)
      }
    }
  }
})

@Component
export default class KsmSingleParagraph extends componentProps {
  get classes (): Array<string> {
    const res = [this.$style.core]
    res.push(this.$style[this.fontSize])
    return res
  }

  render (h:CreateElement) {
    return h(
      'p',
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
