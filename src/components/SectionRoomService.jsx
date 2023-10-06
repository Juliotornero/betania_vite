import roomSection from '../assets/section-room.jpg'
import roomSectionDesktop from '../assets/section-room-desktop.jpg'
import {Link } from 'react-router-dom'

const SectionRoomService = ({pantallaDesktop}) => {
  return (
    
    <section className='w-full h-full mx-auto relative pt-16 tablet:mb-[650px] desktop:mb-[1000px]'>

        <div className='px-4 mx-auto max-w-[700px] min-w-[290px] flex flex-col text-right items-end tablet:flex-row-reverse tablet:items-start desktop:max-w-[1100px]'>

            <div className='w-[95%] h-full  mx-auto mb-7 relative tablet:w-1/2'>

                {pantallaDesktop 
                ? 
                    <img src={roomSectionDesktop} alt="" className="w-full h-full z-20 relative"/> 
                : 
                    <img src={roomSection} alt="" className="w-full h-full z-20 relative"/>
                }        
                
                <div className="absolute z-10 top-[-14px] right-[-14px] w-full h-full border border-gray-400"></div>
            </div>

            <div className='mb-10 tablet:mr-10 tablet:w-1/2'>
                <h1 className='capitalize font-bold text-3xl desktop:text-5xl desktop:mb-12 desktop:leading-normal'>Be' Tania: Su Hogar en Pisco</h1>
                <p className='mt-7 font-work font-normal text-sm tablet:text-xs desktop:text-base text-gray-600 desktop:mb-8 desktop:leading-normal'>
                Le extendemos una cálida bienvenida a Hospedaje Be' Tania, su elección de alojamiento en Pisco. Durante más de 12 años, hemos tenido el honor de recibir a huéspedes como usted, brindando un refugio confortable y acogedor en el corazón de la ciudad.
                </p>

                <button className='mt-7 p-3 w-3/4 max-w-[180px] border uppercase text-[10px] tracking-wider font-work border-gray-950 hover:bg-black hover:text-white rounded desktop:text-xs desktop:py-4'>
                    Conócenos
                </button>
                

            </div>


        </div>

        <section className='bg-[#c9b199] w-full h-fit  tablet:absolute tablet:top-[80%] desktop:top-[85%]'>

            <div className='max-w-[700px] py-12 px-4 mx-auto min-w-[290px] flex flex-col text-left text-white
                tablet:flex-row tablet:items-start tablet:my-20 desktop:my-32 desktop:max-w-[1100px] 
                '>

                    <div className="w-[95%] h-auto mx-auto relative tablet:w-1/2">            
                    {pantallaDesktop
                    ? 
                        <img src={roomSectionDesktop} alt="" className="w-full h-full z-10 relative" />
                    : 
                        <img src={roomSection} alt="" className="w-full h-full z-10 relative" />
                    }
                    

                    <div className="absolute top-[14px] right-[14px] w-full h-full border border-white"></div>
                    </div>

                    <div className='
                    tablet:ml-10 tablet:w-1/2
                    '> 
                    <h1 className='mt-7 capitalize font-bold text-3xl tablet:mt-0 desktop:text-5xl desktop:mb-12 desktop:leading-normal'>Te invitamos a relajarte</h1>

                    <p className='mt-7 mb-7 font-work font-normal text-sm tablet:text-xs desktop:text-base text-white desktop:mb-8 desktop:leading-normal'>En Hospedaje Be' Tania, cada habitación ha sido pensada como un espacio propio en el centro de Pisco. Nuestro diseño impecable incorpora comodidades residenciales y toques modernos para brindarte una experiencia hogareña única.</p>

                    <Link to="/habitaciones" className='p-3 w-3/4 max-w-[180px] text-[10px] tracking-wider border uppercase font-work border-white hover:bg-white hover:text-[#B7A18B] rounded desktop:text-xs desktop:py-4'>
                        Ver Habitaciones
                    </Link>   

                         
                    </div>

            </div>

        </section>
        
    </section>
  
  )
}

export default SectionRoomService