import React from "react";
import {Routes, Route} from 'react-router-dom';
import Unavailable from "./pages/unavailable/Unavailable";
import Home from "./pages/home/Home";
import CitizenDetail from "./pages/citizen_details/CitizenDetails";
import CitizenFormPresent from "./pages/citizen_form/CitizenFormPresent";
import CitizenFormPermanent from "./pages/citizen_form/CitizenFormPermanent";
import CitizenFormCredentials from "./pages/citizen_form/CitizenFormCredentials";
import CitizenFormMembers from "./pages/citizen_form/CitizenFormMembers";
import CitizenFormHelps from "./pages/citizen_form/CitizenFormHelps";
import CitizenFormPhoto from "./pages/citizen_form/CitizenFormPhoto";


const AppRoutes = () =>  (
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/ctzn_detail" exact element={<CitizenDetail />} />
        <Route path="/ctzn_form_present" exact element={<CitizenFormPresent />} />
        <Route path="/ctzn_form_permanent" exact element={<CitizenFormPermanent />} />
        <Route path="/ctzn_form_credentials" exact element={<CitizenFormCredentials />} />
        <Route path="/ctzn_form_members" exact element={<CitizenFormMembers />} />
        <Route path="/ctzn_form_helps" exact element={<CitizenFormHelps />} />
        <Route path="/ctzn_form_photo" exact element={<CitizenFormPhoto />} />
        <Route path="*" exact element={<Unavailable />} />
    </Routes>
);

export default AppRoutes;