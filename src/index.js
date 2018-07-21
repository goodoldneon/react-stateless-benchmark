import React from 'react';
import ReactDOM from 'react-dom';
import { ManyStatelessMount, ManyStatelessCall, ManyPure, ManyStateful } from './components/Dot';

ReactDOM.render(
  <div>
    {Array(10)
      .fill()
      .map((x, i) => <ManyStatelessMount key={i} count={500} />)}

    {Array(10)
      .fill()
      .map((x, i) => <ManyStatelessCall key={i} count={500} />)}

    {Array(10)
      .fill()
      .map((x, i) => <ManyPure key={i} count={500} />)}

    {Array(10)
      .fill()
      .map((x, i) => <ManyStateful key={i} count={500} />)}
  </div>,
  document.getElementById('root'),
);
