import React, { use } from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import Loader from '../../Loader/Loader';
import ReactToaster from '../../ReactToaster';
import Footer from '../Footer/Footer';
import { Tooltip } from 'react-tooltip'

const Root = () => {
    const {loading} = use(AuthContext)
    if(loading){
        return <Loader></Loader>
    }

    return (
        <div>
            <NavBar/>
            <Tooltip id="my-tooltip" />
            <ReactToaster></ReactToaster>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;