import React, { Component } from "react";
import Genre from "./Genre";
class GenreInDbClass extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
      productsList: [],
    };
  }
  componentDidMount(){
    fetch('/api/product/')
    .then(respuesta =>{
    return respuesta.json()
    })
    .then(producto =>{
    //console.log(genres)
    this.setState({productsList: producto.products})
    })
    .catch(error => console.log(error))
    }
    
  cambiarColor() {
    this.setState({
      color: "bg-secondary",
    });
  }

  render() {
       {/*<!-- Categories in DB -->*/}
   
     {/*<!-- Categories in DB -->*/}
    return (
      <React.Fragment>
        {/*<!-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6
                onMouseOver={() => this.cambiarColor()}
                className="m-0 font-weight-bold text-gray-800"
              >
                Genres in Data Base
              </h6>
            </div>
            <div className={"card-body " + this.state.color}>
              <div className="row">
                { this.state.productsList.map((product, index) => {
                  return <Genre {...product} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default GenreInDbClass;
