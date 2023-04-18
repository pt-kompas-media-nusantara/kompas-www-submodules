import  KsmSingleH5  from '@/components/single/H5.vue'
import { shallowMount } from '@vue/test-utils'


describe('KsmSingleH5 Rendered', () => {
  const wrapper = shallowMount(KsmSingleH5, {
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

  it('heading 5 rendered', () => {
    expect(wrapper.html()).toBe('<h5 class="core">create <b><i><u>tambah</u></i></b> <b>caption</b> <i>dari</i> <u>body</u> <strike>untuk heading</strike></h5>')
  })
})
