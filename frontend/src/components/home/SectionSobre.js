import fotoSobre from '../../img/fotoSobre.svg'

import facebook from '../../img/facebook.svg'
import twitter from '../../img/twitter.svg'
import linkedin from '../../img/linkedin.svg'
import instagram from '../../img/instagram.svg'

function SectionSobre() {
   return(
      <section className='sobre'>
            <img src={fotoSobre} className='fotoSobre'/>
            <div className='textosSobre'>
               <h1 className='tituloSobre'>Quem somos</h1>
               <p className='textoSobre'>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               </p>
               <div className='redesSociais'>
                  <img src={facebook} className='fotoRede'></img>
                  <img src={instagram} className='fotoRede'></img>
                  <img src={linkedin} className='fotoRede'></img>
                  <img src={twitter} className='fotoRede'></img>
               </div>
            </div>
         </section>
   )
}

export default SectionSobre