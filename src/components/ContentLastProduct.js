import React, {useState, useEffect} from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';
import LastProduct from './LastProduct';


function ContentLastProduct() {
const [productDetail , setProductDetail] = useState({});
const [lastProducts, setLastProducts] = useState(0);
const [productLast, setProductLast] = useState(0);
const [imageLastProduct, setImageLastProduct] = useState('');

let ultimoRegistro;
useEffect(() => {
    fetch('/api/product')
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((data) => {
        ultimoRegistro = data.products[data.products.length -1].id;
        setProductLast(data.products[data.products.length -1].id);
        setProductDetail(data.products[data.products.length -1]);
        setLastProducts(data.products[data.products.length -1].id);
    })
    .catch((error) => console.log(error));
},[lastProducts])

console.log(lastProducts);
console.log(productDetail);

useEffect(() => {
    fetch(`/api/product/${productLast}`)
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((data) => {
        setImageLastProduct(data.data.imgUrl)
    })
    .catch((error) => console.log(error));
},[productLast])

console.log(imageLastProduct)
    return (
       
        <LastProduct dataProduct = {productDetail} dataImage = {imageLastProduct} />		
        
    )
}

export default ContentLastProduct