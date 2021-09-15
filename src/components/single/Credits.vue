<script lang="ts">
import Vue, { VNode } from 'vue'
export default /*#__PURE__*/Vue.extend({
  props: {
    credits: {
      type: [String, Array as () => { name: string, url: string }[]],
      default: '',
    }
  },
  render (h): VNode {
    const children = [
        h(
          'span',
          {
            class: this.$style.by
          },
          /**
           * @slot Slot standar Vue
           */
          this.$slots.default
        )
    ]

    if (this.credits) {
      const letos = this.credits
      if (typeof letos === 'string') {
        children.push(
          h(
            'strong',
            letos
          )
        )
      } else {
        const rowLength = letos.length
        letos.map((item:{ name: string, url: string }, i) => {
          children.push(
            h(
              !item.url ? 'strong' : 'a',
              {
                attrs:{
                  href: item.url ? item.url : ''
                }
              },
              item.name + (rowLength !== i+1 ? ', ' : '')
            )
          )
        })
      }
    }

    return h(
      'div',
      children
    )
  }
})
</script>
<style module lang="postcss" scoped>
  .coreContainer {
    @apply mx-auto w-full max-w-md;
  }

  .by {
    @apply mr-1;
  }

</style>
