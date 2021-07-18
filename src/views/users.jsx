import React, { Fragment } from 'react';
import './css/users.css'
import { routes } from '../utils/routes';

function Users({history}) {
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    </Fragment>
    )
}
export default Users;