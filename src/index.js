import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Entrada from './Entrada';
import reportWebVitals from './reportWebVitals';

render(
  <BrowserRouter>
    <Entrada />
  </BrowserRouter>,
  document.querySelector('#root')
)

reportWebVitals();
