import React, { Fragment } from "react";
import './styles.css';


function Login({history}) {
   /* state= {
        form:{
            email: '',
            password:''
        }
    }*/
    //manejador para prevenir el evento de submit
    const manSubmit = e => {e.preventDefault(); }
    //manejador para obtener el valor de los input
    const manChange =  e =>{
    }
    
   
    return(
        <Fragment>
            <div className="login">
                <form onSubmit={manSubmit}>
                    <h2>Inicio de sesion</h2>
                    <div className="sesion-grup">
                        <label>Ingresa tu correo</label>
                        <input type="email" name="email" onChange={manChange}/>
                    </div>
                    <div className="sesion-grup">
                        <label>Ingresa tu contraseña</label>
                        <input type="password" name="password" onChange={manChange}/>
                    </div>
                    <div className="sesion-grup">
                        <input type="submit" className="boton" value="Iniciar sesion"/>
                        <p onClick={()=> history.push("/signup")} className="crear-cuenta">¿No tienes cuenta? Registrate</p>
                    </div>
                </form>
                
            </div>
        </Fragment>
    );
}

export default Login;