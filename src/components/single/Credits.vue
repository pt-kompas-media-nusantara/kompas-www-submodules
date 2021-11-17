<script lang="ts">
import Vue, { CreateElement } from 'vue'
import Component from 'vue-class-component'

interface creditItem {
  name: string,
  url: string | null
}

const componentProps = Vue.extend({
  props: {
    credits: {
      type: [ String, Array as () =>  { name: string, url: string }[] ],
      required: true
    },
    prefix: {
      type: String,
      default: ''
    },
    uppercase: {
      type: Boolean,
      default: false
    }
  }
})

@Component
export default class KsmSingleCredits extends componentProps {

  get classes (): Array<string> {
    let items = [this.$style.credit]

    if (this.uppercase) {
      items.push(this.$style.txtUppercase)
    }

    return items
  }

  get persons (): string { // Array<creditItem>
    let res:Array<creditItem> = []

    if (typeof this.credits === 'string') {
      res = [
        {
        name: this.credits,
        url: null
        }
      ]
    }

    if (Array.isArray(this.credits)) {
      res = this.credits
    }

    /**
     * Sambil menunggu kejelasan soal halaman profil penulis
     * sementara ini mengembalikan string dahulu
     */
    return res.map(ob => ob.name).join(', ')
  }

  render (h: CreateElement) {
    const childPrefix = h(
      'div',
      {
        class: this.$style.prefix
      },
      this.prefix
    )
    const childPersons = h(
      'div',
      {
        class: this.classes
      },
      this.persons
    )
    const children = [childPersons]

    if (this.prefix && this.prefix !== '') { children.unshift(childPrefix) }
    return h(
      'div',
      {
        class: this.$style.container
      },
      children
    )
  }

}
</script>
<style module lang="postcss">
  .container {
    @apply flex;
  }

  .credit {
    @apply flex font-bold;
  }

  .prefix {
    @apply mr-1;
  }

  .txtUppercase {
    @apply uppercase;
  }
</style>
