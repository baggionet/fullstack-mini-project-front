import React, { Fragment } from "react";
import './css/addUser.css';

function AddUser() {
    return(
        <Fragment>
            <div className="add-user">
                <div className="add-user-header">
                    <p>Usuario nuevo</p>
                </div>
                <div className="add-user-form">
                    <form className="">
                        <div className="add-user-form-header">
                            <label>Formulario</label>
                        </div>
                        <div className="add-user-grup">
                            <label>Ingresa tu nombre</label>
                            <input type="text"/>
                        </div>
                        <div className="add-user-grup">
                            <label>Ingresa tu correo</label>
                            <input type="email"/>
                        </div>
                        <div className="add-user-grup">
                            <label>Crea una contraseña</label>
                            <input type="password"/>
                        </div>
                        <div className="add-user-grup">
                            <button>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );

}

export default AddUser;