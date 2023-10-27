import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

import Header from "../Header.js"

function CafePerfil() {
   const {id} = useParams()

   const [cafe, setCafe] = useState([])

   useEffect(() => {
      axios.get(`http://localhost:8000/api/db/catalogo/${id}`).
      then(response => {
         setCafe(response.data)
      })
   }, [])

   return(
      <main>
         <Header pagina="HeaderCatalogo"/>

         <div className="infosCafe">
            <img src={cafe.fotoURL}></img>
            <div className="textosCafe">
               <h1>{cafe.nome}</h1>
               <p>{cafe.descricao}</p>
               <h3>{cafe.peso}g</h3>
               <h2>R$ {cafe.valor}</h2>
               <button>ENCOMENDAR</button>
            </div>
         </div>
      </main>
   )
}

export default CafePerfil