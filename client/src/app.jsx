import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import './styles.css';

const App = () => {
  return (
    <div>
      <h1>React is Rendering Properly</h1>
    </div>
  );

};

ReactDom.render(<App />, document.getElementById('app'));
