import React from 'react';     
import { shallow, mount, render } from 'enzyme';

import Foo from './Foo';       
  
describe('<Foo/>', () => {     
    it('should foo', () => {
        const wrapper = shallow(<Foo />);
        expect(wrapper.find('p').length).toBe(1);
    });
});

