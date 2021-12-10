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
import CitizenRecords from "./pages/citizen_records/CitizenRecords";
import CitizenRecordsAdmin from "./pages/citizen_records_admin/CitizenRecordsAdmin";
import UserList from "./pages/user_management/UserList";
import UserDetail from "./pages/user_management/UserDetail";
import UserCreateUpdate from "./pages/user_management/UserCreateUpdate";


const AppRoutes = () => (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/ctzn_detail" exact element={<CitizenDetail/>}/>
        <Route path="/ctzn_form_present" exact element={<CitizenFormPresent/>}/>
        <Route path="/ctzn_form_permanent" exact element={<CitizenFormPermanent/>}/>
        <Route path="/ctzn_form_credentials" exact element={<CitizenFormCredentials/>}/>
        <Route path="/ctzn_form_members" exact element={<CitizenFormMembers/>}/>
        <Route path="/ctzn_form_helps" exact element={<CitizenFormHelps/>}/>
        <Route path="/ctzn_records_owner" exact element={<CitizenRecords/>}/>
        <Route path="/ctzn_records_admin" exact element={<CitizenRecordsAdmin/>}/>
        <Route path="/user_create_update_admin" exact element={<UserCreateUpdate/>}/>
        <Route path="/user_list_admin" exact element={<UserList/>}/>
        <Route path="/user_detail_admin" exact element={<UserDetail/>}/>
        <Route path="*" exact element={<Unavailable/>}/>
    </Routes>
);

export default AppRoutes;