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
export default class KsmSingleBlockquote extends componentProps {
  get classes (): Array<string> {
    const res = [this.$style.core]
    res.push(this.$style[this.fontSize])
    return res
  }

  get text ():string|null {
    const { body = null } = this.item
    return body
  }

  render (h: CreateElement) {
    return h(
      'blockquote',
      {
        class: this.classes
      },
      [
        h(
          'p',
          {
            domProps: {
              innerHTML: this.text
            }
          }
        )
      ]
    )
  }
}
</script>
<style module lang="postcss">
  .base p {
    @apply font-serif leading-normal text-2xl;
  }

  .core {
    @apply font-serif my-10 mx-auto px-4 lg:px-0 text-center text-grey-600 max-w-sm;
  }

  .core::before {
    @apply bg-yellow-400 block mb-3 mx-auto;
    content: "";
    height: 8px;
    width: 100px;
  }

  .medium p {
    @apply font-serif;
    font-size: 1.625rem; /* 26px; */
    line-height: 2.375rem; /* 38px; */
  }

  .large p {
    @apply font-serif;
    font-size: 1.750rem; /* 28px; */
    line-height: 2.5rem; /* 40px; */
  }

</style>
