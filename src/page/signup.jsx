import React, { Fragment, useState } from "react";
import axios from "axios";
import './styles.css';

function Signup({history}) {
    // se crean variables para asignar los valores que el usuario ingrese
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    console.log(name, email, password)
    // funcion que usara la api para crear el usuario nuevo
    const onSubmit = async e =>{
        try{
            e.preventDefault();
            console.log(name, email, password)
            const response = await axios({
                url: 'http://localhost:4000/api/users', 
                method: 'POST',
                data: {name, email, password}
                })
                alert("Se creo tu cuenta, Inicia sesion con tu email y password")
                console.log(response)
                history.push("/admin/users", {response});
        }catch (error){
            alert(error.response.data)
        }
    }


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
                            <input 
                                type="text"
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="signup-grup">
                            <label>Ingresa tu correo</label>
                            <input 
                                type="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="signup-grup">
                            <label>Crea una contraseña</label>
                            <input 
                                type="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="signup-grup">
                            <button onClick={onSubmit}>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );

}

export default Signup;