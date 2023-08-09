import { shallowMount } from '@vue/test-utils'
import KsmSingleTitle from '@/components/single/Title.vue'

describe('KsmSingleTitle', () => {
  it('renders the correct text with defined style', () => {
    const wrapper = shallowMount(KsmSingleTitle, {
      slots: {
        default: 'Title Example'
      }
    })
    expect(wrapper.find('h1').text()).toBe('Title Example')
    expect(wrapper.classes()).toContain(wrapper.vm.$style.core)
  })

  it('applies the text-center class when textCenter prop is true', () => {
    const wrapper = shallowMount(KsmSingleTitle, {
      propsData: {
        textCenter: true
      }
    })
    expect(wrapper.find('h1').classes()).toContain('textCenter')
  })

  it('does not apply the text-center class when textCenter prop is false', () => {
    const wrapper = shallowMount(KsmSingleTitle)
    expect(wrapper.find('h1').classes()).not.toContain('textCenter')
  })
})
