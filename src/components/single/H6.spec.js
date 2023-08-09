import  KsmSingleH6  from '@/components/single/H6.vue'
import { shallowMount } from '@vue/test-utils'


describe('KsmSingleH6 Rendered', () => {
  const wrapper = shallowMount(KsmSingleH6, {
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

  it('heading 6 rendered', () => {
    expect(wrapper.html()).toBe('<h6 class="core">create <b><i><u>tambah</u></i></b> <b>caption</b> <i>dari</i> <u>body</u> <strike>untuk heading</strike></h6>')
  })
})
