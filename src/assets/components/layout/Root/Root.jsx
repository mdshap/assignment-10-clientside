import React, { use } from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import Loader from '../../Loader/Loader';
import ReactToaster from '../../ReactToaster';

const Root = () => {
    const {loading} = use(AuthContext)
    if(loading){
        return <Loader></Loader>
    }

    return (
        <div>
            <NavBar/>
            <ReactToaster></ReactToaster>
            <Outlet/>
        </div>
    );
};

export default Root;