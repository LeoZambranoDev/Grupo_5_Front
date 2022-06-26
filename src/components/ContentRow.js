import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';


export default function ContentRow() {

    let [users, setUsers] = useState({});
    let [products, setProducts] = useState([]);
    let [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('/user/api/list')
            .then(x => {
                return x.json()
            })
            .then(x => {
                setUsers(x.data)
            })
            .catch(x => console.log(x))
        fetch('/product/api/list')
            .then(x => {
                return x.json()
            })
            .then(x => {
                setProducts(x.data)
            })
            .catch(x => console.log(x))
            fetch('/api/brands')
            .then(x => {
                return x.json()
            })
            .then(x => {
                setBrands(x)
            })
            .catch(x => console.log(x))
    }, [])

    return (

        <div className="row">

            <SmallCard cuantity={users.length} title={'Total Usuarios'} color={'warning'} icon={'fa-user-check'} key={0} />
            <SmallCard cuantity={products.length} title={'Total Productos'} color={'primary'} icon={'fa-mobile-screen'} key={1} />
            <SmallCard cuantity={brands.length} title={'Total Marcas'} color={'success'} icon={'fa-table-list'} key={2} />

        </div>
    )
}
