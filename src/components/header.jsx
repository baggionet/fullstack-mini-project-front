import React, { Fragment } from 'react';
import './css/header.css';


function Header({history}){
    return(
        <Fragment>
            <div className='header'>
                <div className='logo'>Logo</div>
                <div>
                    <ul className='header-item'>
                        <li className="header-item-sub">Juan</li>
                        <li onClick={() => history.push("/")} className="header-item-sub">Logout</li>
                    </ul>
                </div>
            </div>
        </Fragment>
        
    );
}

export default Header;