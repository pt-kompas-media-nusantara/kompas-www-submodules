import  KsmSingleH4  from '@/components/single/H4.vue'
import { shallowMount } from '@vue/test-utils'


describe('KsmSingleH4 Rendered', () => {
  const wrapper = shallowMount(KsmSingleH4, {
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

  it('heading 4 rendered', () => {
    expect(wrapper.html()).toBe('<h4 class="core">create <b><i><u>tambah</u></i></b> <b>caption</b> <i>dari</i> <u>body</u> <strike>untuk heading</strike></h4>')
  })
})
