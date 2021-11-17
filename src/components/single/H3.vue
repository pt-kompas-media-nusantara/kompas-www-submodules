<script lang="ts">
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

@Component
export default class KsmSingleH2 extends Vue {
  render (h: CreateElement) {
    return h(
      'h3',
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
    @apply font-serif font-bold mx-auto text-grey-600 w-full max-w-md;
    font-size: 1.375rem; /* 22px; */
    line-height: 2rem;
  }

  @screen md {
    .core {
      @apply text-3xl;
    }
  }
</style>
