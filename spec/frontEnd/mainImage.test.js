import React from 'react';
import Enyzme, { shallow } from 'enzyme';
import './enzyme.config.js';
import MainImage from '../../client/src/components/MainImage.jsx';

describe ('MainImage Component', () => {
  it('MainImageComponent should render without props', (done) => {
    const component = shallow(<MainImage />);
    expect(component).toMatchSnapshot();
    done();
  });

});
