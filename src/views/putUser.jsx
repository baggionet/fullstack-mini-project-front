import React, { Fragment } from "react";
import './css/putUser.css';

function PutUser({ history }) {
    console.log(history)
    return(
        <Fragment>
            <div className="put-user">
                <div className="put-user-header">
                    <p>Actualizar usuario</p>
                </div>
                <div className="put-user-form">
                    <form className="">
                        <div className="put-user-form-header">
                            <label>Formulario</label>
                        </div>
                        <div className="put-user-grup">
                            <label>Nombre</label>
                            <input type="text"/>
                        </div>
                        <div className="put-user-grup">
                            <label>Contraseña</label>
                            <input type="password"/>
                        </div>
                        <div className="put-user-grup">
                            <button>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default PutUser;

