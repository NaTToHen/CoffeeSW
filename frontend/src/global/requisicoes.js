import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CatalogoList() {
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
}

export default CatalogoList