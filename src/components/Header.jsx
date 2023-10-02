import imgMenu from '../assets/menu.svg'
import imgMenuWhite from '../assets/menuWhite.svg'
import imgClose from '../assets/close.svg'
import logoWhite from '../assets/logoWhite.svg'
import logoBlack from '../assets/logoBlack.svg'
import logoName from '../assets/logoName.svg'
import logoNameWhite from '../assets/logoNameWhite.svg'
import { useState, useEffect } from 'react'

const Header = ({pantallaTablet, pantallaDesktop}) => {


    const [scrollDown, setScrollDown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
    const handleScroll = () => {
        if (window.scrollY > 10) { 
            setScrollDown(true);
        } else {
            setScrollDown(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);


      
    const openMenu = (e) => {
        setIsMenuOpen(true);
        document.body.classList.add('overflow-hidden');
      };
      
    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
      };
      
    
    return (
        <>

        <header className={`w-full h-screen relative ${pantallaDesktop ? 'imgHeaderDesktop' : 'imgHeader'}`}>

                <div className={`z-30 w-full h-[70px] px-4 flex items-center ${scrollDown ? 'fixed bg-white  border border-b-2' : 'bg-transparent'} tablet:h-[90px]`}> 
                     
                    <div className='w-full h-full mx-auto max-w-screen-desktop flex justify-between items-center'>
                        
                        {scrollDown 
                            ? 
                            <>
                                <a href='#' onClick={openMenu} className='flex justify-center items-center text-black'>
                                    <img className='w-8 desktop:w-10' src={imgMenu} alt="menuIcon"/>
                                    {pantallaTablet && <span className='ml-2 uppercase text-sm pr-14'>Menu</span>}
                                </a>
                                                                
                                {pantallaTablet && <span><img className='tablet:w-[150px] desktop:w-[200px]' src={logoName} alt="Logo Be'Tania"/></span>}

                                <div className='flex items-center'>

                                    {!pantallaTablet && <button><img className='w-12 mr-2' src={logoBlack} alt="Logo Be'Tania"/></button>}
                                    
                                    <button className={`h-[38px] w-[134px] uppercase text-sm font-work rounded hover:bg-transparent hover:text-white border-2 
                                    tablet:h-[48px] tablet:w-[167px] 
                                    desktop:w-[199px] desktop:h-[58px] 
                                    ${scrollDown ? 'bg-[#181818] text-white hover:text-gray-900 border-gray-950' : 'bg-white text-black'}`}
                                    >
                                        Reserva
                                    </button>

                                </div>
                                
                            </>
                            : 
                            <>
                                <a href='#' onClick={openMenu} className='flex justify-center items-center text-white'>
                                    <img className='w-8 desktop:w-10' src={imgMenuWhite} alt="menuIcon"/>
                                    {pantallaTablet && <span className='ml-2 uppercase text-sm'>Menu</span>}
                                </a>

                                <button className={`h-[38px] w-[134px] uppercase text-sm font-work px-5 py-1 rounded hover:bg-transparent hover:text-white border-2 
                                tablet:h-[48px] tablet:w-[167px] 
                                desktop:w-[199px] desktop:h-[58px] 
                                ${scrollDown ? 'bg-[#181818] text-white hover:text-gray-900 border-gray-950' : 'bg-white text-black'}`}
                                >
                                    Reserva
                                </button>

                            </>
                               

                                
                        }               
                    
                        
                    </div>
                    

                </div>


                <nav className={`w-full h-screen absolute z-50 px-4 py-4 text-white bg-[#181818] top-0 left-0 ${!isMenuOpen && 'hidden'}`}>


                    <div className='flex flex-row-reverse justify-between'>
                        <a href='#' onClick={closeMenu}><img className='w-8 mr-5 mt-5' src={imgClose} alt="closeIcon"/></a>
                    </div>
                    
                    <div className='flex flex-col text-xl mx-auto max-w-screen-desktop tablet:text-2xl desktop:text-4xl'>
                        <a className='mt-20 mb-16 text-center p-2' href="#"><img className='w-16 desktop:w-28' src={logoWhite} alt="" /></a>
                        <a href="#" className='my-3 hover:text-[#89745C]'>HABITACIONES</a>
                        <a href="#" className='my-3 hover:text-[#89745C]'>SERVICIOS</a>
                        <a href="#" className='my-3 hover:text-[#89745C]'>ATRACCIONES EN PISCO</a>
                        <a href="#" className='my-3 hover:text-[#89745C]'>PREGUNTAS PRECUENTES</a>
                        <a href="#" className='my-3 hover:text-[#89745C]'>CONTACTO</a>
                        <button className='uppercase mt-10 px-5 py-2 w-[190px] text-sm font-work rounded border-2 bg-transparent hover:bg-white hover:text-black tablet:text-2xl desktop:text-2xl desktop:w-[200px]'>Reserva</button>
                    </div>

                </nav>

                <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full'>
                    <img className='w-[300px] tablet:w-[450px] desktop:w-[550px]' src={logoNameWhite} alt="Logo Be'Tania"/>
                </div>


        </header>
        </>
    )
}

export default Header