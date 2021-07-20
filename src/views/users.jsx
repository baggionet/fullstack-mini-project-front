import React, { useEffect, Fragment, useState } from 'react';
import './css/users.css'
import { routes } from '../utils/routes';
import axios  from 'axios';
//Uso de iconos en tabla
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';



function Users({history}) {
    
    const baseUrl = 'http://localhost:4000/api/users';
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const fetcData = async () =>{
            const result = await axios.get(baseUrl);
            console.log(result)
            setData(result.data);
        };
        fetcData();
    }, []);
    
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
                    <tr>
                        <th>ID</th>     
                        <th>NOMBRE</th> 
                        <th>EMAIL</th>
                        <th>FECHA REGISTRO</th>  
                        <th>OPCIONES</th>        
                    </tr>
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
                                            <DeleteIcon className="item-icons"/>
                                            <UpdateIcon 
                                                className="item-icons"
                                                onClick={() => history.push(routes[3].path, `{$item.id}`)}    
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                </table>
            </div>
        </div>
    </Fragment>
    )
}
export default Users;