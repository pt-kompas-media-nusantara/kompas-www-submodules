import  KsmSingleH1  from '@/components/single/H1.vue'
import { shallowMount } from '@vue/test-utils'

describe('KsmSingleH1 Rendered', () => {
  const wrapper = shallowMount(KsmSingleH1, {
  })

  it('gtm home sc masthead rendered', () => {
    expect(root).toEqualHtml(`
      <h1 data-v-1c509fa0="" class="ksm-Odc">
        create 
        <b><i><u>tambah</u></i></b> 
        <b>caption</b> 
        <i>dari</i> 
        <u>body</u> 
        <strike>untuk heading</strike>
      </h1>
    `)
  })
})
