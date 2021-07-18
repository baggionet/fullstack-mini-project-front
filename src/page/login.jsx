import React, { Fragment } from "react";
import './styles.css'
import { routes } from '../utils/routes';


function Login({history}) {
    return(
        <Fragment>
            <div className="login">
                <form>
                    <h2>Inicio de sesion</h2>
                    <div className="sesion-grup">
                        <label>Ingresa tu correo</label>
                        <input type="email"/>
                    </div>
                    <div className="sesion-grup">
                        <label>Ingresa tu contraseña</label>
                        <input type="password" />
                    </div>
                    <div className="sesion-grup">
                        <button onClick={()=> history.push("/admin/home")} className="boton" id="boton" type="button">Iniciar sesion</button>
                        <a onClick={()=> history.push(routes[2].path)} className="crear-cuenta">¿No tienes cuenta? Registrate</a>
                    </div>
                </form>
                
            </div>
        </Fragment>
    );
}

export default Login;