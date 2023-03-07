import KsmSingleCaption from '@/components/single/Caption.vue'
import { shallowMount } from '@vue/test-utils'

describe('KsmSingleCaption', () => {
  const item = {
    body: '<img alt="" class="alignright size-medium wp-image-11712673" height="973" src="https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431-720x973.png" width="720"/>',
    align: 'alignright',
    length: 0,
      type: 'image',
      metaBody: {
        alt: 'Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.',
        caption: 'create <b><i><u>tambah</u></i></b> <b>caption</b> <i>dari</i> <u>body</u> Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.',
        src: 'https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png',
        photographerName: 'Kompas/photographer',
        sizes: {
          mediumLarge: {
            mimeType: 'image/jpeg',
            permalink: 'https://assetd.kompas.id/2gmE8YUrIsYUuYjY3dO3uJloH4A=/1024x1384/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png',
            width: 1024,
            height: 1384
          }
        },
        credit: 'Kompas'
      }
    }
    
    const wrapper = shallowMount(KsmSingleCaption, {
      propsData: {
        item
      }
    })
    
  it('component rendered', () => {
    expect(wrapper.findComponent(KsmSingleCaption).exists()).toBe(true)
  })
  
  it('rendered attributes with correct data', () => {
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('alt')).toBe('Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.')
    expect(wrapper.find('img').attributes('height')).toBe('1384')
    expect(wrapper.find('img').attributes('loading')).toBe('lazy')
    expect(wrapper.find('img').attributes('src')).toBe('https://assetd.kompas.id/2gmE8YUrIsYUuYjY3dO3uJloH4A=/1024x1384/https://kompas.id/wp-content/uploads/2021/09/20210901-NSW-Pidana-Korupsi-mumed_1630578431.png')
    expect(wrapper.find('img').attributes('width')).toBe('1024')
    expect(wrapper.find('figcaption').exists()).toBe(true)
    expect(wrapper.find('figcaption span').text()).toBe('Kompas/photographer')
    expect(wrapper.find('figcaption p').html()).toContain('create <b><i><u>tambah</u></i></b> <b>caption</b> <i>dari</i> <u>body</u> Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.')
  })
})
