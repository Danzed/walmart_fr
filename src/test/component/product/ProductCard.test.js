import React from 'react';
import ProductCard from '../../../component/product/ProductCard';
import FormatNumber from '../../../component/product/ProductCard';

import { shallow } from 'enzyme';

import Grid from '@material-ui/core/Grid';

describe('ProductCard', () => {

    let wrapper;

    beforeEach(() => {
        const mockProduct = {
            _id: "5ef791571455b432317b728b",
            id: 238,
            brand: "dsaasd",
            description: "xhabvp ciowh",
            image: "www.lider.cl/catalogo/images/babyIcon.svg",
            price: 272633,
            isPalindrome: true,
            pricePalindrome: 136316
        };
        wrapper = shallow(<ProductCard product={mockProduct}/>);
    });

    it('should render Grid and all product variable', () => {
        expect(wrapper.find(Grid)).toHaveLength(1);
    });

    it('should render Grid and all product variable not palindrome', () => {
        expect(wrapper.find(Grid)).toHaveLength(1);
    });
})
