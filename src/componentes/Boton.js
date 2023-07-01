import React from 'react';
import '../hojas-de-estilo/Boton.css'

function Boton({ texto, esBotonClick, manejarClick }){
    return(
        <button 
        className={ esBotonClick ? 'boton-click' : 'boton-reiniciar' }
        onClick={manejarClick}>
            {texto}
        </button>
     //expresion condicional, si es boton de click verdadero asignar X clase, sino, si es falso asignar Y clase.
    )
}

export default Boton;