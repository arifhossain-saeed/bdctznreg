import React, {useEffect} from "react";
import AppLayout from "../../layouts/default";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import CitizenBio from "../../components/form_parts/citizen_form_present/CitizenBio";
import CitizenPresentAddress from "../../components/form_parts/citizen_form_present/CitizenPresentAddress";
import CitizenPreviousRental from "../../components/form_parts/citizen_form_present/CitizenPreviousRental";
import {useDispatch, useSelector} from "react-redux";
import {getCitizen} from "../../store/actions/citizen";


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

const CitizenFormPresentAlt = () => {
    const activeCitizen = useSelector((state) => state.citizen);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCitizen({nid: activeCitizen.nid, phone: activeCitizen.phone}));
    },[dispatch]);

    const cancelRecordCreation = () => {
        navigate("/ctzn_detail");
    }
    const navigate = useNavigate();
    const goToNextForm = () => {
        navigate("/ctzn_form_permanent")
    }

    return (
    <AppLayout pageTitle="Citizen Form Page [Present Address]"  pageTitleBangla="নাগরিক তথ্য সংগ্রহ [বর্তমান ঠিকানা]" pageContent="Citizen Information Collection Form">
        <Grid container rowSpacing={3} className="page-content">

            <CitizenBio activeCitizen={activeCitizen} />

            <CitizenPresentAddress activeCitizen={activeCitizen} />

            <CitizenPreviousRental activeCitizen={activeCitizen} />

            <Grid item container rowSpacing={3}>
                <Grid item container justify="space-between" spacing={6}>
                    <Grid item md={4} sx={{justifyContent: "left"}}>
                        <Button variant="contained" color="error" onClick={cancelRecordCreation} fullWidth>Cancel | &nbsp;<span className="banglaText">এখন নয়</span></Button>
                    </Grid>

                    <Grid item sm={4}>
                    </Grid>

                    <Grid item md={4} sx={{justifyContent: "right"}}>
                        <Button variant="contained" color="info" onClick={goToNextForm} fullWidth>Next | &nbsp;<span className="banglaText">পরবর্তী</span></Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </AppLayout>
    )
};

export default CitizenFormPresentAlt;