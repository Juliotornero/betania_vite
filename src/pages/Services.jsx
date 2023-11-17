import { useEffect } from 'react';


const Services = () => {

 

  useEffect(() => {
    // Cuando el componente se monta (cuando se navega a esta página), desplázate al inicio de la página.
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <div className="w-full h-screen serviceDesktop">
          <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full'>
              <h1 className='text-4xl text-white tablet:text-5xl desktop:text-7xl'>Servicios</h1>
          </div> 
        </div>

        

        
    </>

  )
}

export default Services