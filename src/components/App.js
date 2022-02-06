import React, { Fragment } from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import {  Route, Routes} from "react-router-dom";


import NotFound from './NotFound';
import ProductsInDb from './ProductsInDb';
import ContentLastProduct from './ContentLastProduct';




function App() {
  return (
    <Fragment>
      	<div id="wrapper">
          <SideBar />
         
          <Routes>
          <Route  path="/" exact ={true}  element= {< ContentWrapper />} />
          <Route  path="/product"   element= {< ProductsInDb />} />
          <Route path="/lastProduct" element= {< ContentLastProduct />} />
          <Route path="*"  element= {< NotFound />} />
          </Routes>
        


        
        </div>
    </Fragment>
  );
}

export default App;
