import  KsmSingleExcerpt  from '@/components/single/Excerpt.vue'
import { mount } from '@vue/test-utils'

const sampleData = [
	"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa nesciunt quae harum necessitatibus. Fugiat ea aliquam adipisci inventore? Reprehenderit animi quidem veniam accusantium obcaecati facere necessitatibus amet molestiae dolor."
]

describe('KsmSingleExcerpt Rendered', () => {
  const wrapper = mount(
    {
			components: { KsmSingleExcerpt },
      template: '<ksm-single-excerpt>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa nesciunt quae harum necessitatibus. Fugiat ea aliquam adipisci inventore? Reprehenderit animi quidem veniam accusantium obcaecati facere necessitatibus amet molestiae dolor.</ksm-single-excerpt>'
    }
	)

	it('Excerpt rendered', () => {
    expect(wrapper.html()).toBe('<p class="core">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa nesciunt quae harum necessitatibus. Fugiat ea aliquam adipisci inventore? Reprehenderit animi quidem veniam accusantium obcaecati facere necessitatibus amet molestiae dolor.</p>')
  })
})
