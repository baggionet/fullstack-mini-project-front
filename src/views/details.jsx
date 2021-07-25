import React, {Fragment, useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";
import './css/details.css';
import ImgUser from '../utils/userImg.jpeg';
//importando iconos
import PersonIcon from '@material-ui/icons/Person';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import UpdateIcon from '@material-ui/icons/Update';
import CreateIcon from '@material-ui/icons/Create';



function Details({history}) {
    const id=history.location.state.detail;
    console.log(id)
    var created = null;
    var lastUpdate = null;
    const baseUrl = 'http://172-31-52-160:3000/api/users/' + id;
    const [ data, setData ] = useState([]);

    const detailData = async () =>{
        const result = await axios.get(baseUrl);
        setData(result.data);
    }

    useEffect(() => {
        detailData();
    }, []);
    
    console.log(data)
    
    if(data.createdAt === undefined){
        console.log("dato vacio")
    }else{
        created = data.createdAt.slice(0, 10)
        lastUpdate = data.updatedAt.slice(0, 10)
    }

    if(localStorage.length === 0){
        return(
            <Redirect to="/"/>
        )
    }else{
    return(
        <Fragment>
            <div className="details">
                <div className="details-header">
                    <p>Perfil del usuario</p>
                </div>
                <div className="details-body">
                    <div className="details-body-one">
                        <img src={ImgUser} className="details-img-user" alt=""/>
                    </div>
                    <div className="details-body-two" >
                    
                        <ul>
                            <li><PersonIcon className="icons"/><span>{data.name}</span></li>
                            <li><AlternateEmailIcon className="icons"/><span>{data.email}</span></li>
                            <li><CreateIcon className="icons"/><span>{ created }</span></li>
                            <li><UpdateIcon className="icons"/><span>{ lastUpdate }</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
}

export default Details;