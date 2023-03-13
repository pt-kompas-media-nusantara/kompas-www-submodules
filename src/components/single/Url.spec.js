import  KsmSingleUrl from '@/components/single/Url.vue'
import { shallowMount } from '@vue/test-utils'


describe('KsmSingleUrl Rendered', () => {
  const wrapper = shallowMount(KsmSingleUrl, {
    propsData: { 
      item: {
				body: 'Baca juga : <a href="https://www.kompas.id/baca/riset/2021/04/14/lebih-dari-dua-calon-presiden-lebih-baik">Lebih Dari Dua Calon Presiden, Lebih Baik</a>',
				align: 'alignnone',
				length: 152,
				type: 'url',
				metaBody: {
					alt: '',
					src: 'Baca juga : <a href="https://www.kompas.id/baca/riset/2021/04/14/lebih-dari-dua-calon-presiden-lebih-baik">Lebih Dari Dua Calon Presiden, Lebih Baik</a>'
				}
      }
    }
  })

  it('heading 1 rendered', () => {
    expect(wrapper.html()).toBe('<p class=\"core base\">Baca juga :&nbsp;<a href="https://www.kompas.id/baca/riset/2021/04/14/lebih-dari-dua-calon-presiden-lebih-baik">Lebih Dari Dua Calon Presiden, Lebih Baik</a></p>')
  })
})
