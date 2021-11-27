import React from "react";
import {Routes, Route} from 'react-router-dom';
import Unavailable from "./pages/unavailable/Unavailable";
import Home from "./pages/home/Home";
import CitizenDetail from "./pages/citizen_details/CitizenDetails";
import CitizenForm from "./pages/citizen_form/CitizenForm";


const AppRoutes = () =>  (
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ctzn_detail" exact element={<CitizenDetail />} />
        <Route path="/ctzn_form" exact element={<CitizenForm />} />
        <Route path="*" exact element={<Unavailable />} />
    </Routes>
);

export default AppRoutes;