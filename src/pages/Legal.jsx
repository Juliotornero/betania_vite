import { useEffect } from 'react';

const Legal = () => {
  useEffect(() => {
    // Cuando el componente se monta (cuando se navega a esta página), desplázate al inicio de la página.
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>Legal</div>
  )
}

export default Legal