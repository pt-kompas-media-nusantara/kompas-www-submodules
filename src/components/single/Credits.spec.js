import KsmSingleCredits from '@/components/single/Credits.vue'
import { shallowMount } from '@vue/test-utils'

describe('KsmSingleCredits', () => {
  const credits = [
    { name: 'Nama 1', url: 'url 1' },
    { name: 'Nama 2', url: 'url 2' }
  ]
  const prefix = 'Credits: '
  const uppercase = true
  
  const wrapper = shallowMount(KsmSingleCredits, {
    propsData: {
      credits,
      prefix,
      uppercase
    }
  })

  it('component rendered ', () => {
    expect(wrapper.findComponent(KsmSingleCredits).exists()).toBe(true)

  })
  
  it('rendered Credits with props', () => {
    expect(wrapper.text()).toContain(prefix)
    expect(wrapper.text()).toContain(credits[0].name)
    expect(wrapper.text()).toContain(credits[1].name) 
  })

  it('rendered Credits with correct text', () => {
    expect(wrapper.text()).toBe('Credits: Nama 1, Nama 2')
  })
})
