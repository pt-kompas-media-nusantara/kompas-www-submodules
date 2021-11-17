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
export default class KsmSingleBlockquote extends componentProps {

  get classes (): Array<string> {
    const res = [this.$style.core]
    res.push(this.$style[this.fontSize])
    return res
  }

  render (h: CreateElement) {
    return h(
      'blockquote',
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
    @apply bg-no-repeat font-system italic max-w-md mb-8 mx-auto pt-12 px-4 text-center text-grey-600;
    background-image: url('../../assets/img/quotes.png');
    background-position: top center;
    background-size: 3rem;
  }

  @screen lg {
    .core {
      @apply px-0;
    }
  }

  .base {
    @apply text-2xl leading-normal;
  }

  .medium {
    font-size: 1.625rem;
    line-height: 2.375rem; /* 38px; */
  }

  .large {
    font-size: 1.750rem;
    line-height: 2.5rem; /* 40px; */
  }

</style>
