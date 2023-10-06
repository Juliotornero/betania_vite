import logoNameWhite from '../assets/logoNameWhite.svg'
import facebook from '../assets/facebook_logo.svg'
import instagram from '../assets/instagram_logo.svg'
import location from '../assets/location.svg'
import call from '../assets/phone.svg'
import email from '../assets/email.svg'
import whatsapp from '../assets/whatsapp_logo.svg'
const Footer = () => {
  
  return (
    <footer className="bg-[#181818] font-work">
        <div div className="container px-6 py-12 mx-auto">
           
            <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 tablet:gap-y-10 desktop:grid-cols-4">

                 {/* Suscripcion */}
                <div className="tablet:col-span-2">
                    <h1 className="max-w-desktop text-desktop font-semibold tracking-tight  desktop:text-2desktop text-white">Suscribete para recibir ofertas inigualables.</h1>

                    <div className="flex flex-col mx-auto mt-6 space-y-3 tablet:space-y-0 tablet:flex-row">
                        <input id="email" type="text" className="px-4 py-2  bg-white border rounded-tablet  text-gray-300  focus:outline-none focus:ring focus:ring-opacity-20" placeholder="ejemplo@ejemplo.com"/>
                
                        <button className="w-full px-6 py-2.5 text-tablet font-medium tracking-wider text-white transition-colors duration-300 transform tablet:w-auto tablet:mx-4 focus:outline-none bg-gray-800 rounded-desktop hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                            Suscribete
                        </button>
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-white">Contáctenos</p>

                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" className="flex text-gray-300 hover:underline hover:text-blue-500"><img src={location} alt="Logo Ubicacion" className='mr-2'/> Calle Arequipa #192</a>
                        <a href="#" className="flex text-gray-300 hover:underline hover:text-blue-500"><img src={call} alt="Logo Telefono" className='mr-2'/>+51 942916064</a>
                        <a href="#" className="flex text-gray-300 hover:underline hover:text-blue-500"><img src={email} alt="Logo Email" className='mr-2'/>betaniahospedaje@gmail.com</a>
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-white">Soporte</p>

                    <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-gray-300 hover:underline hover:text-blue-500">Preguntas Frecuentes</a>
                            <a href="#" className="text-gray-300 hover:underline hover:text-blue-500">Politicas de Privacidad</a>
                            <a href="#" className="text-gray-300 hover:underline hover:text-blue-500">Politicas de Cookies</a>
                            <a href="#" className="text-gray-300 hover:underline hover:text-blue-500">Reglamento Interno</a>
                            <a href="#" className="text-gray-300 hover:underline hover:text-blue-500">Libro de Reclamaciones</a>

                    </div>
                </div>
            </div>
            
            <hr className="my-6 border-gray-200 tablet:my-8"/>
            
            <div className="flex items-center justify-between">
                {/* Logo Betania */}
                <a href="#">
                    <img className="w-[150px]" src={logoNameWhite} alt="Logo Hospedaje Be' Tania"/>
                </a>
                
                {/* Social Media */}
                <div className="flex -mx-2">   
                    <a href="#" className="mx-2"><img src={facebook} alt="Logo Facebook"/></a>
                    <a href="#" className="mx-2"><img src={instagram} alt="Logo Instagram"/></a>
                    <a href="#" className="mx-2"><img src={whatsapp} alt="Logo Whastapp"/></a> 
                </div>
            </div>
            
        </div>
    </footer>
    
  )
}

export default Footer