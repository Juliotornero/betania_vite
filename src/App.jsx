import './App.css'
import Header from './components/Header'
import Main from './components/Main';
import { useState, useEffect } from 'react'

function App() {

  const [pantallaTablet, setPantallaTablet] = useState(false);
  const [pantallaDesktop, setPantallaDesktop] = useState(false);
  

    // const handleTablet = ()=>{
    //     if(window.innerWidth >= 768){
    //         setpantallaTablet(true);
    //     }else{
    //         setpantallaTablet(false);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', handleTablet);
    
    //     return () => {
    //         window.removeEventListener('resize', handleTablet);
    //     };
    //   }, []);

    // const handleDesktop = ()=>{
    //     if(window.innerWidth >= 1024){
    //         setpantallaDesktop(true);
    //     }else{
    //         setpantallaDesktop(false);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', handleDesktop);
    
    //     return () => {
    //         window.removeEventListener('resize', handleDesktop);
    //     };
    //   }, []);

    const handleResize = () => {
      const isTablet = window.innerWidth >= 768;
      const isDesktop = window.innerWidth >= 1024;
      setPantallaTablet(isTablet);
      setPantallaDesktop(isDesktop);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      // Llama a la función de detección de tamaño inicialmente
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 

  return (
    <>
      <Header
        pantallaTablet = {pantallaTablet}
        pantallaDesktop = {pantallaDesktop}
      />

      <Main
        pantallaTablet = {pantallaTablet}
        pantallaDesktop = {pantallaDesktop}
      />

      
        
    </>
  )
}

export default App
