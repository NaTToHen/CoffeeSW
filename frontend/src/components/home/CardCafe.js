import arrow from '../../img/arrow.svg'

function CardCafe(props) {
   return (
      <div className="cardCafe" id={props.id}>
         <img className="fotoFundoCard" src={props.fotoURL} alt={props.nome} />
         <div className="infoCard">
            <h1 className="nomeCafe">{props.nome}</h1>
            <h2 className="descCafe">{props.desc}</h2>
            <a href="#" className="btnSaibaMais">Saiba Mais <img src={arrow}></img></a>
         </div>
      </div>
   )
}

export default CardCafe