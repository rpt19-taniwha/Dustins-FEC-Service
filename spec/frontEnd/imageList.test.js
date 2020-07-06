import React from 'react';
import Enyzme, { shallow } from 'enzyme';
import './enzyme.config.js';
import ImageList from '../../client/src/components/imageList.jsx';

describe ('ImageList Component', () => {
  it('ImageList Component renders without props', (done) => {
    const component = shallow(<ImageList />);
    expect(component).toMatchSnapshot();
    done();
  });

});