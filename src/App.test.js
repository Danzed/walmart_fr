import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

import Bar from './component/layout/Bar';

describe('App', () => {

  it('should work all material component', () => {
    const wrapperApp = shallow(<App />);
    expect(wrapperApp.find('main')).toHaveLength(1);
  });

  it('should render Components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Bar)).toHaveLength(1);
  });
})
