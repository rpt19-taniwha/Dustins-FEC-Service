import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';

const App = () => {
  console.log('In React App');
return (
  <div>
    <h1>React is Rendering Properly</h1>
  </div>
);

};

ReactDom.render(<App />, document.getElementById('app'));
