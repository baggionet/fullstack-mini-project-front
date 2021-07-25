import React, { Fragment, useState } from "react";
import './css/addUser.css';
import axios from "axios";
import { Redirect } from 'react-router-dom';
function AddUser({ history }) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const onSubmit = async e =>{
        try{
            e.preventDefault();
            const response = await axios({
                url: 'http://ec2-54-208-27-215.compute-1.amazonaws.com:3000/api/users', 
                method: 'POST',
                data: {name, email, password}
                })
                
                console.log(response)
                history.push("/admin/users", {response});
        }catch (err){
            console.log(err)
        }
    }

    if(localStorage.length === 0){
        return(
            <Redirect to="/"/>
        )
    }else{
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
                                <input 
                                    type="text" 
                                    name="name" 
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="add-user-grup">
                                <label>Ingresa tu correo</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="add-user-grup">
                                <label>Crea una contraseña</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="add-user-grup">
                                <button onClick={onSubmit}>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AddUser;