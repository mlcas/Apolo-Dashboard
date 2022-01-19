import React, { Fragment } from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import {  Route, Routes} from "react-router-dom";

import ContentRowMOvies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';

import NotFound from './NotFound';
import ProductsInDb from './ProductsInDb';




function App() {
  return (
    <Fragment>
      	<div id="wrapper">
          <SideBar />
         
          <Routes>
          <Route  path="/" exact ={true}  element= {< ContentWrapper />} />
          <Route  path="/product"   element= {< ProductsInDb />} />
          <Route path="/movies" element= {< ContentRowMOvies />} />
          <Route path="/lastMovie" element= {< LastMovieInDb />} />
          <Route path="*"  element= {< NotFound />} />
          </Routes>
        


        
        </div>
    </Fragment>
  );
}

export default App;
