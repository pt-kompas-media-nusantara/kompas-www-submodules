<script lang="ts">
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

const componentProps = Vue.extend({
  props: {
    item: {
      type: Object,
      required: true
    }
  }
})

@Component
export default class KsmSingleImage extends componentProps {
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

  get src(): string|undefined {
    const {
      permalink = undefined
    } = this.item?.metaBody?.sizes?.mediumLarge
    return permalink
  }

  get srcset(): string|undefined {
    const { sizes = undefined } = this.item.metaBody
    if (!sizes) { return }
    const items = Object.values(sizes)

    return items.map((ob:any) => `${ob.permalink} ${ob.width}w`).join(', ')
  }

  get styles (): object {
    const maxWidth = this.width > 800 ? 800 : this.width
    return {
      maxWidth: `${maxWidth}px`
    }
  }

  get width (): number {
    const {
      width = 0
    } = this.item?.metaBody?.sizes?.mediumLarge
    return width
  }

  render (h:CreateElement) {

    return h(
      'img',
      {
        attrs: this.attrs,
        /**
         * Sementara ini belum ada skenario citra mengambang
         * ke kiri atau kanan, jadi belum ada pengolahan lanjut
         */
        class: [
          this.$style.core,
          this.$style.mxauto
        ],
        style: this.styles
      }
    )
  }
}
</script>
<style module lang="postcss">
  .core {
    @apply bg-grey-200 w-full;
  }

  .mxauto {
    @apply mx-auto;
  }
</style>
