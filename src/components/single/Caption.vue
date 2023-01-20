<script lang="ts">
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

const componentProps = Vue.extend({
  props: {
    align: {
      type: String,
      default: 'alignnone',
      validator (value: string) {
        return ['aligncenter', 'alignnone', 'alignleft', 'alignright'].includes(value)
      }
    },
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
export default class KsmSingleCaption extends componentProps {
  get alt ():string|undefined {
    const {
      alt = undefined
    } = this.item?.metaBody
    return alt
  }

  get attrs ():object {
    return {
      alt: this.alt || this.src,
      height: this.height,
      loading: 'lazy',
      sizes: this.sizes,
      src: this.src,
      srcset: this.srcset,
      width: this.width
    }
  }

  get caption ():string|undefined {
    const {
      caption = undefined
    } = this.item?.metaBody
    return caption
  }

  get classes (): Array<string> {
    const res = [this.$style.core]
    res.push(this.$style[this.fontSize])
    res.push(this.$style[this.item.align])
    return res
  }

  get classesCaption (): string {
    const res = this.$style.classesCaption
    return res
  }

  get classesPhotographerName (): string {
    const res = this.$style.classesPhotographerName
    return res
  }

  get classesFigcaption (): string {
    const res = this.$style.classesFigcaption
    return res
  }

  get photographerName ():string|undefined {
    const {
      photographerName = undefined
    } = this.item?.metaBody
    return photographerName || 'Kompas'
  }

  get height (): number {
    const {
      height = 0
    } = this.item?.metaBody?.sizes?.mediumLarge
    return height
  }

  get sizes ():string|undefined {
    const { sizes = undefined } = this.item.metaBody
    const items = Object.values(sizes)

    return items.map((ob:any) => `(max-width:${ob.width}px) ${ob.width}px`).join(', ')
  }

  get src (): string|undefined {
    const {
      permalink = undefined
    } = this.item?.metaBody?.sizes?.mediumLarge
    return permalink
  }

  get srcset (): string|undefined {
    const { sizes = undefined } = this.item.metaBody
    if (!sizes) { return }
    const items = Object.values(sizes)

    return items.map((ob:any) => `${ob.permalink} ${ob.width}w`).join(', ')
  }

  get width (): number {
    const {
      width = 0
    } = this.item?.metaBody?.sizes?.mediumLarge
    return width
  }

  render (h:CreateElement) {
    return h(
      'figure',
      {
        class: this.classes
      },
      [
        h(
          'img',
          {
            attrs: this.attrs,
          },
          this.$slots.default
        ),
        h(
          'figcaption',
          {
            class: this.$style.classesFigcaption
          },
          [
            h(
              'span',
              {
                class: this.$style.classesPhotographerName
              },
              this.photographerName
            ),
            h(
              'p',
              {
                class: this.$style.classesCaption,
                domProps: {
                  innerHTML: this.caption
                }
              }
            )
          ]
        )
      ]
    )
  }
}
</script>
<style module lang="postcss" scoped>
  .core {
    @apply block mb-6 mt-2 font-sans mx-auto max-w-xl px-4 text-grey-500;
  }

  .classesCaption {
    @apply block font-sans px-0 text-grey-500 w-full;
  }

  .classesPhotographerName {
    @apply block font-sans my-1 px-0 text-right text-xs uppercase;
  }

  .classesFigcaption {
    @apply flex flex-col text-grey-500 w-full;
  }

  .aligncenter {
    @apply w-full mx-auto;
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

  .base p {
    @apply font-sans text-sm;
  }

  .medium p {
    @apply font-sans text-base;
  }

  .large p {
    @apply font-sans text-lg;
  }
</style>
