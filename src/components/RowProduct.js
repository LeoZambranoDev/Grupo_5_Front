import React from 'react'
import ProductDetails from './ProductDetails'
import { Link } from 'react-router-dom'

export default function RowProduct(props) {
    return (
        <div className={`content-row-product fondo-${props.fondo}`}>
            <div className="content-row-product-name">
                {props.name}
            </div>
            <Link  to = {`/ProductDetails/${props.id}`} className='content-row-product-btn'>Ver más</Link>
            
            
            
        </div>
    )
}
