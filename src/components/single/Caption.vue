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
      validator: value => {
        return ['alignnone', 'alignleft', 'alignright'].includes(value)
      }
    },
    caption: {
      type: String,
      default: ''
    },
    credit: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 480
    },
    width: {
      type: Number,
      default: 480
    },
    src: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes (): ComponentClasses {
      let res: ComponentClasses = [
        this.$style.core
      ]
      res.push(this.$style[this.fontSize])
      res.push(this.$style[this.align])
      return res
    },
    classesCredit (): string {
      return this.$style.classesCredit
    },
    classesFigcaption (): string {
      return this.$style.classesFigcaption
    }
  },
  render (h): VNode {
    return h(
      'figure',
      {
        class: this.classes
      },
      [
        h(
          'img',
          {
            attrs: {
              height: this.height,
              width: this.width,
              src: this.src
            }
          },
          this.$slots.default
        ),
        h(
          'figcaption',
          {
            class: this.classesFigcaption
          },
          [
            h(
              'span',
              {
                class: this.classesCredit
              },
              this.credit
            ),
            h(
              'p',
              this.caption
            )
          ]
        )
      ]
    )
  }
})
</script>
<style module lang="postcss" scoped>
  .core {
    @apply block my-1 font-system mx-auto max-w-xl text-grey-500;
  }

  .classesCredit {
    @apply block font-sans my-1 text-right text-xs uppercase;
  }

  .classesFigcaption {
    @apply flex flex-col px-4 text-grey-500 w-full lg:px-0;
  }

  .aligncenter {
    @apply max-w-lg mx-auto;
  }

  .alignnone {
    @apply max-w-lg mx-auto;
  }

  .alignleft {
    @apply float-left max-w-lg mr-0 mx-auto md:mr-4 md:w-1/2;
  }

  .alignright {
    @apply float-right max-w-lg ml-0 mx-auto md:ml-4 md:w-1/2;
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
