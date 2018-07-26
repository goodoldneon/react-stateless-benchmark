import React from 'react';
import ReactDOM from 'react-dom';
import { ManyStatelessMount, ManyStatelessCall, ManyPure, ManyStateful } from './components/Dot';

ReactDOM.render(
  <div>
    <ManyStatelessMount count={5000} />
    <ManyStatelessCall count={5000} />
    <ManyPure count={5000} />
    <ManyStateful count={5000} />
  </div>,
  document.getElementById('root'),
);
