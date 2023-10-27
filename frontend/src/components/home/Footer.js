import { Link } from 'react-router-dom'

import logo from '../../img/logoHeader.svg';
import facebook from '../../img/facebook.svg'
import twitter from '../../img/twitter.svg'
import linkedin from '../../img/linkedin.svg'
import instagram from '../../img/instagram.svg'

function Footer() {
   return (
      <footer className="footerHome">
         <img src={logo}></img>
         <div className='redesSociais'>
            <img src={facebook} className='fotoRede'></img>
            <img src={instagram} className='fotoRede'></img>
            <img src={linkedin} className='fotoRede'></img>
            <img src={twitter} className='fotoRede'></img>
         </div>
         <nav className="navHeader">
            <ul className="navLinks">
               <Link to="/"> <li><a href="">Home</a></li> </Link>
               <Link to="/sobre"> <li><a href="">Sobre</a></li> </Link>
               <Link to="/catalogo"> <li><a href="">Catalogo</a></li> </Link>
               <Link to="/contato"> <li><a href="">Contato</a></li> </Link>
            </ul>
         </nav>
      </footer>
   )
}

export default Footer