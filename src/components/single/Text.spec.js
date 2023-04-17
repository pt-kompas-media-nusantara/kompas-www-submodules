import { shallowMount } from '@vue/test-utils'
import KsmSingleParagraph from '@/components/single/Text.vue'

describe('KsmSingleParagraph', () => {
  const item = { body: 'Default text' }

  it('renders the correct text with defined style', () => {
    const wrapper = shallowMount(KsmSingleParagraph, { propsData: { item } })
    expect(wrapper.text()).toBe('Default text')
    expect(wrapper.classes()).toContain(wrapper.vm.$style.core)
  })

  it.each(['base', 'medium', 'large'])('applies the %s font size when specified', (fontSize) => {
    const wrapper = shallowMount(KsmSingleParagraph, { propsData: { item, fontSize } })
    expect(wrapper.classes(fontSize)).toBe(true)
  })
})
