import {describe, it, expect} from 'vitest'

import {mount} from '@vue/test-utils'
import ShowMsg from './index.vue'

describe('HelloWorld', () => {
    it('renders properly', () => {
        const wrapper = mount(ShowMsg, {props: {msg: 'Hello Vitest'}})
        expect(wrapper.text()).toContain('Hello Vitest')
    })
})
