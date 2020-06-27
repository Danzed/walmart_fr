import React from 'react';
import ProductList from '../../../component/product/ProductList';

import { shallow } from 'enzyme';

import Grid from '@material-ui/core/Grid';
import ProductCard from '../../../component/product/ProductCard';
describe('ProductList', () => {

    it('should render Grid', () => {
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
        const wrapper = shallow(<ProductList productsList={mockProductList} />);

        expect(wrapper.find(Grid)).toHaveLength(1);
    });
})
