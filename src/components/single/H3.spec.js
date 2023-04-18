import  KsmSingleH3  from '@/components/single/H3.vue'
import { shallowMount } from '@vue/test-utils'


describe('KsmSingleH3 Rendered', () => {
  const wrapper = shallowMount(KsmSingleH3, {
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

  it('heading 3 rendered', () => {
    expect(wrapper.html()).toBe('<h3 class="core">create <b><i><u>tambah</u></i></b> <b>caption</b> <i>dari</i> <u>body</u> <strike>untuk heading</strike></h3>')
  })
})
