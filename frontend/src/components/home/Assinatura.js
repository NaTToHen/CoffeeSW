import { Link } from 'react-router-dom'

import foto1 from '../../img/cafeAssinatura.svg'
import foto2 from '../../img/cafeArt2.jpg'
import foto3 from '../../img/cafeArt3.jpg'

function Assinatura() {
   return (
      <section className="assinaturasHome">
         <Link to="/catalogo"><img src={foto1} /></Link>
         <div>
            <Link to="/catalogo"><img src={foto2} /></Link>
            <Link to="/catalogo"><img src={foto3} /></Link>
         </div>
         
      </section>
   )
}

export default Assinatura