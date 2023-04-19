import { shallowMount } from '@vue/test-utils'
import KsmSingleBlockquote from '@/components/single/Blockquote.vue'

describe('KsmSingleBlockquote', () => {
  const item = {
    body: 'create <b><i><u>tambah</u></i></b> <b>caption</b> <i>dari</i> <u>body</u> Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.',
    align: 'alignnone',
    length: 180,
    type: 'blockquote',
    metaBody: {
      alt: '',
      text: 'Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.'
    }
  }
  const wrapper = shallowMount(KsmSingleBlockquote, {
    propsData: {
      item
    }
  })

  it('renders attributes with the correct text', () => {
    const blockquote = wrapper.find('blockquote')
    expect(blockquote.exists()).toBe(true)
    expect(blockquote.find('p').html()).toBe('<p>create <b><i><u>tambah</u></i></b> <b>caption</b> <i>dari</i> <u>body</u> Jika laju vaksinasi masih lamban, terutama untuk kelompok rentan, munculnya virus musiman, dan berkurangnya kekebalan dari infeksi dan vaksin, lonjakan kasus dapat kembali terjadi.</p>')
  })

  it.each(['base', 'medium', 'large'])('applies the %s font size when specified', (fontSize) => {
    const wrapper = shallowMount(KsmSingleBlockquote, { propsData: { item, fontSize } })
    expect(wrapper.classes(fontSize)).toBe(true)
  })
})
