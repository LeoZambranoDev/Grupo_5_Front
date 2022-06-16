import React from "react";
import { useState, useEffect } from "react";
import BrandRow from "./BrandRow";

function BrandsInDb() {

  let [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch('/api/brands')
      .then(res => res.json())
      .then(data => {
        setBrands(data)
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <table>


        <thead>
          <tr>
            <th>Marca</th>
            <th>Cantidad</th>
          </tr>
        </thead>

        <tbody>
          
          {brands && brands.map((brand, i) => {
            return (
              <BrandRow key={i} nombre={brand.name} cuantity={brand.products.length} />
            )
          })
          }
        </tbody>

      </table>

    </>
  );
}

export default BrandsInDb;
