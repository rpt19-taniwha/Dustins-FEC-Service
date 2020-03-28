import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Resizer from 'react-image-file-resizer';
import css from './style.css';
import ImageView from './components/imageView.jsx';
import ZoomView from './components/zoomView.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: ['empty', 'empty'],
      mainImage: ''
    };

  }

  componentDidMount() {
    this.getUrls();

  }

  getUrls(productNumber = '549504785') {
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

  // fileSizeHandler(photos, type) {
  //   const thumbnail = [75, 75];
  //   const normal = [1200, 360];
  //   const zoom = [2000, 900];
  //   if (type = 'normal') {
  //     Resizer.imageFileResizer(
  //       photos
  //     );
  //   }
  // }
  handleClickOnPhoto(e) {

  }

  render() {

    return (
      <div id='normal'>
        <ImageView
          images={this.state.imageList}
          mainImage={this.state.mainImage}
          imageClick={this.handleClickOnPhoto.bind(this)}
        />
      </div>
    );
  }
}


ReactDom.render(<App />, document.getElementById('app'));
