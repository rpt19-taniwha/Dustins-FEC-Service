import React from 'react';
import Enyzme, { shallow } from 'enzyme';
import './enzyme.config.js';
import PopupZoom from '../../client/src/components/PopupZoom.jsx';

describe ('PopupZoom Component', () => {
  it('PopupZoom Component should render without props', (done) => {
    const component = shallow(<PopupZoom />);
    expect(component).toMatchSnapshot();
    done();
  });

});