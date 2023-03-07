import  KsmSingleExcerpt  from '@/components/single/Excerpt.vue'
import { shallowMount } from '@vue/test-utils'

const sampleData = [
	"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa nesciunt quae harum necessitatibus. Fugiat ea aliquam adipisci inventore? Reprehenderit animi quidem veniam accusantium obcaecati facere necessitatibus amet molestiae dolor."
]

describe('KsmSingleExcerpt Rendered', () => {
  const wrapper = shallowMount(
		KsmSingleExcerpt,
    {
			name: 'Core',
      template: '<p class="core">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa nesciunt quae harum necessitatibus. Fugiat ea aliquam adipisci inventore? Reprehenderit animi quidem veniam accusantium obcaecati facere necessitatibus amet molestiae dolor.</p>'
    }
	)

  it('Excerpt rendered', () => {
		const coreByCss = wrapper.findComponent('.core') // => finds Root
		expect(coreByCss.vm.$options.name).toBe('Core')
	})
})
