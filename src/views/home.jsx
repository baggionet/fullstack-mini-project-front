import React, { Fragment } from "react";
import './css/home.css';
import { Redirect } from 'react-router-dom';

function Home () {
    if(localStorage.length === 0){
        return(
            <Redirect to="/"/>
        )
    }else{
        return(
            <Fragment>
                <div className="home">
                    <h1>Bienvenidos a la aplicacion</h1>
                </div>
            </Fragment>
        );
    }
}
export default Home;