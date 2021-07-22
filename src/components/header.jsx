import React, { Fragment } from 'react';
import './css/header.css';


function Header({history}){

    var newUser = null;
    newUser = localStorage.UserName.split(" ", 1)
    console.log(newUser)

    const logOut = () => {
        localStorage.clear()
        window.location.href="/"
    }

    return(
        <Fragment>
            <div className='header'>
                <div className='logo'>Logo</div>
                <div>
                    <ul className='header-item'>
                        <li className="header-item-sub">{ newUser}</li>
                        <li className="header-item-sub"> | </li>
                        <li onClick={() => logOut()} className="header-item-sub">Logout</li>
                    </ul>
                </div>
            </div>
        </Fragment>
        
    );
}

export default Header;