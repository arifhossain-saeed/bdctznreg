import React, {useEffect, useState} from "react";
import AppLayout from "../../layouts/default";
import FileBase from "react-file-base64";
import { Button, Stack, Box, Card, CardMedia } from "@mui/material";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";

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
                <Grid item container md={6} sx={{justifyContent: "center", alignItems: "center"}}>
                    <img src={postData.image} style={{width: "180px", height: "200px", padding:"5px", borderRadius: "10px", backgroundColor: "#DDDDDD", texAlign: "center", margin: "0 auto"}} alt="User Image"/>
                    <br/>
                    <FileBase type="file" multiple={ false } onDone={({base64}) => setPostData({...postData, image: base64})} />
                </Grid>
                <Grid item container sx={{justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={savePreviousRentals}>Save</Button>
                </Grid>

                <Grid item container sx={{margin: "30px 0"}}>
                    <Box sx={{border: "1px solid black", width: "100%"}}></Box>
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={4}>
                        <Button variant="contained" color="info" onClick={goToPreviousForm} fullWidth>Previous</Button>
                    </Grid>
                    <Grid item md={4}>
                        <Button variant="contained" color="error" onClick={cancelRecordCreation} fullWidth>Cancel</Button>
                    </Grid>
                    <Grid item md={4}>
                        <Button variant="contained" color="info" onClick={goToNextForm} fullWidth>Next</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </AppLayout>
)};

export default CitizenFormPhoto;