// Este componente tiene a otro componente que es SmallCard
import React from 'react';
import SmallCard from './SmallCard'; // importa el componente SmallCard que tiene el html

let productInDataBase = {
    color:   "primary",
    titulo: "Movies in Data Base",
    valor: 25,
    icono: "fas fa-film",
}

let amount ={
    color:   "success",
    titulo: "Total awards",
    valor: 79,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Actors quantity",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user]; // le paso al array cada uno de los objetos y los recorro en la linea 34


function ContentRowMOvies(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowMOvies;