import React from "react";
import AppLayout from "../../layouts/default";
import useInputState from "../../hooks/useInputState";
import useToggleState from "../../hooks/useToggleState";
import {useNavigate} from "react-router-dom";
import Stack from "@mui/material/Stack";
import SectionTitle from "../../components/page_parts/SectionTitle";
import Box from "@mui/material/Box";
import SelectInputField from "../../components/form_parts/SelectInputField";
import TextInputField from "../../components/form_parts/TextInputField";
import CheckInputField from "../../components/form_parts/CheckInputField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import CitizenPermanentAddress from "../../components/form_parts/citizen_form_permanent/CitizenPermanentAddress";
import CitizenEmergencyContact from "../../components/form_parts/citizen_form_permanent/CitizenEmergencyContact";
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

function getStyles(name, personName, theme) {

    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const CitizenFormPermanent = () => {
    const activeCitizen = useSelector((state) => state.citizen);
    const cancelRecordCreation = () => {
        navigate("/ctzn_detail");
    }
    const navigate = useNavigate();
    const goToPreviousForm = () => {
        navigate("/ctzn_form_present")
    }
    const goToNextForm = () => {
        navigate("/ctzn_form_credentials")
    }

    return (
        <AppLayout pageTitle="Citizen Form Page [Permanent Address]"
                   pageTitleBangla="নাগরিক তথ্য সংগ্রহ [স্থায়ী ঠিকানা]"
                   pageContent="Citizen Information Collection Form">
            <Grid container rowSpacing={3} className="page-content">
                <CitizenPermanentAddress activeCitizen={activeCitizen} />

                <CitizenEmergencyContact activeCitizen={activeCitizen} />

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

export default CitizenFormPermanent;