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
    },
    item: {
      type: Object,
      required: true
    }
  }
})

@Component
export default class KsmSingleUrl extends componentProps {
  get classes (): Array<string> {
    const res = [this.$style.core]
    res.push(this.$style[this.fontSize])
    return res
  }

  get text ():string|null {
    const { body = null } = this.item
    return body
  }

  render (h:CreateElement) {
    return h(
      'p',
      {
        class: this.classes,
        domProps: {
          innerHTML: this.text
        }
      }
    )
  }
}
</script>
<style module lang="postcss">
  .core {
    @apply font-bold font-serif leading-loose max-w-md mx-auto my-4 px-4 lg:px-0 text-grey-600;
  }

  .core a {
    @apply text-blue-600 hover:text-blue-400 underline;
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
