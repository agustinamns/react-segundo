import logo from './imagenes/logo.png';
import './App.css';
import Contador from './componentes/Contador-pantalla';
import Boton from './componentes/Boton.js';
import { useState } from 'react';

function App() {

const [numeroClick, setNumeroClick] = useState(0);

const contador=()=>{
   setNumeroClick(numeroClick+1);
}

const reiniciar=()=>{
  setNumeroClick(0);
}



  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' src={logo}/>
      </div>
      <div className="contador-contenedor">
        <Contador
        numero={numeroClick}
        />
        <Boton
        texto="Click"
        esBotonClick={true}
        manejarClick={contador}
        />

        <Boton
        texto="Reiniciar"
        esBotonClick={false}
        manejarClick={reiniciar}
        />

      </div>
  
    </div>
  );
}

export default App;
