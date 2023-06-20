import '../styleSheets/Logo.css';
import Logo1 from '../imgs/freeCodeCamp-logo.png';

function Logo() {
  return (
    <div className='logo-contenedor'>
      <img
        src={Logo1}
        className='logo'
        alt='Logo' />
    </div>
  );
}

export default Logo;