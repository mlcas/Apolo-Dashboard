import React, { Fragment } from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import {  Route, Routes} from "react-router-dom";


import LastMovieInDb from './LastMovieInDb';

import NotFound from './NotFound';
import ProductsInDb from './ProductsInDb';
import ContentRowProducts from './ContentRowProducts';




function App() {
  return (
    <Fragment>
      	<div id="wrapper">
          <SideBar />
         
          <Routes>
          <Route  path="/" exact ={true}  element= {< ContentWrapper />} />
          <Route  path="/product"   element= {< ProductsInDb />} />
          <Route path="/countBySecction" element= {< ContentRowProducts />} />
          <Route path="/lastMovie" element= {< LastMovieInDb />} />
          <Route path="*"  element= {< NotFound />} />
          </Routes>
        


        
        </div>
    </Fragment>
  );
}

export default App;
