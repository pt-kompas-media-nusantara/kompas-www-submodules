<script lang="ts">
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

const componentProps = Vue.extend({
  props: {
    item: {
      type: Object,
      required: true
    }
  }
})

@Component
export default class KsmSingleUl extends componentProps {
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
      'ul',
      {
        class: this.$style.parent
      },
      children
    )
  }
}
</script>
<style module lang="postcss">
  .parent {
    @apply font-system leading-loose mx-auto pb-8 px-4 lg:px-0 text-grey-600 text-lg w-full max-w-md;
		list-style: none;
  }

  .child::before {
    @apply mr-4;
    content: "\203A";
  }

</style>
