import React from 'react';
import Enyzme, { shallow } from 'enzyme';
import './enzyme.config.js';
import ImageView from '../../client/src/components/imageView.jsx';

describe ('ImageView component', () => {
  it('ImageView component should render without props', (done) => {
    const component = shallow(<ImageView />);
    expect(component).toMatchSnapshot();
    done();
  });

});