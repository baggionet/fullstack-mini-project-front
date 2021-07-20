import {lazy} from "react";

const Home = lazy(() => import("../views/home"));
const Users = lazy(() => import("../views/users"));
const AddUser = lazy(() => import("../views/addUser"));
const PutUser = lazy(() => import("../views/putUser"));




export const routes = [
    {
        path: '/admin/home',
        name:'Inicio',
        exact: true,
        component: Home
    },
    {
        path: '/admin/users',
        name:'Usuarios',
        exact: true,
        component: Users
    },
    {
        path: '/admin/adduser',
        name:'Agregar Usuario',
        exact: true,
        component: AddUser
    },
    {
        path: '/admin/update',
        name:'Actualizar Usuario',
        exact: true,
        component: PutUser
    }
];