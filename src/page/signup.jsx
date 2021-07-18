import React, { Fragment } from "react";
import './styles.css';

function Signup({history}) {
    return(
        <Fragment>
            <div className="signup">
                <div className="signup-form">
                    <form className="">
                        <div className="signup-form-header">
                            <label>Sign up</label>
                        </div>
                        <div className="signup-grup">
                            <label>Ingresa tu nombre</label>
                            <input type="text"/>
                        </div>
                        <div className="signup-grup">
                            <label>Ingresa tu correo</label>
                            <input type="email"/>
                        </div>
                        <div className="signup-grup">
                            <label>Crea una contraseña</label>
                            <input type="password"/>
                        </div>
                        <div className="signup-grup">
                            <button onClick={()=> history.push("/admin/home")}>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );

}

export default Signup;