import React, {useEffect, useState} from "react";
import AppLayout from "../../layouts/default";
import { Button, Stack, Box, Card, CardMedia } from "@mui/material";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import SectionTitle from "../../components/page_parts/SectionTitle";

const CitizenFormPhoto = () => {
    const [postData, setPostData] = useState({image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"});
    const savePreviousRentals = () => {

    }

    const cancelRecordCreation = () => {

    }
    const navigate = useNavigate();
    const goToPreviousForm = () => {
        navigate("/ctzn_form_helps")
    }
    const goToNextForm = () => {
        navigate("/ctzn_detail")
    }

    useEffect(()=> {
        console.log(postData);
    }, [postData])

    return (
    <AppLayout pageTitle="Citizen Form Page [Photo]"  pageTitleBangla="নাগরিক তথ্য সংগ্রহ [ছবি]" pageContent="Citizen Information Collection Form">
        <Grid container rowSpacing={3} className="page-content">
            <Grid item container rowSpacing={3} sx={{justifyContent: "center"}}>
                <SectionTitle titleText="Citizen Photo" titleTextBng="ছবি" textStyle={{marginTop: "-2.2em"}} />
                <Grid item container md={4} rowSpacing={3}>

                </Grid>
                <Grid item container sx={{justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={savePreviousRentals}>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
                </Grid>

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
                        <Button variant="contained" color="info" onClick={goToNextForm} fullWidth>Finish | &nbsp;<span className="banglaText">শেষ</span></Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </AppLayout>
)};

export default CitizenFormPhoto;