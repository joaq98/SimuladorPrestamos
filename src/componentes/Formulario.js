import React, {Fragment} from 'react';
import { Box, Slider } from '@mui/material';

const Formulario = (props) => {

    const {cantidad,guardarCantidad, plazo, guardarPlazo,
         guardarTotal, guardarCargando, interes, guardarInteres, guardarError } = props; 

    const calcularPrestamo = e => {
        e.preventDefault();
        //validar
        if(cantidad === 0 ) {
            guardarError(true);
            return;
        }
    guardarError(false);
    guardarCargando(true);
    setTimeout(() => {
        const taza = interes/100;
        guardarTotal(cantidad + cantidad*taza*plazo);
        guardarCargando(false);
    }, 1000);

    }

    return (
        <Fragment>
            <form onSubmit={calcularPrestamo}>
            <div className="row">
                <div>
                    <label>¿Cuánto es el monto que querés solicitar?</label>
                    <input 
                        min={0}
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000"
                        onChange={e => guardarCantidad(parseInt(e.target.value))}
                    />
                </div>
                <div>
                    <label>¿Interés del préstamo?</label>
                    <input 
                        min={1}
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 5%"
                        onChange={e => guardarInteres(parseInt(e.target.value))}
                    />
                </div>
                <div>
                    <label>Seleccioná el plazo del préstamo en meses</label>

                    <Box sx={{
                            opacity: 10,
                            }}>
                        <Slider
                            className='u-full-width'
                            onChange={e => guardarPlazo(parseInt(e.target.value))}
                            color="primary"
                            aria-label="Meses"
                            defaultValue={3}
                            valueLabelDisplay="on"
                            valueLabelFormat={value => (value) + " Meses"}
                            step={1}
                            
                            min={3}
                            max={24}
                        />
                    </Box>                  
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calcular" 
                        className="button-primary u-full-width" 
                    />
                </div>
            </div>
            </form>            

        </Fragment>
    );
}
 
export default Formulario;