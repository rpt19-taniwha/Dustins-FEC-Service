import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import css from './style.css';
import ImageView from './components/imageView.jsx';
import ZoomView from './components/zoomView.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productNumber: '549504785',
      imageList: ["https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy2.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy3.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy4.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy5.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy6.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy7.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy8.jpg"
    ],
      mainImage: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg"
    };

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
    $.ajax(`/product/${productNumber}`, {
      success: (imageObj) => {
        const parsedObj = JSON.parse(imageObj);
        const imageUrls = parsedObj.imageUrls;
        this.setState({
          imageList: imageUrls,
          mainImage: imageUrls[0]
        }, () => {
          console.log('new state', this.state);
        });
      }
    });
  }

  handleClickOnArrow(e) {

  }

  render() {

    return (
      <div id='normal'>
        <ImageView
          images={this.state.imageList}
          mainImage={this.state.mainImage}
          imageClick={this.handleClickOnArrow.bind(this)}
        />
      </div>
    );
  }
}


ReactDom.render(<App />, document.getElementById('image'));
