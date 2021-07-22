import React, { useEffect, Fragment, useState } from 'react';
import './css/users.css'
import { routes } from '../utils/routes';
import axios  from 'axios';
//Uso de iconos en tabla
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import ListIcon from '@material-ui/icons/List';
import { Redirect } from 'react-router-dom';



function Users({history}) {
    //Se realiza solicito a la api para traer todos los usuarios
    const baseUrl = 'http://localhost:4000/api/users';
    const [ data, setData ] = useState([]);

    const fetcData = async () =>{
        const result = await axios.get(baseUrl);
        //console.log(result)
        setData(result.data);
    }

    useEffect(() => {
        fetcData();
    }, []);

    //Funcion que borrara al usuario siempre y cuando este logeado
    const deleteUser = async (id) => {
        if(localStorage.UserId != id){
            alert("No estas autorizado para esta accion")
        }else{
            
            await axios.delete('http://localhost:4000/api/users/' + id)
            console.log(id)
            fetcData();
        }
    }

    //funcion que actualiza al usuario siempre i cuando este logeado
    const updateUser = (id) => {
        if(localStorage.UserId != id){
            alert("No estas autorizado para esta accion")
        }else{
            history.push({
                pathname: `${routes[3].path}`, 
                state: {detail: id}
            })
            
        }
    }

    //Funcion que muestra los detalles de cualquier usuario, no necesita estar logeado
    const detailUser = (id) =>{
        console.log(id)
        history.push({
            pathname: `${routes[4].path}`, 
            state: {detail: id}
        })
    }
    
    if(localStorage.length === 0){
        return(
            <Redirect to="/"/>
        )
    }else{
    return(
        <Fragment>
        <div className="users">
            <div className="users-header">
                <p>Usuarios</p>
            </div>
            <div className="agregar-usuario">
                <button onClick={()=> history.push(routes[2].path)}> {routes[2].name}</button>
            </div>
            <div>
                <table >
                <thead>
                    <tr>
                        <th>ID</th>     
                        <th>NOMBRE</th> 
                        <th>EMAIL</th>
                        <th>FECHA REGISTRO</th>  
                        <th>OPCIONES</th>        
                    </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, idx ) =>{
                            
                            var created = item.createdAt.slice(0,10);
                                return(
                                    <tr
                                        key={idx}
                                    >
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{created}</td>
                                        <td>
                                            <DeleteIcon 
                                                className="item-icons"
                                                onClick={() => deleteUser(item.id)}
                                            />
                                            <UpdateIcon 
                                                className="item-icons"
                                                onClick={() => updateUser(item.id)}    
                                            />
                                            <ListIcon
                                                className="item-icons"
                                                onClick={() => detailUser(item.id)}
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </Fragment>
    )
}
}
export default Users;