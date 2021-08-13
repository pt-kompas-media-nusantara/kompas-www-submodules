<script lang="ts">
import Vue, { VNode } from 'vue'
export default /*#__PURE__*/Vue.extend({
  computed: {
    classesContainer(): string {
      return this.$style.coreContainer
    },
    classesP(): string {
      return this.$style.coreP
    }
  },
  render (h): VNode {
    return h(
      'div',
      {
        class: this.classesContainer
      },
      [
        h(
          'p',
          {
            class: this.classesP
          },
          /**
           * @slot Slot standar Vue
           */
          this.$slots.default
        )
      ]
    )
  }
})
</script>
<style module lang="postcss" scoped>
  .coreContainer {
    @apply mx-auto w-full max-w-md;
  }

  .coreP {
    @apply font-system text-center leading-loose;
  }

</style>
