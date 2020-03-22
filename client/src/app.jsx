import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import css from './style.css';
import imageView from './components/imageView.jsx';
import zoomView from './components/zoomView.jsx';

const App = () => {
  return (
    <div>
      <h1>React is Rendering Properly</h1>
    </div>
  );

};

ReactDom.render(<App />, document.getElementById('app'));
