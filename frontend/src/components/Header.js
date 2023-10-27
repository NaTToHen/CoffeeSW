import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

import logo from '../img/logoHeader.svg'
import '../components/home/css/Home.css'

function Header(props) {
   
   return (
      <header className={`HeaderHome ${props.pagina}`}>
         <Link to="/"><img src={logo} /></Link>
         <nav className="navHeader">
            <ul className="navLinks">
               <Link to="/"> <li><a href="">Home</a></li> </Link>
               <Link to="/sobre"> <li><a href="">Sobre</a></li> </Link>
               <Link to="/catalogo"> <li><a href="">Catalogo</a></li> </Link>
               <Link to="/contato"> <li><a href="">Contato</a></li> </Link>
            </ul>
         </nav>
      </header>
   )
}

export default Header