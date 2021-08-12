<script lang="ts">
import Vue, { VNode } from 'vue'
export default /*#__PURE__*/Vue.extend({
  props: {
    fontSize: {
      type: String,
      default: '',
    }
  },
  computed: {
    classes() {
      let res= [
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
     /* asset icon 'quote' masih dummy dari luar */
		background-image: url('https://image.flaticon.com/icons/png/128/37/37406.png');
		background-position: top center;
		background-size: 3rem;
	}
  .core {
    @apply font-system italic text-center text-center text-grey-600 px-4;
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
    font-size: 26px;
    line-height: 38px;
  }

  .large {
    font-size: 28px;
    line-height: 40px;
  }

</style>
