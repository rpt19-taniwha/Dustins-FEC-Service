import React from 'react';
import Enyzme, { shallow, mount, render } from 'enzyme';
import './enzyme.config.js';
import ImageService from '../../client/src/imageService.jsx';



const sampleProduct = {
  0: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg",
  1: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy2.jpg",
  2: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy3.jpg",
  3: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy4.jpg",
  4: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy5.jpg",
  5: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy6.jpg",
  6: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy7.jpg",
  7: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy8.jpg"
}

jest.mock('../../client/src/imageService.jsx', () => 'ImageService');

describe ('ImageService Component', () => {

  //before each

  it('ImageService Component should render without props', (done) => {
    const component = shallow(<ImageService />);
    expect(component).toMatchSnapshot();
    done();
  });

  it('ImageService Component should render with props', (done) => {
    done();
  });



});




