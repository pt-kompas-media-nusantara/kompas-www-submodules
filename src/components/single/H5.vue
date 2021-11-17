<script lang="ts">
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

@Component
export default class KsmSingleH2 extends Vue {
  render (h: CreateElement) {
    return h(
      'h5',
      {
        class: this.$style.core
      },
      this.$slots.default
    )
  }
}
</script>
<style module lang="postcss" scoped>
  .core {
    @apply font-serif font-bold mx-auto text-lg text-grey-600 w-full max-w-md;
  }

  @screen md {
    .core {
      @apply text-xl;
    }
  }
</style>
