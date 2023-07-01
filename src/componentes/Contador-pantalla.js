import React from 'react';
import '../hojas-de-estilo/Contador.css'

function Contador({numero}){
    return(
        <div className='contador'>
            {numero}
        </div>
    )
}

export default Contador;