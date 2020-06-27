import React from 'react';

import { shallow } from 'enzyme';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InitFind from '../../component/InitFind';
describe('InitFind', () => {

    it('should render Material Component', () => {
        const wrapper = shallow(<InitFind />);
        expect(wrapper.find(Grid)).toHaveLength(4);
        expect(wrapper.find(TextField)).toHaveLength(1);
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('should simulate keydown enter', () => {
        const wrapper = shallow(<InitFind />);
        expect(wrapper.find('#txtFind').simulate('keydown', {key: 'Enter'})).toHaveLength(1);
    });

    it('should simulate click find button', () => {
        const wrapper = shallow(<InitFind />);
        wrapper.find('#txtFind').simulate('change', {target: { value : '1881'}})
        expect(wrapper.find('#btnFind').simulate('click')).toHaveLength(1);
    });
})
