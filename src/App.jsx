import './App.css'
import Header from './components/Header'
import Main from './components/Main';
import { useState, useEffect } from 'react'

function App() {

  const [pantallaTablet, setpantallaTablet] = useState(false);
  const [pantallaDesktop, setpantallaDesktop] = useState(false);
  

    const handleTablet = ()=>{
        if(window.innerWidth >= 768){
            setpantallaTablet(true);
        }else{
            setpantallaTablet(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleTablet);
    
        return () => {
            window.removeEventListener('resize', handleTablet);
        };
      }, []);

    const handleDesktop = ()=>{
        if(window.innerWidth >= 1024){
            setpantallaDesktop(true);
        }else{
            setpantallaDesktop(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleDesktop);
    
        return () => {
            window.removeEventListener('resize', handleDesktop);
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
