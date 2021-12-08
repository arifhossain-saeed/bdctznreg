import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../layouts/default";

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles'
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import useToggleState from "../../hooks/useToggleState";
import TextInputField from "../../components/form_parts/TextInputField";
import Grid from "@mui/material/Grid";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function tabIndex(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
    tabPanelBg: {
        backgroundColor: "#8A8B8B",
        paddingTop: "50px",
        paddingBottom: "60px"
    },
    modalStyle: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 650,
        backgroundColor: "white",
        borderRadius: 15,
        padding: "30px",
        textAlign: "center",
        boxShadow: 24,
        p: 4
    }
})

function Home () {
    const theme = useTheme();
    const classes = useStyles();
    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const [modalState, setModalState] = useState(false);

    const [resendOtp, setResendOtp] = useState(false);

    const [timeCount, setTimeCount] = useState(30);

    const openOtpModal = () => {
        setTimeCount(30);
        setModalState(true);
    }
    const closeOtpModal = () => {
        setTimeCount(0);
        setModalState(false);
    }
    const resetTimer = () => {
        setTimeCount(30);
        setResendOtp(false);
    };

    const showResendOtp = () => setResendOtp(true);

    useEffect(() => {
        if (!timeCount) {showResendOtp(); return}

        const intervalId = setInterval(() => {
            setTimeCount(timeCount - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [modalState, timeCount]);

    let navigate = useNavigate();
    const processOtp = () => {
        setModalState(false);
        setTimeCount(30);
        navigate("/ctzn_detail");
    }

    return(
        <AppLayout pageTitle="Home" pageTitleBangla="হোম" showRightNav={false} showLeftNav={false}>
            <Grid sx={{width: "100%"}}>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Citizen | নাগরিক" {...tabIndex(0)} />
                        <Tab label="Land Owner | সম্পত্তির অধিকারী" {...tabIndex(1)} />
                        <Tab label="Administraiton | প্রশাসন" {...tabIndex(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction} className={classes.tabPanelBg}>
                        <Grid container xs={12} sm={6} sx={{margin: "auto", justifyContent: "center"}} rowSpacing={3}>
                            <Grid item container sx={{justifyContent: "center"}}>
                                <TextInputField fullWidth lblTxt="National ID" lblTxtBng="জাতীয় পরিচয়" id="ctzn_nid" variant="filled" inpStyle={{background: "white", borderRadius: "5px"}} inpFieldStyle={{padding: "13px"}} lblStyle={{paddingLeft: "15px"}}/>
                            </Grid>
                            <Grid item container sx={{justifyContent: "center"}}>
                                <TextInputField fullWidth lblTxt="Phone No" lblTxtBng="ফোন নম্বর" id="ctzn_phone" variant="filled" inpStyle={{background: "white", borderRadius: "5px"}} inpFieldStyle={{padding: "13px"}} lblStyle={{paddingLeft: "15px"}} />
                            </Grid>
                            <Grid item container sx={{justifyContent: "center"}}>
                                <Button variant="contained" sx={{ paddingY:"1em", paddingX: ".6em", backgroundColor: "#97B4FF", fontWeight: 300}} onClick={openOtpModal} fullWidth>Find or Create Record | &nbsp;<span className="banglaText"> তথ্য খুজি অথবা তৈরি করি</span></Button>
                            </Grid>
                        </Grid>
                    </TabPanel>

                    <TabPanel value={value} index={1} dir={theme.direction} className={classes.tabPanelBg}>
                        <Grid container xs={12} sm={6} sx={{margin: "auto", justifyContent: "center"}} rowSpacing={3}>
                            <Grid item container sx={{justifyContent: "center"}}>
                                <TextInputField fullWidth lblTxt="National ID" lblTxtBng="জাতীয় পরিচয়" id="owner_nid" variant="filled" inpStyle={{background: "white", borderRadius: "5px"}} inpFieldStyle={{padding: "13px"}} lblStyle={{paddingLeft: "15px"}} />
                            </Grid>
                            <Grid item container sx={{justifyContent: "center"}}>
                                <TextInputField fullWidth lblTxt="Phone No" lblTxtBng="ফোন নম্বর" id="owner_phone" variant="filled" inpStyle={{background: "white", borderRadius: "5px"}} inpFieldStyle={{padding: "13px"}} lblStyle={{paddingLeft: "15px"}} />
                            </Grid>
                            <Grid item container sx={{justifyContent: "center"}}>
                                <Button variant="contained" sx={{ paddingY:"1em", paddingX: ".6em", backgroundColor: "#97B4FF", fontWeight: 300}} onClick={openOtpModal} fullWidth>Find or Create Record | &nbsp;<span className="banglaText">লগ ইন করুন</span></Button>
                            </Grid>
                        </Grid>
                    </TabPanel>

                    <TabPanel value={value} index={2} dir={theme.direction} className={classes.tabPanelBg}>
                        <Grid container xs={12} sm={6} sx={{margin: "auto", justifyContent: "center"}} rowSpacing={3}>
                            <Grid item container sx={{justifyContent: "center"}}>
                                <TextInputField fullWidth lblTxt="Badge or ID" lblTxtBng="ব্যাজ বা আইডি নং" id="admin_badge" variant="filled" inpStyle={{background: "white", borderRadius: "5px"}} inpFieldStyle={{padding: "13px"}} lblStyle={{paddingLeft: "15px"}}/>
                            </Grid>
                            <Grid item container sx={{justifyContent: "center"}}>
                                <TextInputField fullWidth lblTxt="Password" lblTxtBng="পাসওয়ার্ড" id="admin_password" variant="filled" inpStyle={{background: "white", borderRadius: "5px"}} inpFieldStyle={{padding: "13px"}} lblStyle={{paddingLeft: "15px"}} inputType="password" />
                            </Grid>
                            <Grid item container sx={{justifyContent: "center"}}>
                                <Button variant="contained" sx={{ paddingY:"1em", paddingX: ".6em", backgroundColor: "#97B4FF", fontWeight: 300}} onClick={openOtpModal} fullWidth>Find or Create Record | &nbsp;<span className="banglaText">লগ ইন করুন</span></Button>
                            </Grid>
                        </Grid>
                    </TabPanel>
                </SwipeableViews>

                <Modal
                    open={modalState}
                    onClose={closeOtpModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Grid container maxWidth="md" className={classes.modalStyle} rowSpacing={3}>
                            { !resendOtp ? <Grid item container sx={{justifyContent: "center"}}><Typography id="modal-modal-description">
                                We sent an 8 digit OTP to the phone number you provided. <br/>Please enter that in the following box within {timeCount} secs..
                            </Typography></Grid> : <Grid item container sx={{justifyContent: "center"}}><Typography>OTP Time has expired</Typography></Grid>}
                            { !resendOtp ? <Grid item container sx={{justifyContent: "center"}}><Typography id="modal-modal-description" sx={{ fontSize: "0.9em" }}>
                                আপনার প্রদত্ত্ব মোবাইল নম্বর এ ৮ সংখ্যার একটি ওটিপি পাঠানো হয়েছে। <br/>অনুগ্রহ করে {timeCount} সেকেন্ডের মধ্যেই নিচের ঘরটিতে তা লিখুন...
                            </Typography></Grid> : <Grid item container sx={{justifyContent: "center"}}><Typography>ও.টি.পিটি অব্যবহারযোগ্য হয়ে গেছে</Typography></Grid>}

                        { resendOtp ? <Grid item container sx={{justifyContent: "center"}}><Button variant="link" onClick={resetTimer} sx={{color: "blue", width: "50%",  display: "flex", alignSelf: "center"}} fullWidth>Resend OTP | আবার ও.টি.পি পাঠান</Button></Grid> : ""}

                        <Grid item container sx={{justifyContent: "center"}}><TextField fullWidth label="OTP | ও.টি.পি" id="otp_no" sx={{background: "white", borderRadius: "5px", width: "50%", display: "flex", alignSelf: "center", textAlign: "center" }} /></Grid>

                        <Grid item container sx={{justifyContent: "center"}}><Button variant="contained" sx={{ paddingY:"1em", paddingX: ".6em", backgroundColor: "#97FFC1", color: "black", fontWeight: 300, width: "50%", display: "flex", alignSelf: "center" }} onClick={processOtp} fullWidth>{"Submit | ও.টি.পি নিশ্চিত"}</Button></Grid>
                    </Grid>
                </Modal>
            </Grid>
        </AppLayout>
    );
}

export default Home;