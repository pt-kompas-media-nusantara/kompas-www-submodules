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
export default class KsmSingleH2 extends componentProps {

  get text ():string|null {
    const { body = null } = this.item
    return body
  }

  render(h: CreateElement) {
    return h(
      'h2',
      {
        class: this.$style.core,
        domProps: {
          innerHTML: this.text
        }
      },
      this.$slots.default
    )
  }
}
</script>
<style module lang="postcss" scoped>
  .core {
    @apply font-serif font-bold leading-tight mx-auto px-4 lg:px-0 text-2xl md:text-4xl text-grey-600 w-full max-w-md;
  }
</style>
