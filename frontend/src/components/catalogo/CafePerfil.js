import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function CafePerfil() {
   const {id} = useParams()

   const [cafe, setCafe] = useState([])

   useEffect(() => {
      axios.get(`http://localhost:8000/api/db/catalogo/${id}`).
      then(response => {
         setCafe(response.data)
      })
   })

   return(
      <div>
         
      </div>
   )
}

export default CafePerfil