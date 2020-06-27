import React from 'react';
import FormatNumber from '../../../component/common/FormatNumber';

import { shallow } from 'enzyme';

describe('FormatNumber', () => {

    it('should render span', () => {
        const mockPrice = 272633;
        const wrapper = shallow(<FormatNumber number={mockPrice}/>);

        expect(wrapper.find('span')).toHaveLength(1);
    });
})
