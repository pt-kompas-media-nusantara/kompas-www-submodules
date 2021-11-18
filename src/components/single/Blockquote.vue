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
          {},
          this.text
        )
      ]
    )
  }
}
</script>
<style module lang="postcss">
  .core {
    @apply bg-no-repeat font-system italic mb-8 mx-auto pt-12 px-4 lg:px-0 text-center text-grey-600 max-w-md;
    background-image: url('https://www.kompas.id/img/icons/quotes.png');
    background-position: top center;
    background-size: 3rem;
  }

  .base p {
    @apply text-2xl leading-normal;
  }

  .medium p {
    font-size: 1.625rem;
    line-height: 2.375rem; /* 38px; */
  }

  .large p {
    font-size: 1.750rem;
    line-height: 2.5rem; /* 40px; */
  }

</style>
