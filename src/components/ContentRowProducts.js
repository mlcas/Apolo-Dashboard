// Este componente tiene a otro componente que es SmallCard
import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard"; // importa el componente SmallCard que tiene el html

function ContentRowProducts() {
  const [productTotal, setProductTotal] = useState(0);
  const [categoriesTotal, setCategoriesTotal] = useState(0);
  const [usersTotal, setUsersTotal] = useState(0);

  
 
  useEffect(() => {
    fetch("/api/product/")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setProductTotal(data.count);
        setCategoriesTotal(data.categoriesCount);
       
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("/api/user/")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setUsersTotal(data.meta.total);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      {/*<!-- Content Row -->*/}
      <div className="row">
        <SmallCard
         color = "primary"
         titulo= "Productos en la base de datos"
         icono = "fas fa-film"
          valor={productTotal}
        />
        <SmallCard
           valor = {categoriesTotal}
           color= "success"
           titulo = "Total de categorias"
            icono = "fas fa-award"
        />
        <SmallCard
           valor = {usersTotal}
           color= "warning"
           titulo = "Usuarios en la base de datos"
            icono = "fas fa-user"
        />
      </div>
    </React.Fragment>
  );
}
export default ContentRowProducts;
