import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import css from './style.css';
import ImageView from './components/imageView.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faChevronLeft, faHeart} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faChevronRight, faChevronLeft, faHeart);



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productNumber: 549504785,
      imageList: ["https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy2.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy3.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy4.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy5.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy6.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy7.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy8.jpg"
    ],
      imageThumbnailList: ["https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SamplePhotosThumbnail/pokenatomy1.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SamplePhotosThumbnail/pokenatomy2.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SamplePhotosThumbnail/pokenatomy3.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SamplePhotosThumbnail/pokenatomy4.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SamplePhotosThumbnail/pokenatomy5.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SamplePhotosThumbnail/pokenatomy6.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SamplePhotosThumbnail/pokenatomy7.jpg", "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SamplePhotosThumbnail/pokenatomy8.jpg"
    ],
      mainImage: {
        url: "https://s3-us-west-1.amazonaws.com/dustins.fec.product.images/SampleProduct/pokenatomy1.jpg",
        index: 0
      },
      zoom: false,
      expand: false
    };

    this.getUrls = this.getUrls = this.getUrls.bind(this);
    this.handleClickOnArrow = this.handleClickOnArrow.bind(this);
    this.handleClickOnThumbnail = this.handleClickOnThumbnail.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.toggleZoom = this.toggleZoom.bind(this);
  }

  componentDidMount() {
    const productId = window.location.pathname.split('/')[2] || this.state.productNumber;
      this.setState(({productNumber: productId}), () => {
        this.getUrls(this.state.productNumber);
      });
  }

  // getUrls(productNumber) {
  //   $.ajax(`http://ec2-50-18-28-6.us-west-1.compute.amazonaws.com:8000/product/${productNumber}`, {
  //     success: (imageObj) => {
  //       const parsedObj = JSON.parse(imageObj);
  //       const imageUrls = parsedObj.imageUrls;
  //       this.setState({
  //         imageList: imageUrls,
  //         imageThumbnailList: imageThumbnailUrls,
  //         mainImage: {
  //           url: imageUrls[0],
  //           index: 0
  //         }
  //       });
  //     }
  //   });
  // }


  //request for testing on local host

  getUrls(productNumber) {
    $.ajax(`/product/${productNumber}`, {
      success: (imageObj) => {
        const parsedObj = JSON.parse(imageObj);
        const imageUrls = parsedObj.imageUrls;
        const imageThumbnailUrls = parsedObj.imageThumbnailUrls;
        this.setState({
          imageList: imageUrls,
          imageThumbnailList: imageThumbnailUrls,
          mainImage: {
            url: imageUrls[0],
            index: 0
          }
        });
      }
    });
  }

  handleClickOnArrow(target) {
    const currIndex = this.state.mainImage.index;
    const imageList = this.state.imageList;

    if (target.className === 'nav-prev') {
      if (currIndex === 0) {
        this.setState({
          mainImage:
            {
              url: imageList[imageList.length - 1],
              index: imageList.length - 1
            }
        });
      } else {
        this.setState({
          mainImage: {
            url: imageList[currIndex - 1],
            index: currIndex - 1
          }
        });
      }
    }

    if (target.className === 'nav-next') {
      if (currIndex === imageList.length - 1) {
        this.setState({
          mainImage: {
            url: imageList[0],
            index: 0
          }
        });
      } else {
        this.setState({
          mainImage: {
            url: imageList[currIndex + 1],
            index: currIndex + 1
          }
        });
      }
    }
  }

  handleClickOnThumbnail(target, index) {
    this.setState({mainImage:
      {
        url: target.src,
        index: index
      }
    });
  }

  toggleExpand(target) {
    this.state.expand
    ? this.setState({expand: false})
    : this.setState({expand: true});
  }

  toggleZoom(target) {
    console.log('clicked', this.state);
    console.log('target', target);
    !this.state.zoom
    ? (target.classList.add('zoom'), this.setState({zoom: true}))
    : this.setState({zoom: false}, () => {
      target.classList.remove('zoom');
    });

  }


  render() {
    return (
      <div id='normal'>
        <ImageView
          images={this.state.imageThumbnailList}
          mainImage={this.state.mainImage.url}
          isZoomed={this.state.zoom}
          isExpanded={this.state.expand}
          arrowClick={this.handleClickOnArrow}
          thumbnailClick={this.handleClickOnThumbnail}
          toggleExpand={this.toggleExpand}
          toggleZoom={this.toggleZoom}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('image'));

export default App;