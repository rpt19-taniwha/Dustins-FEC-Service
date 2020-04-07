import React from 'react';
import ReactDom from 'react-dom';
import Enyzme, { shallow } from 'enzyme';
import './enzyme.config.js'
import ImageThumbnail from '../../client/src/components/imageThumbnail.jsx';
import ImageList from '../../client/src/components/imageList.jsx';
import ImageView from '../../client/src/components/imageView.jsx';
import MainImage from '../../client/src/components/MainImage.jsx';
import PopupZoom from '../../client/src/components/PopupZoom.jsx';
import ImageService from '../../client/src/imageService.jsx';

jest.mock('../../client/src/imageService.jsx', () => 'ImageService');

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



describe ('Thumbnail Component', () => {
  it('thumbnail should render without props', (done) => {
      const component = shallow(<ImageThumbnail />);
      expect(component).toMatchSnapshot();
      done();
  });
  it('thumbnail should render with image', (done) => {
    const component = shallow(<ImageThumbnail />);
    expect(component).toMatchSnapshot();
    done();
});

});

describe ('Thumbnail Component', () => {
  it('ImageList Component renders without props', (done) => {
    const component = shallow(<ImageList />);
    expect(component).toMatchSnapshot();
    done();
  });

});

describe ('ImageView component', () => {
  it('ImageView component should render without props', (done) => {
    const component = shallow(<ImageView />);
    expect(component).toMatchSnapshot();
    done();
  });

});

describe ('MainImage Component', () => {
  it('MainImageComponent should render without props', (done) => {
    const component = shallow(<MainImage />);
    expect(component).toMatchSnapshot();
    done();
  });

});

describe ('PopupZoom Component', () => {
  it('PopupZoom Component should render without props', (done) => {
    const component = shallow(<PopupZoom />);
    expect(component).toMatchSnapshot();
    done();
  });

});

describe ('ImageService Component', () => {
  it('ImageService Component should render without props', (done) => {
    const component = shallow(<ImageService />);
    expect(component).toMatchSnapshot();
    done();
  });

});




