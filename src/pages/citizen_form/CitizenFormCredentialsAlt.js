import React from "react";
import AppLayout from "../../layouts/default";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import CitizenHighestEducation from "../../components/form_parts/citizen_form_credentials/CitizenHighestEducation";
import CitizenOccupation from "../../components/form_parts/citizen_form_credentials/CitizenOccupation";
import {useSelector} from "react-redux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const CitizenFormCredentials = () => {

    const activeCitizen = useSelector((state) => state.citizen)

    const cancelRecordCreation = () => {
        navigate("/ctzn_detail");
    }
    const navigate = useNavigate();
    const goToPreviousForm = () => {
        navigate("/ctzn_form_permanent")
    }
    const goToNextForm = () => {
        navigate("/ctzn_form_members")
    }

    return(
    <AppLayout pageTitle="Citizen Form Page [Education Occupation]" pageTitleBangla="নাগরিক তথ্য সংগ্রহ [শিক্ষা পেশা]">
        <Grid container rowSpacing={3} className="page-content">
            <CitizenHighestEducation activeCitizen={activeCitizen} />


            <CitizenOccupation activeCitizen={activeCitizen} />


            <Grid item container sx={{margin: "30px 0"}}>
                <Box sx={{border: "1px solid black", width: "100%"}}></Box>
            </Grid>

            <Grid item container justify="space-between" spacing={3}>
                <Grid item md={4}>
                    <Button variant="contained" color="info" onClick={goToPreviousForm} fullWidth>Previous | &nbsp;<span className="banglaText">আগের পাতা</span></Button>
                </Grid>
                <Grid item md={4}>
                    <Button variant="contained" color="error" onClick={cancelRecordCreation} fullWidth>Cancel | &nbsp;<span className="banglaText">এখন নয়</span></Button>
                </Grid>
                <Grid item md={4}>
                    <Button variant="contained" color="info" onClick={goToNextForm} fullWidth>Next | &nbsp;<span className="banglaText">পরবর্তী</span></Button>
                </Grid>
            </Grid>
        </Grid>
    </AppLayout>
    );
}

export default CitizenFormCredentials;