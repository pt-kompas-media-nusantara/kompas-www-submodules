<script lang="ts">
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

@Component
export default class KsmSingleTitle extends Vue {
  render (h:CreateElement) {
    return h(
      'p',
      {
        class: this.$style.core
      },
      this.$slots.default
    )
  }
}
</script>
<style module lang="postcss">
  .core {
    @apply font-sans leading-normal mx-auto text-center text-lg w-full max-w-md;
  }

</style>
