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
    }
  },
  computed: {
    classes(): ComponentClasses {
      let res: ComponentClasses = [
        this.$style.core
      ]
      res.push(this.$style[this.fontSize])
      return res
    }
  },
  render (h): VNode {
    return h(
      'blockquote',
      {
        class: this.classes
      },
      this.$slots.default
    )
  }
})
</script>
<style module lang="postcss" scoped>
	blockquote {
		@apply bg-no-repeat mb-8 pt-12 mx-auto max-w-md;
		background-image: url('../../assets/img/quotes.png');
		background-position: top center;
		background-size: 3rem;
	}
  .core {
    @apply font-system italic text-center text-grey-600 px-4;
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
