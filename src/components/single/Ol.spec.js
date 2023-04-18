import { shallowMount } from '@vue/test-utils'
import KsmSingleOl from '@/components/single/Ol.vue'

describe('KsmSingleOl.vue', () => {
  const item = {
    metaBody: {
      list: ['Item 1', 'Item 2', 'Item 3']
    }
  }
  
  it('renders an unordered list with list items', () => {
    const wrapper = shallowMount(KsmSingleOl, {
      propsData: {
        item
      }
    })

    const ol = wrapper.find('ol')
    expect(ol.exists()).toBe(true)

    const items = wrapper.findAll('li')
    expect(items.length).toBe(3)
    expect(items.at(0).text()).toBe('Item 1')
    expect(items.at(1).text()).toBe('Item 2')
    expect(items.at(2).text()).toBe('Item 3')
  })

  it.each(['base', 'medium', 'large'])('applies the %s font size when specified', (fontSize) => {
    const wrapper = shallowMount(KsmSingleOl, { propsData: { item, fontSize } })
    expect(wrapper.classes(fontSize)).toBe(true)
  })
})
