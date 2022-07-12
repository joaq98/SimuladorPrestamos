import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensajes';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';

function App() {


  // Definir el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('3');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);
  const [interes, guardarInteres] = useState('1');
  const [error, guardarError] = useState(false);

  let componente;
  if(cargando) {
    componente = <Spinner/>
  } else if (total === 0 || error) {
    componente = <Mensaje error={error}/>
  } else {
      componente  = <Resultado
        total={total}
        plazo={plazo}
        cantidad={cantidad}
        /> 
  }

  return (
  
    <Fragment>
      <Header titulo="Simulador de Prestamos"/>
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
          interes={interes}
          guardarInteres={guardarInteres}
          guardarError={guardarError}
        />
        <div className='mensajes'>
         {componente}
        </div>
      </div>    
    </Fragment>
  );
}

export default App;
