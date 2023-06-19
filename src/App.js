import './App.css';
import freeCodeCampLogo from './imgs/freeCodeCamp-logo.png';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
    </div>
  );
}

export default App;