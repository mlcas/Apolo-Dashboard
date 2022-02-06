import React, { useState, useEffect } from "react";

import ProductsInDb from './ProductsInDb';


import ContentRowProducts from "./ContentRowProducts";
import Categories from "./Categories";
import ContentLastProduct from "./ContentLastProduct";


function ContentRowTop(){

	const [lastProducts, setLastProducts] = useState([]);
	const [lastImgProduct, setLastImgProduct] = useState({});
	

	useEffect(() => {
		fetch("/api/product/")
		  .then((respuesta) => {
			return respuesta.json();
		  })
		  .then((data) => {
			setLastProducts(data.products.pop())
		  })
		  .catch((error) => console.log(error));
	  }, []);
   console.log(lastProducts.id)
	  useEffect(() => {
		fetch(`/api/product/${lastProducts.id}`)
		  .then((respuesta) => {
			return respuesta.json();
		  })
		  .then((data) => {
			  console.log(data)
			setLastImgProduct(data.data.imgUrl)
			//console.log(lastImgProduct)
		  })
		  .catch((error) => console.log(error));
	  }, );
	 console.log(lastImgProduct)

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowProducts />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<ContentLastProduct/>
						<Categories />
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<ProductsInDb />
						

						{/*<!--End Genres In Db-->*/}	

						
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;