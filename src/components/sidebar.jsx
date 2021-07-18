import React, { Fragment } from 'react';
import './css/sidebar.css';
import { DashboardContext } from './dashboard';



function Sidebar() {
    const {routes, history} = React.useContext(DashboardContext);
    return(
        <Fragment>
            <div className='sidebar'>
                <ul className="sidebar-item">
                    {routes.map((item, idx) => {
                        return(
                            <li className="sidebar-item-sub"
                                key={idx} 
                                onClick={() => history.push(`${item.path}`)}
                                >
                                {(prop) => <item.icon {...prop} />}
                                {item.name}
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </Fragment>
    );
}


export default Sidebar;