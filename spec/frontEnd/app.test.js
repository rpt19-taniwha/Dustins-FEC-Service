import React from 'react';
import Enyzme, { shallow, mount, render } from 'enzyme';
import './enzyme.config.js';
import App from '../../client/src/app.jsx';



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

jest.mock('../../client/src/app.jsx', () => 'ImageService');

describe ('App Component', () => {

  //before each

  it('App Component should render without props', (done) => {
  const component = shallow(<App/>);
    expect(component).toMatchSnapshot();
    done();
  });

  it('App Component should render with props', (done) => {
    done();
  });



});




