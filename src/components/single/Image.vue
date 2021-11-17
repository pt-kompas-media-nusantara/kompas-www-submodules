<script lang="ts">
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

const componentProps = Vue.extend({
  props: {
    align: {
      type: String,
      default: 'alignnone',
      validator: (x) => ['alignleft', 'alignnone', 'alignright'].includes(x)
    },
    alt: {
      type: String,
      default: '',
    },
    credit: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 0
    },
    src: {
      type: String,
      required: true
    },
    srcset: {
      type: Array as () => Array<string>,
      required: true
    },
    width: {
      type: Number,
      default: 0
    },
  }
})

@Component
export default class KsmSingleImage extends componentProps {
  get attrs ():object {
    return {
      alt: this.alt || this.src,
      height: this.height,
      loading: 'lazy',
      src: this.src,
      srcset: this.srcset,
      width: this.width
    }
  }

  get classes ():Array<string> {
    const res = [this.$style.core]

    if (this.align = 'alignnone') {
      res.push(this.$style.mxauto)
    }

    return res
  }

  get styles (): object {
    const maxWidth = this.width > 800 ? 800 : this.width
    return {
      maxWidth: `${maxWidth}px`
    }
  }

  render (h:CreateElement) {

    return h(
      'img',
      {
        attrs: this.attrs,
        class: this.classes,
        style: this.styles
      }
    )
  }
}
</script>
<style module lang="postcss">
  .core {
    @apply bg-grey-200
  }

  .mxauto {
    @apply mx-auto
  }
</style>
