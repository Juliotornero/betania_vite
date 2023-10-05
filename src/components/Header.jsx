import imgMenu from '../assets/menu.svg'
import imgMenuWhite from '../assets/menuWhite.svg'
import imgClose from '../assets/close.svg'
import logoWhite from '../assets/logoWhite.svg'
import logoBlack from '../assets/logoBlack.svg'
import logoName from '../assets/logoName.svg'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePantalla } from './PantallaContext';

const Header = () => {

    const { pantallaTablet, pantallaDesktop } = usePantalla();
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


      
    const openMenu = () => {
        console.log('Abriendo')
        setIsMenuOpen(true);
        document.body.classList.add('overflow-hidden');
      };
      
    const closeMenu = () => {
        console.log('Cerrando')
        setIsMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
      };
      
    
    return (
      

        <header className='w-full absolute top-0 left-0'>

                <div className={`z-30 w-full h-[70px] px-4 flex items-center ${scrollDown ? 'fixed bg-white  border border-b-2' : 'bg-transparent'} tablet:h-[90px]`}> 
                     
                    <div className='w-full h-full mx-auto max-w-screen-desktop flex justify-between items-center'>
                        
                        {scrollDown 
                            ? 
                            <>
                                <button onClick={openMenu} className='flex justify-center items-center text-black'>
                                    <img className='w-8 desktop:w-10' src={imgMenu} alt="menuIcon"/>
                                    {pantallaTablet && <span className='ml-2 uppercase text-sm pr-14'>Menu</span>}
                                </button>
                                                                
                                {pantallaTablet && <span><img className='tablet:w-[150px] desktop:w-[200px]' src={logoName} alt="Logo Be'Tania"/></span>}

                                <div className='flex items-center'>

                                    {!pantallaTablet && <button><img className='w-12 mr-2' src={logoBlack} alt="Logo Be'Tania"/></button>}
                                    
                                    <button className={`w-[134px] h-[38px] bg-[#181818] border-2  border-black text-white uppercase text-sm font-work rounded hover:bg-transparent hover:text-black 
                                    tablet:h-[48px] tablet:w-[167px] 
                                    desktop:w-[199px] desktop:h-[58px]`}
                                    >
                                        Reserva
                                    </button>

                                </div>
                                
                            </>
                            : 
                            <>
                                <button onClick={openMenu} className='flex justify-center items-center text-white'>
                                    <img className='w-8 desktop:w-10' src={imgMenuWhite} alt="menuIcon"/>
                                    {pantallaTablet && <span className='ml-2 uppercase text-sm'>Menu</span>}
                                </button>

                                <button className={`w-[134px] h-[38px] uppercase font-work text-sm  rounded bg-white text-black hover:bg-transparent hover:text-white border-2 
                                tablet:h-[48px] tablet:w-[167px] 
                                desktop:w-[199px] desktop:h-[58px] 
                                `}
                                >
                                    Reserva
                                </button>

                            </>       
                        }               
                    
                        
                    </div>
                    
                    <nav className={`w-screen h-screen absolute top-0 left-0 z-50 px-4 py-4 text-white bg-[#181818] ${!isMenuOpen && 'hidden'}`}>

                        <div className='flex flex-row-reverse justify-between'>
                            <button onClick={closeMenu}><img className='w-8 mr-5 mt-5' src={imgClose} alt="closeIcon"/></button>
                        </div>

                        <div className='flex flex-col text-xl mx-auto max-w-screen-desktop tablet:text-2xl desktop:text-4xl'>
                            <span className='mt-20 mb-16 text-center p-2'><img className='w-16 desktop:w-28' src={logoWhite} alt="" /></span>
                            <Link to="/" onClick={closeMenu} className='my-3 hover:text-[#89745C]'>INICIO</Link>
                            <Link to="/habitaciones" onClick={closeMenu} className='my-3 hover:text-[#89745C]'>HABITACIONES</Link>
                            <Link to="/servicios" onClick={closeMenu} className='my-3 hover:text-[#89745C]'>SERVICIOS</Link>
                            <Link to="/pisco" onClick={closeMenu} className='my-3 hover:text-[#89745C]'>ATRACCIONES EN PISCO</Link>
                            <Link to="/preguntas" onClick={closeMenu} className='my-3 hover:text-[#89745C]'>PREGUNTAS PRECUENTES</Link>
                            <Link to="/contacto" onClick={closeMenu} className='my-3 hover:text-[#89745C]'>CONTACTO</Link>
                            <button className='uppercase mt-10 px-5 py-2 w-[190px] text-sm font-work rounded border-2 bg-transparent hover:bg-white hover:text-black tablet:text-2xl desktop:text-2xl desktop:w-[200px]'>Reserva</button>
                        </div>

                    </nav>

                </div>


        </header>
        
    )
}

export default Header