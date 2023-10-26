import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Header from '../Header.js'
import SectionSobre from './SectionSobre.js'

import CardCafe from './CardCafe.js'

function Home() {

   const [data, setData] = useState([]);
   const [error, setError] = useState(null);

   useEffect(() => {
      axios.get('http://localhost:8000/api/db/catalogo')
         .then(response => {
            // Faça algo com os dados da resposta, por exemplo, definir o estado do componente
            setData(response.data)
         })
         .catch(error => {
            // Lida com erros, por exemplo, definindo um estado de erro
            setError(error)
         })
   }, [])

   return (
      <div className="Home">
         <Header />
         <div className='fundoHome'></div>

         <SectionSobre />

         <section className='slideCatalogo'>
            {data.map(data => {
            return <CardCafe
               key={data.id}
               nome={data.nome}
               desc={data.descricao}
               fotoURL={data.fotoURL}
               id={data.id} />
            })}
         </section>
      </div>
   )
}

export default Home