import React from 'react';

const Mensaje = ({error}) => {
    if(error) return <p className='error'>Todos los campos son obligatorios</p>
    else return <p>Agrega un monto y plazo para calcular</p>
}
 
export default Mensaje;