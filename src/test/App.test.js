import React from 'react';
import App from '../App';

import { shallow } from 'enzyme';

import Bar from '../component/layout/Bar';

describe('App', () => {

  let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

  it('should work all material component', () => {
    expect(wrapper.find('main')).toHaveLength(1);
  });

  it('should render Components', () => {
    expect(wrapper.find(Bar)).toHaveLength(1);
  });
})
