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
export default class KsmSingleH3 extends componentProps {

  get text ():string|null {
    const { body = null } = this.item
    return body
  }

  render(h: CreateElement) {
    return h(
      'h3',
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
    @apply font-serif font-bold text-xl md:text-2xl leading-normal md:leading-normal mx-auto px-4 lg:px-0 text-grey-600 w-full max-w-md;
  }
</style>
