import arrow from '../../img/arrow.svg';
import { Link } from 'react-router-dom'

function CardCatalogo(props) {
   return (
      <div className="cardCafeCatalogo" id={props.id}>
         <img className="fotoFundoCardCatalogo" src={props.fotoURL} alt={props.nome} />
         <div className="infoCardCatalogo">
            <h1 className="nomeCafeCatalogo">{props.nome}</h1>
            <h2 className="valorCafeCatalogo">R$ {props.valor}</h2>
            <Link to={`/catalogo/cafe/${props.id}`} style={{ textDecoration: 'none' }}>
               <a href="" className="btnSaibaMaisCatalogo">Saiba Mais</a>
            </Link>
         </div>
      </div>
   )
}

export default CardCatalogo