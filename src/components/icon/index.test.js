import React from 'react'
import {shallow} from 'enzyme'
import Icon from './index'

describe('icon',()=>{
    it('renders without crashing',()=>{
        shallow(<Icon />)
    })
})