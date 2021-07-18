import {lazy} from "react";
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';

const Home = lazy(() => import("../views/home"));
const Users = lazy(() => import("../views/users"));
const AddUser = lazy(() => import("../views/addUser"));




export const routes = [
    {
        path: '/admin/home',
        name:'Inicio',
        exact: true,
        component: Home,
        icon: HomeIcon
    },
    {
        path: '/admin/users',
        name:'Usuarios',
        exact: true,
        component: Users,
        icon: PeopleIcon
    },
    {
        path: '/admin/adduser',
        name:'Agregar Usuario',
        exact: true,
        component: AddUser,
        icon: PeopleIcon
    }
];