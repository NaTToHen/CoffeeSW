import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Header from "../Header.js"
import CardCatalogo from './CardCatalogo.js';
import Footer from '../home/Footer.js';

import './css/Catalogo.css'

function Catalogo() {
   const [data, setData] = useState([]);
   const [error, setError] = useState(null);

   useEffect(() => {
      axios.get('http://localhost:8000/api/db/catalogo')
         .then(response => {
            setData(response.data)
            console.log(data)
         })
         .catch(error => {
            setError(error)
         })
   }, [])

   return (
      <main>
         <Header pagina="HeaderCatalogo" />

         <div className='containerCatalogo'>
            <div className='cardsCatalogo'>
               {data.map(data => {
               return <CardCatalogo
               key={data.id}
               nome={data.nome}
               valor={data.valor}
               fotoURL={data.fotoURL}
               id={data.id}
               />
            })}
            </div>
         </div>

         <Footer />
      </main>
      
   )
}

export default Catalogo