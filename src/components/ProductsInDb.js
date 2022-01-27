import React, { useState, useEffect } from "react";
import Product from "./Product";
function ProductInDb () {
    const [products, setProducts] = useState([]);
    const [productsPage, setProductsPage] = useState([]);
    const [cantPage, setCantPage] = useState(0);
    const [pageActual, setPageActual] = useState(1);
    const handlePageNext = () => {
        if(pageActual < cantPage) {
            setPageActual(pageActual + 1);
        }
    }
    const handlePagePrevious = () => {
        if(pageActual > 1) {
            setPageActual(pageActual - 1);
        }
    }
    useEffect(() => {
        fetch("/api/product/")
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
              setProducts(data.products);
              setCantPage(Math.ceil(data.products.length / 6));
          })
          .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        fetch(`/api/product/paginate?page=${(pageActual - 1)}&size=6`)
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => {
              setProductsPage(data.products)
            })
            .catch((error) => console.log(error));
        }, [pageActual]);
        return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-12 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">TODOS LOS PRODUCTOS</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    productsPage.map((product,index)=>{
                                        return <Product name={product.name} key={index} />
                                    })
                                }
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary mr-3" onClick={handlePagePrevious}>
                                    {'<'}
                                </button>
                                <span>{pageActual} / {cantPage}</span>
                                <button className="btn btn-primary ml-3" onClick={handlePageNext}>
                                    {'>'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
export default  ProductInDb 