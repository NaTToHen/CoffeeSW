import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import Header from '../Header.js'
import SectionSobre from './SectionSobre.js'
import Banner from './Banner.js';
import Assinatura from './Assinatura.js';
import Footer from './Footer.js';

import CardCafe from './CardCafe.js'

import arrow from '../../img/arrowCatalogo.svg'

function Home() {

   const [data, setData] = useState([]);
   const [error, setError] = useState(null);

   const infoCard = document.querySelector('.infoCard')

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

   useEffect(() => {

      window.addEventListener('scroll', function () {
         const header = document.querySelector('.HeaderHome');
         header.classList.toggle('fundoHeaderHome', window.scrollY > 600);
      });

   }, []);

   return (
      <div className="Home">
         <Header />
         <div className='fundoHome'></div>

         <SectionSobre />

         <section className='slideCatalogo'>
            {data.slice(0, 5).map(data => {
            return <CardCafe
               key={data.id}
               nome={data.nome}
               desc={data.descricao}
               fotoURL={data.fotoURL}
               id={data.id} />
            })}
            <Link to="/catalogo"><a className='btnCatalogoCompleto'>Catalogo completo<img className='flechaCatalogo' src={arrow}></img></a></Link>
         </section>

         <Banner />
         <Assinatura />

         <Footer />

      </div>
   )
}

export default Home