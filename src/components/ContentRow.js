import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect } from 'react';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

// let moviesInDB = {
//     title: 'Movies in Data Base',
//     color: 'primary', 
//     cuantity: 21,
//     icon: 'fa-clipboard-list'
// }

// /* <!-- Total awards --> */

// let totalAwards = {
//     title:' Total awards', 
//     color:'success', 
//     cuantity: '79',
//     icon:'fa-award'
// }

// /* <!-- Actors quantity --> */

// let actorsQuantity = {
//     title:'Actors quantity' ,
//     color:'warning',
//     cuantity:'49',
//     icon:'fa-user-check'
// }

// let cartProps = [moviesInDB, totalAwards, actorsQuantity];


// const getUser = async () => {
//     let users= await fetch('/user/api/list').then(x=>x.json());
//     console.log(users);
//     return users;
// }




export default function ContentRow() {

    let [users, setUsers] = useState({});
    let [products, setProducts] = useState([]);
    let [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/user/api/list')
            .then(x => {
                x.json()
                console.log(x);
            })
            .then(x => {
                setUsers(x)
                // console.log(x)
            }).catch(x => console.log(x))
        // fetch('/product/api/list').then(x=>x.json()).then(x=>setProducts(x));
        // fetch('/api/brand').then(x=>x.json()).then(x=>setBrands(x));
    }, [])

    // let users= await fetch('/user/api/list').then(x=>x.json());
    // let products= await fetch('/product/api/list').then(x=>x.json());
    // let brands= await fetch('/api/brand').then(x=>x.json());


    return (

        <div className="row">

            <SmallCard cuantity={3} title={'Total Usuarios'} color={'warning'} icon={'fa-user-check'} key={0} />
            <SmallCard cuantity={3} title={'Total Productos'} color={'primary'} icon={'fa-user-check'} key={1} />
            <SmallCard cuantity={3} title={'Total Marcas'} color={'success'} icon={'fa-award'} key={2} />

        </div>
    )
}
