import { useEffect } from 'react';


import candelabro from '../assets/discoverPisco/candelabro.jpg'
import islas from '../assets/discoverPisco/islasBallestas.jpg'
import parapente from '../assets/discoverPisco/parapente.jpg'
import plaza from '../assets/discoverPisco/plazadearmas.png'
import reserva from '../assets/discoverPisco/reserva.jpg'
import tambocolorado from '../assets/discoverPisco/tamboColorado.jpg'
import yakupark from '../assets/discoverPisco/yakupark.png'
import { Link } from 'react-router-dom';

const DiscoverPisco = () => {
  useEffect(() => {
    // Cuando el componente se monta (cuando se navega a esta página), desplázate al inicio de la página.
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <div className="w-full h-screen piscoDesktop">
          <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full'>
              <h1 className='text-4xl text-white tablet:text-5xl desktop:text-7xl'>Descubre Pisco</h1>
          </div> 
        </div>


        <section className='font-work flex flex-wrap p-4 justify-center items-center'>


          <article class="rounded overflow-hidden shadow-lg w-[300px] h-[560px] tablet:h-[520px] m-2 pb-4 flex flex-col justify-between items-center">
            <img class="w-full h-48 object-cover" src={islas} alt="Sunset in the mountains"/>
            <div class="px-6 py-3">
              <div class="font-bold text-xl mb-2 text-center">Las Islas Ballestas</div>
              <p class="text-gray-500 text-sm text-center">
              Las Islas Ballestas, también conocidas como "el pequeño Galápagos" debido a su abundante vida silvestre, son un grupo de pequeñas islas e islotes ubicados en la costa del océano Pacífico, cerca de la ciudad de Paracas, en la región de Ica, Perú. Estas islas son famosas por su belleza natural y su rica biodiversidad marina y aviar.              
              </p>
            </div> 
            <Link to="" className='bg-gray-800 px-3 py-2 rounded text-white text-xs uppercase'>Planear Visita</Link>
          </article> 


         

        
          

          
        
        </section>
    </>
  )
}

export default DiscoverPisco