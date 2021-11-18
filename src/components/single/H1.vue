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
    @apply font-serif font-bold mx-auto px-4 lg:px-0 text-3xl md:text-5xl text-grey-600 w-full max-w-md;
  }
</style>
