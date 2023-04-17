import { shallowMount } from '@vue/test-utils'
import KsmSingleUl from '@/components/single/Ul.vue'

describe('KsmSingleUl.vue', () => {
  const item = {
    metaBody: {
      list: ['Item 1', 'Item 2', 'Item 3']
    }
  }
  
  it('renders an unordered list with list items', () => {
    const wrapper = shallowMount(KsmSingleUl, {
      propsData: {
        item
      }
    })

    const ul = wrapper.find('ul')
    expect(ul.exists()).toBe(true)

    const items = wrapper.findAll('li')
    expect(items.length).toBe(3)
    expect(items.at(0).text()).toBe('Item 1')
    expect(items.at(1).text()).toBe('Item 2')
    expect(items.at(2).text()).toBe('Item 3')
  })

  it.each(['base', 'medium', 'large'])('applies the %s font size when specified', (fontSize) => {
    const wrapper = shallowMount(KsmSingleUl, { propsData: { item, fontSize } })
    expect(wrapper.classes(fontSize)).toBe(true)
  })
})
