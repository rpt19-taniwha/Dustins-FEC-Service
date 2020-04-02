import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import css from './style.css';
import ImageView from './components/imageView.jsx';
import ZoomView from './components/zoomView.jsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faChevronLeft,  faHeart} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faChevronRight, faChevronLeft, faHeart);



class ImageService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rootUrl: 'http://localhost:8000',
      productNumber: '549504785',
      imageList: ["https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy2.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy3.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy4.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy5.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy6.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy7.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy8.jpg"
    ],
      mainImage: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg"
    };

    this.getUrls = this.getUrls = this.getUrls.bind(this);
    this.handleClickOnArrow = this.handleClickOnArrow.bind(this);
    this.handleHoverOnThumbnail = this.handleHoverOnThumbnail.bind(this);

  }

  componentDidMount() {
    const productId = window.location.pathname.split('/')[2];
    if (productId) {
      this.setState(({productNumber: productId}), () => {
        this.getUrls(this.state.productNumber);
      })
    }
  }


  getUrls(productNumber) {
    $.ajax(`${this.state.rootUrl}/product/${productNumber}`, {
      success: (imageObj) => {
        const parsedObj = JSON.parse(imageObj);
        const imageUrls = parsedObj.imageUrls;
        this.setState({
          imageList: imageUrls,
          mainImage: imageUrls[0]
        });
      }
    });
  }

  handleClickOnArrow(e) {

  }

  handleHoverOnThumbnail(target) {
    console.log('this', this);
    this.setState({mainImage: target.src});

  }

  render() {

    return (
      <div id='normal'>
        <ImageView
          images={this.state.imageList}
          mainImage={this.state.mainImage}
          arrowClick={this.handleClickOnArrow}
          thumbnailHover={this.handleHoverOnThumbnail}
        />
      </div>
    );
  }
}


ReactDom.render(<ImageService />, document.getElementById('image'));
