import React from 'react';
import Bar from '../../../component/layout/Bar';

import { shallow } from 'enzyme';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
describe('Bar', () => {

    it('should render Material Components', () => {
        const wrapper = shallow(<Bar />);
        expect(wrapper.find(AppBar)).toHaveLength(1);
        expect(wrapper.find(Toolbar)).toHaveLength(1);
        expect(wrapper.find(Typography)).toHaveLength(1);
    });
})
