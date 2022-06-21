import React from 'react';
import ChartRow from './ChartRow';
import { useState, useEffect } from 'react';


function Chart (){
    let [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/product/api/list')
        .then(res => res.json())
        .then(data => {
            setProducts(data.data)
        }
        )
        .catch(err => console.log(err));
    }, []);


    return (
        /* <!-- DataTales Example --> */
       /*  <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">*/
                    <table className="chart">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Marca</th>
                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>Nombre</th>
                                <th>Precio</th>
                                <th>Marca</th>
                            </tr>
                        </tfoot>
                        <tbody>
                        {products && products.map((product, i) => {
            return (

              <ChartRow key={i} name={product.name} price={product.price} brand={product.brand} />
            )
          })
          }

                        </tbody>
                    </table>
              /*   </div>
            </div>
        </div> */

    )
}

export default Chart;