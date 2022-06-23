import React from 'react'
import { useState, useEffect } from 'react'
import LastProductInDb from './LastProductInDb';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    let [details, setDetails] = useState({});
    let params = useParams()
    useEffect(() => {
        fetch(`/product/api/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data.data)
                console.log(data.data)
            }
            )
            .catch(err => console.log(err));

    }, []);
    return (
        <React.Fragment>
            {details && <>
                <div className="detailImage">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={`http://localhost:3001/img/products/${details.image}`} />
                </div>
                <ul className="detailsTable">
                    <li>{details.price}</li>
                    <li>{details?.brand?.name}</li>
                    <li>{details?.memory?.name}</li>
                    <li>{details?.ram?.name}</li>


                </ul>
            </>}
        </React.Fragment>
    )
}
export default ProductDetails;

