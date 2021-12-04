import React, {useEffect, useState} from "react";
import AppLayout from "../../layouts/default";
import FileBase from "react-file-base64";
import { Button, Stack, Box, Card, CardMedia } from "@mui/material";
import {useNavigate} from "react-router-dom";

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
        <Box className="page-content">
            <Stack direction="column" spacing={3}>
                <Box sx={{maxWidth: "25%", display: "flex", flexDirection: "column", alignSelf:"center", justifyContent: "center", alignItems: "center"}}>
                    <img src={postData.image} style={{width: "180px", height: "200px", maxWidth:"100%", padding:"5px", borderRadius: "10px", backgroundColor: "#DDDDDD", texAlign: "center"}} alt="User Image"/>
                    <br/>
                    <FileBase type="file" multiple={ false } onDone={({base64}) => setPostData({...postData, image: base64})} />
                </Box>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={savePreviousRentals}>Save</Button>
                </Box>
                <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", marginTop: "30px", borderTop: "1px solid black", paddingTop: "30px"}}>
                    <Box sx={{width: "31%", display: "flex"}}>
                        <Button variant="contained" color="info" onClick={goToPreviousForm}>Previous</Button>
                    </Box>
                    <Box sx={{width: "31%", display: "flex", justifyContent: "center"}}>
                        <Button variant="contained" color="error" onClick={cancelRecordCreation} sx={{ml: 2}}>Cancel</Button>
                    </Box>
                    <Box sx={{width: "31%", display: "flex", justifyContent: "right"}}>
                        <Button variant="contained" color="info" onClick={goToNextForm}>Finish</Button>
                    </Box>
                </Box>
            </Stack>
        </Box>
    </AppLayout>
)};

export default CitizenFormPhoto;