import React from 'react'

export default function RowProduct(props) {
    return (
        <div className={`content-row-product fondo-${props.fondo}`}>
            <div className="content-row-product-name">
                {props.name}
            </div>
            <button className='content-row-product-btn'>Ver más</button>
        </div>
    )
}
