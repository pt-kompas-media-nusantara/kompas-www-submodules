import  KsmSingleH1  from '@/components/single/H1.vue'
import { shallowMount } from '@vue/test-utils'


describe('KsmSingleH1 Rendered', () => {
  const wrapper = shallowMount(KsmSingleH1, {
    propsData: { 
      item: {
        body: 'create <b><i><u>tambah</u></i></b> <b>caption</b> <i>dari</i> <u>body</u> <strike>untuk heading</strike>',
        align: 'alignnone',
        length: 180,
        metaBody: {
          alt: '',
          text: 'create <b><i><u>tambah</u></i></b> <b>caption</b> <i>dari</i> <u>body</u> <strike> untuk heading</strike>'
        }
      }
    }
  })

  it('gtm home sc masthead rendered', () => {
    expect(wrapper.html()).toBe('<h1 class="core">create <b><i><u>tambah</u></i></b> <b>caption</b> <i>dari</i> <u>body</u> <strike>untuk heading</strike></h1>')
  })
})
