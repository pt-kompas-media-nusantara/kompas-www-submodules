import  KsmSingleParagraph  from '@/components/single/Paragraph.vue'
import { shallowMount } from '@vue/test-utils'

const sampleData = [
	"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa nesciunt quae harum necessitatibus. Fugiat ea aliquam adipisci inventore? Reprehenderit animi quidem veniam accusantium obcaecati facere necessitatibus amet molestiae dolor."
]

describe('KsmSingleParagraph Rendered', () => {
  const wrapper = shallowMount(
		KsmSingleParagraph,
    {
			name: 'Core',
      template: '<p class="ksm-7oU ksm-20w">Lorem &amp; ipsum dolor sit, <a href="https://www.kompas.id">amet consectetur adipisicing elit</a>. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</p>'
    }
	)

  it('Paragraph rendered', () => {
		const coreByCss = wrapper.findComponent('.core') // => finds Root
		expect(coreByCss.vm.$options.name).toBe('Core')
	})
})
