import React from 'react';
import ReactDOM from 'react-dom';
import DemoExample from './DemoExample';

export default (function mountDemoExample() {
  const mountPoint = document.getElementById('mount-point');

  if (mountPoint) {
    ReactDOM.render(
      <DemoExample />,
      mountPoint
    );
  }
}());
