import  KsmSingleParagraph  from '@/components/single/Paragraph.vue'
import { mount } from '@vue/test-utils'

const sampleData = [
	"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa nesciunt quae harum necessitatibus. Fugiat ea aliquam adipisci inventore? Reprehenderit animi quidem veniam accusantium obcaecati facere necessitatibus amet molestiae dolor."
]
  
describe('KsmSingleParagraph Rendered', () => {
  const wrapper = mount(
    {
			components: { KsmSingleParagraph },
      template: '<ksm-single-paragraph>Lorem &amp; ipsum dolor sit, <a href="https://www.kompas.id">amet consectetur adipisicing elit</a>. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</ksm-single-paragraph>'
    }
	)

	it('Paragraph rendered', () => {
    expect(wrapper.html()).toBe('<p class=\"core base\">Lorem &amp; ipsum dolor sit, <a href="https://www.kompas.id">amet consectetur adipisicing elit</a>. Expedita quasi impedit, earum rerum quia sequi commodi qui! Quae eos temporibus expedita aliquam iure aperiam debitis hic adipisci obcaecati, accusantium repudiandae.</p>')
  })
})
