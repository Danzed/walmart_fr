import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { shallow } from 'enzyme';

import { createShallow } from '@material-ui/core/test-utils';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import InitFind from './component/InitFind';

describe('App', () => {

  it('should work all material component', () => {
    const wrapperApp = shallow(<App />);
    expect(wrapperApp.find('main')).toHaveLength(1);
  });

  it('shoud render Material Components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AppBar)).toHaveLength(1);
    expect(wrapper.find(Toolbar)).toHaveLength(1);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find(Box)).toHaveLength(1);
  });
})
