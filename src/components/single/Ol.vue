<script lang="ts">
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

const componentProps = Vue.extend({
  props: {
    fontSize: {
      type: String,
      default: 'base',
      validator (size: string) {
        return ['base', 'medium', 'large'].includes(size)
      }
    },
    item: {
      type: Object,
      required: true
    }
  }
})

@Component
export default class KsmSingleOl extends componentProps {
  get parentClasses (): Array<string> {
    const res = [this.$style.parent]
    res.push(this.$style[this.fontSize])
    return res
  }

  get items ():Array<string> {
    const { list } = this.item?.metaBody
    return list
  }

  render(h: CreateElement) {
    const children = this.items.map((ob:any) => {
      return h(
        'li',
        {
          class: this.$style.child,
          domProps: {
            innerHTML: ob
          }
        }
      )
    })
    return h(
      'ol',
      {
        class: this.parentClasses
      },
      children
    )
  }
}
</script>
<style module lang="postcss">
  .parent {
    @apply font-serif leading-loose px-4 lg:px-0 text-grey-600 text-lg w-full max-w-md mx-auto pb-8;
    counter-reset: inst;
		list-style: none;
    display: table;
  }

  .child {
    list-style: none;
    display: table-row;
  }

  .child::before {
    @apply mr-3;
    counter-increment: inst;
    content: counter(inst)".";
    display: table-cell;
    padding-right: 0.75rem;
  }

  .base {
    @apply text-lg;
  }

  .medium {
    @apply text-xl;
  }

  .large {
    @apply text-2xl;
  }

</style>
