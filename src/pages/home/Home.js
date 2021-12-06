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
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 650,
        backgroundColor: "white",
        borderRadius: 15,
        padding: "30px",
        textAlign: "center",
        boxShadow: 24,
        p: 4,
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

    const [timeCount, setTimeCount] = useState(0);

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
        <AppLayout pageTitle="Home" pageTitleBangla="কাচারীঘর" showRightNav={false} showLeftNav={false}>
            <Box sx={{ backgroundColor: 'background.paper', margin: "20px 0"}}>
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
                        <Box sx={{width: 500, maxWidth: "100%", margin: "auto"}}>
                            <Stack spacing={2} direction="column">
                                <TextField fullWidth label="National ID | জাতীয় পরিচয়" id="ctzn_nid" sx={{background: "white", outline: "none", borderRadius: "5px"}}/>
                                <TextField fullWidth label="Phone No | ফোন নম্বর" id="ctzn_phone" sx={{background: "white", outline: "none", borderRadius: "5px"}} />
                                <Button variant="contained" sx={{ paddingY:"1em", paddingX: ".6em", backgroundColor: "#97B4FF", fontWeight: 300}} onClick={openOtpModal}>{"Find or Create Record | তথ্য খুজি অথবা তৈরি করি"}</Button>
                            </Stack>
                        </Box>
                    </TabPanel>

                    <TabPanel value={value} index={1} dir={theme.direction} className={classes.tabPanelBg}>
                        <Box sx={{width: 500, maxWidth: "100%", margin: "auto"}}>
                            <Stack spacing={2} direction="column">
                                <TextField fullWidth label="National ID | জাতীয় পরিচয়" id="owner_nid" sx={{background: "white", outline: "none", borderRadius: "5px"}}/>
                                <TextField fullWidth label="Phone No | ফোন নম্বর" id="owner_phone" sx={{background: "white", outline: "none", borderRadius: "5px"}} />
                                <Button variant="contained" sx={{ paddingY:"1em", paddingX: ".6em", backgroundColor: "#97B4FF", fontWeight: 300}} onClick={openOtpModal}>{"Log In | লগ ইন করুন"}</Button>
                            </Stack>
                        </Box>
                    </TabPanel>

                    <TabPanel value={value} index={2} dir={theme.direction} className={classes.tabPanelBg}>
                        <Box sx={{width: 500, maxWidth: "100%", margin: "auto"}}>
                            <Stack spacing={2} direction="column">
                                <TextField fullWidth label="Badge or ID | ব্যাজ বা আইডি নং" id="admin_badge" sx={{background: "white", outline: "none", borderRadius: "5px"}}/>
                                <TextField fullWidth label="Password | পাসওয়ার্ড" id="admin_password" sx={{background: "white", outline: "none", borderRadius: "5px"}} />
                                <Button variant="contained" sx={{ paddingY:"1em", paddingX: ".6em", backgroundColor: "#97B4FF", fontWeight: 300}} onClick={openOtpModal}>{"Log In | লগ ইন করুন"}</Button>
                            </Stack>
                        </Box>
                    </TabPanel>
                </SwipeableViews>

                <Modal
                    open={modalState}
                    onClose={closeOtpModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className={classes.modalStyle}>
                        <Stack spacing={2} direction="column">
                            { !resendOtp ? <Typography id="modal-modal-description">
                                We sent an 8 digit OTP to the phone number you provided. <br/>Please enter that in the following box within {timeCount} secs..
                            </Typography> : <Typography>OTP Time has expired</Typography>}
                            { !resendOtp ? <Typography id="modal-modal-description" sx={{ fontSize: "0.9em" }}>
                                আপনার প্রদত্ত্ব মোবাইল নম্বর এ ৮ সংখ্যার একটি ওটিপি পাঠানো হয়েছে। <br/>অনুগ্রহ করে {timeCount} সেকেন্ডের মধ্যেই নিচের ঘরটিতে তা লিখুন...
                            </Typography> : <Typography>ও.টি.পিটি অব্যবহারযোগ্য হয়ে গেছে</Typography>}

                            { resendOtp ? <Button variant="link" onClick={resetTimer} sx={{color: "blue", width: "50%",  display: "flex", alignSelf: "center"}}>Resend OTP | আবার ও.টি.পি পাঠান</Button> : ""}

                            <TextField fullWidth label="OTP | ও.টি.পি" id="otp_no" sx={{background: "white", borderRadius: "5px", width: "50%", display: "flex", alignSelf: "center", textAlign: "center" }} />

                            <Button variant="contained" sx={{ paddingY:"1em", paddingX: ".6em", backgroundColor: "#97FFC1", color: "black", fontWeight: 300, width: "50%", display: "flex", alignSelf: "center" }} onClick={processOtp}>{"Submit | ও.টি.পি নিশ্চিত"}</Button>
                        </Stack>
                    </Box>
                </Modal>
            </Box>
        </AppLayout>
    );
}

export default Home;