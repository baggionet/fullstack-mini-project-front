import React, { Fragment, useState, useContext } from "react";
import axios from "axios";
import './styles.css';
import { authContext }  from '../utils/authContext';


function Login({history}) {
    const { setAuthToken } = useContext(authContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const onSubmit = async e =>{
        try {
            e.preventDefault()
            const data  = await axios({
                url: 'http://ec2-54-208-27-215.compute-1.amazonaws.com:3000/api/auth/users',
                method: 'POST',
                data: {
                    email, password
                }
        });
            setAuthToken(data);
            history.push("/admin/home");
        } catch (error) {
            alert(error.response.data)
        }
    }
   
    return(
        <Fragment>
            <div className="login">
                <form >
                    <h2>Inicio de sesion</h2>
                    <div className="sesion-grup">
                        <label>Ingresa tu correo</label>
                        <input 
                            type="email" 
                            name="email" 
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="sesion-grup">
                        <label>Ingresa tu contraseña</label>
                        <input 
                            type="password" 
                            name="password" 
                            onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="sesion-grup">
                        <button className="boton"  onClick={onSubmit}>Iniciar sesion</button>
                        <p onClick={()=> history.push("/signup")} className="crear-cuenta">¿No tienes cuenta? Registrate</p>
                    </div>
                </form>
                
            </div>
        </Fragment>
    );
}

export default Login;