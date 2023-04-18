import  KsmSingleH2  from '@/components/single/H2.vue'
import { shallowMount } from '@vue/test-utils'


describe('KsmSingleH2 Rendered', () => {
  const wrapper = shallowMount(KsmSingleH2, {
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

  it('heading 2 rendered', () => {
    expect(wrapper.html()).toBe('<h2 class="core">create <b><i><u>tambah</u></i></b> <b>caption</b> <i>dari</i> <u>body</u> <strike>untuk heading</strike></h2>')
  })
})
