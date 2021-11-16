
<script lang="ts">
import Vue, { VNode } from 'vue'

interface ComponentClasses extends Array<string> {
  [index: number]: string
}

export default Vue.extend({
  name: 'KsmSingleOl',
  props: {
    items: {
      type: Array as () => Array<string>,
      required: true
    }
  },
  computed: {
    childClasses (): ComponentClasses {
      return [this.$style.child]
    },
    parentClasses (): ComponentClasses {
      return [this.$style.parent]
    }
  },
  render (h): VNode {
    const items = [...this.items]
    const children = items.map((ob:string) => {
      return h(
        'li',
        {
          class: this.childClasses
        },
        ob
      )
    })
    return h(
      'ol',
      {
        class: this.parentClasses
      },
      children
    )
  },
})
</script>
<style module lang="postcss">
  .parent {
    @apply font-system leading-loose px-4 text-grey-600 text-lg w-full mx-auto pb-8;
    counter-reset: inst;
		list-style: none;
  }

  @screen lg {
    .parent {
      @apply max-w-md;
    }
  }

  .child::before {
    @apply mr-4;
    counter-increment: inst;
    content: counter(inst)".";
  }

</style>
