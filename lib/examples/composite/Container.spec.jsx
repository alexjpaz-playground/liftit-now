import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Container from './Container';

describe('composite/Conainer', () => {     
  it('should foo', (done) => {
    const wrapper = shallow(<Container />);
    const component = wrapper.instance();
    component.increment().then(() => {
      expect(component.getBar()).toBe(1);
      expect(/foo=1/.test(wrapper.html())).toBe(true);
      done();
    });
  });
});
