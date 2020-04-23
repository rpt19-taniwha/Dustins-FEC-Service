import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import css from './style.css';
import ImageView from './components/imageView.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faChevronLeft, faHeart} from '@fortawesome/free-solid-svg-icons';
import { get } from 'mongoose';

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
    this.handleSelectedImageClass = this.handleSelectedImageClass.bind(this);
  }

  componentDidMount() {
    const productId = window.location.pathname.split('/')[2] || this.state.productNumber;
      this.setState(({productNumber: productId}), () => {
        this.getUrls(this.state.productNumber);
      });
    }

    handleSelectedImageClass(parentElement = undefined) {
      const currentElement = document.getElementsByClassName('current-selection')[0];
      console.log('parentElement', parentElement);
      // if there is a current-selection class remove it
      if (currentElement) {
        currentElement.classList.remove('current-selection');
      }
      // if there wasn't a parent selected and passed it, the current selection must be initialized
      // select the thumbnail image that corresponds to the current main image
      // distinguish between whether the modal is up or not.
      if (!parentElement) {
        const popUpActive = this.state.expand;
        if (popUpActive) {
          const initiallySelectedElement = document.getElementById('pop-up-image-list').childNodes[0];
          initiallySelectedElement.classList.add('current-selection');
        } else {
          const initiallySelectedElement = document.getElementById('thumbnailcontainer').childNodes[0];
          initiallySelectedElement.classList.add('current-selection');
        }
      } else {
        // if there are more than one elements selected show me it
        if (currentElement && document.getElementsByClassName('current-selection').length > 0) {
          console.log('error too many selected Elements', document.getElementsByClassName('imagelist'))
        // if there was already an image selected add a class to the new selection
        }
        parentElement.classList.add('current-selection');


      }
    }



  //  getUrls(productNumber) {
  //   $.ajax(`http://ec2-50-18-28-6.us-west-1.compute.amazonaws.com:8000/product/${productNumber}`, {
  //     success: (imageObj) => {
  //       const parsedObj = JSON.parse(imageObj);
  //       const imageUrls = parsedObj.imageUrls;
  //       const imageThumbnailUrls = parsedObj.imageThumbnailUrls;
  //       this.setState({
  //         imageList: imageUrls,
  //         imageThumbnailList: imageThumbnailUrls,
  //         mainImage: {
  //           url: imageUrls[0],
  //           index: 0
  //         }
  //       }, () => {
  //         this.handleSelectedImageClass(null, this.state.mainImage.index);
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
        }, () => {
          this.handleSelectedImageClass();
        });
      }
    });
  }

  handleClickOnArrow(target) {
    const isModal = this.state.mainImage.expand;
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
        }, () => {
          if (isModal) {
            const grandParent = document.getElementById('pop-up-image-list');
            const parent = grandparent.childNodes[this.state.mainImage.index];
            this.handleSelectedImageClass(parent);
          } else {
            const grandParent = document.getElementById('thumbnailContainer');
            const parent = grandparent.childNodes[this.state.mainImage.index];
            this.handleSelectedImageClass(parent);
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
    const parent = target.parentElement;
    const imageList = this.state.imageList;
    this.handleSelectedImageClass(parent);
    this.setState({mainImage:
      {
        url: imageList[index],
        index: index
      }
    });
  }

  toggleExpand() {
    // console.log('toggleExpand called');
    // const selectedIndex = this.state.mainImage.index;
    this.state.expand
    ? this.setState({expand: false}, () => {
      // this.handleSelectedImageClass();
      // console.log('allThumbnailEl', allThumbnailEl);
      // const selectedElement = allThumbnailEl(selectedIndex);
      // console.log('selectedElement', selectedElement.parentElement);
    })
    : this.setState({expand: true}, () => {
      // this.handleSelectedImageClass();
      // const allThumbnailEl = document.getElementById('pop-up-image-list');
      // const selectedElement = allThumbnailEl(selectedIndex);
      // console.log('selectedElement', selectedElement.parentElement);
    });
  }

  toggleZoom(target) {
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