import { shallowMount } from '@vue/test-utils'
import KsmSingleRaw from '@/components/single/Raw.vue'

describe('KsmSingleRaw', () => {
  it('renders the correct text with defined style', () => {
    const wrapper = shallowMount(KsmSingleRaw, {
      slots: {
        default: 'Text RAW'
      }
    })

    const paragraph = wrapper.find('p')
    expect(paragraph.classes()).toContain(wrapper.vm.$style.core)
    expect(paragraph.text()).toBe('Text RAW')
  })
})
