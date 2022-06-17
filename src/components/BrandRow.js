import React from 'react'

export default function BrandRow(props) {
  const { nombre, fondo, cuantity } = props;
  return (
    <tr className={`fondo-${fondo}`}>
        <td className="column-brand">{nombre}</td>
        <td className="column-brand">{cuantity}</td>
        
    </tr>
  )
}
