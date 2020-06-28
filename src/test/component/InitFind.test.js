import React from 'react';
import axios from 'axios';

import { shallow } from 'enzyme';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InitFind from '../../component/InitFind';

jest.mock('axios');

describe('InitFind', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<InitFind />);
    });

    it('should render Material Component', () => {
        expect(wrapper.find(Grid)).toHaveLength(4);
        expect(wrapper.find(TextField)).toHaveLength(1);
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('should simulate keydown enter', () => {
        expect(wrapper.find('#txtFind').simulate('keydown', { key: 'Enter' })).toHaveLength(1);
    });

    it('should simulate keydown not enter', () => {
        expect(wrapper.find('#txtFind').simulate('keydown', { key: '1' })).toHaveLength(1);
    });

    it('should simulate click find button', () => {
        const mockProductList = [
            {
                _id: "5ef791561455b432317b70b3",
                id: 2,
                brand: "dsaasd",
                description: "zlrwax bñyrh",
                image: "www.lider.cl/catalogo/images/babyIcon.svg",
                price: 130173,
                isPalindrome: true,
                pricePalindrome: 65086
            },
            {
                _id: "5ef791571455b432317b728b",
                id: 238,
                brand: "dsaasd",
                description: "xhabvp ciowh",
                image: "www.lider.cl/catalogo/images/babyIcon.svg",
                price: 272633,
                isPalindrome: true,
                pricePalindrome: 136316
            }
        ];
        axios.get.mockImplementationOnce(() => Promise.resolve(mockProductList));
        wrapper.simulate('addProductsToList', mockProductList);
        wrapper.find('#txtFind').simulate('change', { target: { value: '1881' } });
        expect(wrapper.find('#btnFind').simulate('click')).toHaveLength(1);
    });
})
