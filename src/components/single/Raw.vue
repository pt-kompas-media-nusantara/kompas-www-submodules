<script lang="ts">
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

@Component
export default class KsmSingleRaw extends Vue {
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
    @apply text-grey-600;
  }
</style>
