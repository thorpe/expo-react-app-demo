import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeScreen  from '../Containers/HomeScreen';

const Root = () => (
  <BrowserRouter>
    <HomeScreen/>
  </BrowserRouter>
);

export default Root;