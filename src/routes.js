import React from "react";
import {Routes, Route} from 'react-router-dom';
import Unavailable from "./pages/unavailable/Unavailable";
import Home from "./pages/home/Home";


const AppRoutes = () =>  (
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" exact element={<Unavailable />} />
    </Routes>
);

export default AppRoutes;