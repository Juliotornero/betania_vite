import React from 'react'
import logoName from '../assets/logoName.svg'
import discoverRom from '../assets/discoverRoom.jpg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import DiscoverButton from './DiscoveButton';
import { useState } from 'react';

const SectionDiscover = ({pantallaTablet}) => {
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (!startX || !startY) return;

    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // El gesto es principalmente horizontal, permitir el desplazamiento horizontal
      e.stopPropagation();
    } else {
      // El gesto es principalmente vertical, permitir el desplazamiento vertical
    }

    setStartX(null);
    setStartY(null);
  };

  return (
    <>
    <section className="flex flex-col px-4 py-14 mx-auto">

        <header className='flex flex-col justify-center items-center'>
            <h1 className='mb-5 font-work uppercase text-sm font-bold'>Descubre</h1>
            <img src={logoName} alt="" className='w-3/4 mb-5 tablet:w-[320px]'/>
        </header>

        
        {pantallaTablet 
        
          ? 
            <div className='mt-10 flex flex-row max-w-screen-desktop mx-auto'>
                  
              
                <article className="relative w-full h-full flex group overflow-hidden mx-2">
                        <img
                          src={discoverRom}
                          alt="Imagen de Cuarto"
                          className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                          <p className="text-white text-3xl font-bold tracking-wide">Habitaciones</p>
                          <DiscoverButton/>
                        </div>
                </article>

              
                <article className="relative w-full h-full flex group overflow-hidden mx-2">
                    
                      
                    <img
                      src={discoverRom}
                      alt="Imagen de Cuarto"
                      className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                      <p className="text-white text-3xl font-bold tracking-wide">Servicios</p>
                      <DiscoverButton/>
                    </div>
                  
                
                </article>
                
          
                <article className="relative w-full h-full flex group overflow-hidden mx-2">
                    
                      
                    <img
                      src={discoverRom}
                      alt="Imagen de Cuarto"
                      className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                      <p className="text-white text-3xl font-bold tracking-wide">Ofertas</p>
                      <DiscoverButton/>
                    </div>
                  
                
                </article>

                <article className="relative w-full h-full flex group overflow-hidden mx-2">
                    
                      
                    <img
                      src={discoverRom}
                      alt="Imagen de Cuarto"
                      className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                      <p className="text-white text-3xl font-bold tracking-wide">Conoce Pisco</p>
                      <DiscoverButton/>
                    </div>
                  
                
                </article>
            </div>
          : 
            <>
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                style={{ overflowY: 'scroll' }}
              >
                  <div className='flex relative mx-auto my-carousel'>
              <Carousel
                          showStatus={false}
                          showArrows={false}
                          autoPlay={false}
                          showThumbs={false}
                          swipeable={true}
                    >
                    {/* Slide 1 */}
                      <article className="w-full h-full flex group overflow-hidden">
                          <img
                            src={discoverRom}
                            alt="Imagen de Cuarto"
                            className="transition-transform transform scale-100 group-hover:scale-105"
                          />
                          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                                <p className="text-white text-3xl font-bold tracking-wide">Habitacionees</p>
                                <DiscoverButton/>
                          </div>
                      </article>

                    {/* Slide 2 */}
                      <article className="w-full h-auto flex group overflow-hidden">  
                          <img
                            src={discoverRom}
                            alt="Imagen de Cuarto"
                            className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                          />
                          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                            <p className="text-white text-3xl font-bold tracking-wide">Servicios</p>
                            <DiscoverButton/>
                          </div>
                      </article>
                    
                    {/* Slide 3 */}
                      <article className="w-full h-auto flex group overflow-hidden">
                          <img
                            src={discoverRom}
                            alt="Imagen de Cuarto"
                            className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                          />
                          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                          <p className="text-white text-3xl font-bold tracking-wide">Ofertas</p>
                          <DiscoverButton/>
                          </div>
                      </article>

                      {/* Slide 3 */}
                      <article className="w-full h-auto flex group overflow-hidden">
                          <img
                            src={discoverRom}
                            alt="Imagen de Cuarto"
                            className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
                          />
                          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                          <p className="text-white text-3xl font-bold tracking-wide">Pisco</p>
                          <DiscoverButton/>
                          </div>
                      </article>

              </Carousel>
                  </div>
            
              </div>
            
            </>
           
        }
   
    </section>
    
    </>

  );
};

export default SectionDiscover;