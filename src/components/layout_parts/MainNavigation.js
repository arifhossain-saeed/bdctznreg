import React from "react";
import { Link } from 'react-router-dom';

const MainNavigation = () =>  (
    <div className="main-navigation">
        <Link to="/">Home</Link>
        <Link to="/ctzn_detail">Citizen Details</Link>
        <Link to="/ctzn_form">Citizen Records</Link>
    </div>
);

export default MainNavigation;