import React from 'react';
import Enyzme, { shallow } from 'enzyme';
import './enzyme.config.js';
import ImageThumbnail from '../../client/src/components/imageThumbnail.jsx';

const sampleProduct = {
  0: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg",
  1: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy2.jpg",
  2: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy3.jpg",
  3: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy4.jpg",
  4: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy5.jpg",
  5: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy6.jpg",
  6: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy7.jpg",
  7: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy8.jpg"
};


describe ('Thumbnail Component', () => {
  jest.mock('../../client/src/components/imageThumbnail.jsx', () => 'ImageThumbnail');

  it('should render thumbnail component without props', (done) => {
    const component = shallow(<ImageThumbnail />);
    expect(component).toMatchSnapshot();
    done();
  });

  // it('should call the click handler when Thumbnail is hovered over', (done) => {
  //   const hoverMock = jest.fn();
  //   const component = shallow(<ImageThumbnail image={sampleProduct[0]} onMouseEnter={() => {hoverMock()}}/>);

  //   expect(hoverMock.mock.instances.length).toBe(1);
  //   done();
  // });

});
