import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from "@material-ui/icons/ArrowBack";

import Logo from '../../../assets/img/logo.png';
import "./DashboardLayout.scss";

const Navbar = ({ title = "SWR"}) => {
    let { pathname } = window.location;

    return (
        <AppBar position="static" className="Navbar">
            <Toolbar className="wrapper" style={{maxWidth: "100%", padding: "0"}}>
                {pathname != "/" ? <IconButton className="Navbar__up" component={Link} to={pathname.substring(0, pathname.lastIndexOf("/"))}><BackIcon /></IconButton> : null}
                <div className="Navbar__logo"><img src={Logo} /></div>
                <Typography variant="h5">{title}</Typography>
                <Button component={Link} to="/contacts"></Button>
            </Toolbar>
        </AppBar>
    )
}

const DashboardLayout = ({name, ...props}) => {
    return (
        <div className="Dashboard-layout">
            <Navbar title={name}/>
            <div className="Dashboard-layout__content"><Route {...props}/></div>
        </div>
    )
}

export default DashboardLayout
