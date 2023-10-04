import SectionDiscover from './SectionDiscover'
import SectionRoomService from './SectionRoomService'
import Map from './Map'; 

const Main = ({pantallaTablet, pantallaDesktop}) => {
  return (
    
    <main>

      <SectionRoomService
        pantallaDesktop = {pantallaDesktop}
      />
        
      <SectionDiscover
        pantallaTablet = {pantallaTablet}
      />

      <Map/>
        
    </main>

  
  )
}

export default Main