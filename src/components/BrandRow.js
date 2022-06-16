import React from 'react'

export default function BrandRow(props) {
  return (
    <tr>
        <td>{props.nombre}</td>
        <td>{props.cuantity}</td>
    </tr>
  )
}
