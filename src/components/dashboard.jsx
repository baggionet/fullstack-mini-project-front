import React, { Fragment } from 'react';
import Header from './header';
import Sidebar from "./sidebar";
import '../App.css';
import { routes } from '../utils/routes';
import { Route, Switch } from 'react-router-dom';
export const DashboardContext = React.createContext();

function Dashboard({history}) {
    const[openSidebar, setOpenSidebar] = React.useState(true);
    return(
        <Fragment>
            <div className="App">
                <DashboardContext.Provider value={{openSidebar, setOpenSidebar, routes, history}}>
                    <Header/>
                    <div className='content'>
                        <Sidebar/>
                        <div className='main'>
                        
                        <React.Suspense fallback={"Cargando...."}>
                            <Switch>
                                {
                                    routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={(prop) => <route.component {...prop}  />}
                                            />
                                        ): null;
                                    })
                                }
                            </Switch>
                            </React.Suspense>
                        </div>
                    </div>
                </DashboardContext.Provider>
            </div>
        </Fragment>
    );
}
export default Dashboard;