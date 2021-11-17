<script lang="ts">
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

@Component
export default class KsmSingleH1 extends Vue {
  render(h: CreateElement) {
    return h(
      'h1',
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
    @apply font-serif font-bold mx-auto text-3xl text-grey-600 w-full max-w-md;
  }

  @screen md {
    .core {
      @apply text-5xl;
    }
  }
</style>
