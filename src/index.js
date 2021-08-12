import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Container } from '@material-ui/core';
import App from './App';

ReactDOM.render(
      <BrowserRouter>
          <Container disableGutters>
            <App />
          </Container>
      </BrowserRouter>,
  document.getElementById('root')
)