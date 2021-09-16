<script lang="ts">
import Vue, { VNode } from 'vue'

interface ComponentClasses extends Array<string> {
  [index: number]: string
}

export default /*#__PURE__*/Vue.extend({
  props: {
    credits: {
      type: [String, Array as () => { name: string, url: string }[]],
      default: '',
    },
    transform: {
      type: String,
      default: 'normal',
      validator: value => {
        return ['normal', 'uppercase', 'capitalize'].includes(value)
      }
    }
  },
  computed: {
    classesChild(): ComponentClasses {
      let res: ComponentClasses = [ this.$style.core ]
      if (this.transform) {
        switch (this.transform) {
          case 'uppercase':
            res.push(this.$style.txtUppercase)
            break;
          case 'capitalize':
            res.push(this.$style.txtCapitalize)
            break;
          case 'normal':
          default:
            res.push(this.$style.txtNormal)
            break;
        }
      }
      return res
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
            'span',
            {
              class: this.classesChild
            },
            letos
          )
        )
      } else {
        const rowLength = letos.length
        letos.map((item:{ name: string, url: string }, i) => {
          children.push(
            h(
              !item.url ? 'span' : 'a',
              {
                attrs:{
                  href: item.url ? item.url : ''
                },
                class: this.classesChild
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
  .core {
    @apply font-bold;
  }

  .by {
    @apply mr-1;
  }

  .txtNormal {
    @apply normal-case;
  }
  .txtCapitalize {
    @apply capitalize;
  }
  .txtUppercase {
    @apply uppercase;
  }

</style>
