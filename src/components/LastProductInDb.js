import React,{useState, useEffect} from 'react';
// import imagenFondo from '../assets/images/mandalorian.jpg';
import RowProduct from './RowProduct';

function LastProductInDb(){

    let [productsMostViewed, setProductsMostViewed] = useState([]);
    useEffect(() => {
        fetch('/product/api/mostViewed')
        .then(res => res.json())
        .then(data => {
            setProductsMostViewed(data.data)
            console.log(data.data);
        })
        .catch(err => console.log(err));
    }, []);
    return(
        <div className="col-lg-6 mb-4">
            <div className="card  shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800"> Productos destacados</h5>
                </div>

                { productsMostViewed && 
                    productsMostViewed.map((product,i) => (
                          
                        <RowProduct name={product.name} id={product.id} fondo={i%2==0?'par':'impar'} key={i} />
                         
                    ))
                }

                {/* <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3001/img/products/${lastProduct.image}`} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{lastProduct.name}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div> */}
            </div>
        </div>
    )
}

export default LastProductInDb;
