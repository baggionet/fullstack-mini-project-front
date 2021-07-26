import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import './css/putUser.css';
import { Redirect }  from 'react-router-dom'

function PutUser({ history }) {
    // Recuperando el id del usuario seleccionado por medio de history
    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
   //setId(history.location.state.detail)
   const id = history.location.state.detail;
    //Adquiriendo los datos del usuario seleccionado
    const baseUrl = 'http://localhost:3000/api/users/' + id;
    const [ data, setData ] = useState([]);

    const fetcData = async () =>{
        try {
            const result = await axios.get(baseUrl);
            
            setData(result.data);
        } catch (error) {
            if(error){
                console.log(error.response.data)
                alert(error.response.data)
            }
        } 
    }  
    
    useEffect(() => {
        fetcData();
    }, []);


    //funciones para obtener los datos para actializar el usaurio y enviarlos a la api
    

    console.log(name, email)

    const logOut = () => {
        localStorage.clear()
        window.location.href="/"
    }

    const onSubmit = async e =>{
        try{
            console.log(name, email)
            e.preventDefault();
            const response = await axios({
                url: 'http://localhost:3000/api/users/' + id, 
                method: 'PUT',
                data: {name, email}
                });
                if(localStorage.email === email){
                    console.log(response)
                    history.push("/admin/users");
                }else{
                    alert("Fue cambiado el email, nesecitas iniciar sesion con el nuevo Email")
                    logOut()
                }
        }catch (error){
            if(error){
                console.log(error.response.data)
                alert(error.response.data)
            }
        }
    }

    // Condicionando el acceso el usuario debe de estar logeado para acceder a la vista
    //console.log(localStorage)
    if(localStorage.length == 0){
        return(
            <Redirect to="/"/>
        )
    }else{
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
                            <label>{data.name}</label>
                            <input 
                                
                                type="text" 
                                name="name" 
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="put-user-grup">
                            <label>{data.email}</label>
                            <input
                                
                                type="email" 
                                name="email" 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="put-user-grup">
                            <button onClick={onSubmit}>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
}
export default PutUser;

