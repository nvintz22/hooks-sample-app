import React from 'react'
import { mount } from 'enzyme'
import enzymeSerializer from 'enzyme-to-json/serializer';

import AppHome from '../../../views/appHome/index';

expect.addSnapshotSerializer(enzymeSerializer);

describe('Home', () => {
    it('Should render home page', () => {
        const wrapper = mount(<AppHome />)
        expect(wrapper).toMatchSnapshot()
    }) 
})