import React, { Fragment } from "react";
import './css/addUser.css';

function AddUser() {
    return(
        <Fragment>
            <div className="add-user">
                <div className="add-user-header">
                    <h2>Agregar usuario nuevo</h2>
                </div>
                <div className="add-user-form">
                    <form>
                        <div className="add-user-grup">
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
                    </form>
                </div>
            </div>
        </Fragment>
    );

}

export default AddUser;