import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import AppLayout from "../../layouts/default";

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import {makeStyles} from '@mui/styles'
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import useToggleState from "../../hooks/useToggleState";
import TextInputField from "../../components/form_parts/TextInputField";
import Grid from "@mui/material/Grid";
import useInputState from "../../hooks/useInputState";
import { useTimer} from "react-timer-hook";
import {useDispatch, useSelector} from "react-redux";
import {createCitizen, getCitizen} from "../../store/actions/citizen";
import {loginAttempt} from "../../store/actions/login";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
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

function Home() {
    const dispatch = useDispatch();
    const theme = useTheme();
    const classes = useStyles();
    const [value, setValue] = useState(0); // for tabs
    const [tabNo, setTabNo] = useState(99);

    const [cNid, updateCNid, resetCNid] = useInputState("");
    const [cPhone, updateCPhone, resetCPhone] = useInputState("");

    const [oNid, updateONid, resetONid] = useInputState("");
    const [oPhone, updateOPhone, resetOPhone] = useInputState("");

    const [aBadge, updateABadge, resetABadge] = useInputState("");
    const [aPassword, updateAPassword, resetAPassword] = useInputState("");

    const OTP = "123456";
    const [confirmationOtp, updateConfirmationOtp, resetConfirmationOtp] = useInputState("");


    const [modalState, setModalState] = useState(false);

    const [resendOtp, setResendOtp] = useState(false);

    const [timeCount, setTimeCount] = useState(30);

    const ownerInitVal = {nid: "", phone: ""};
    const adminInitVal = {badge: "", password: ""};

    const handleCitizenLogin = () => {
        if(cNid !== "" && cPhone !== ""){
            setTabNo(0);
            setModalState(true);
            dispatch(loginAttempt({nid: cNid, phone: cPhone}));
        }else{
            alert("One or More fields are missing value.\nPlease enter '987654321' as NID and '01719321654' as PHONE and '123456' as OTP. The application is STILL UNDER DEVELOPMENT");
        }
    }
    const loggedInState = useSelector((state) => state.loginState);


    let navigate = useNavigate();
    const processOtp = () => {
        if (confirmationOtp === OTP) {
            if(loggedInState) {
                closeOtpModal();
                dispatch(getCitizen({nid: cNid, phone: cPhone}));
                navigate('/ctzn_detail');
            }else {
                // console.log(citizenData);
                dispatch(createCitizen({nid: cNid, phone: cPhone}));
                dispatch(loginAttempt({nid: cNid, phone: cPhone}))
                closeOtpModal();
                navigate('/ctzn_detail');
            }
        }else {
            alert("You have either given a wrong OTP or it has been expired");
        }
    }


    const closeOtpModal = () => {
        setModalState(false);
    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleOwnerLogin = () => {
        // if (!(oNid && oPhone)) {
        //     setTabNo(1);
        // } else {
        //     openOtpModal();
        // }
    }
    const handleAdminLogin = () => {

    }


    const showResendOtp = () => setResendOtp(true);

    return (
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
                                <TextInputField
                                    fullWidth
                                    lblTxt="National ID"
                                    lblTxtBng="জাতীয় পরিচয়"
                                    id="ctzn_nid"
                                    variant="filled"
                                    inpStyle={{background: "white", borderRadius: "5px"}}
                                    inpFieldStyle={{padding: "13px"}}
                                    lblStyle={{paddingLeft: "15px"}}
                                    fieldValue={cNid}
                                    handleAction={updateCNid}
                                    isRequired={true}/>
                            </Grid>
                            <Grid item container sx={{justifyContent: "center"}}>
                                <TextInputField
                                    fullWidth
                                    lblTxt="Phone No"
                                    lblTxtBng="ফোন নম্বর"
                                    id="ctzn_phone"
                                    variant="filled"
                                    inpStyle={{background: "white", borderRadius: "5px"}}
                                    inpFieldStyle={{padding: "13px"}}
                                    lblStyle={{paddingLeft: "15px"}}
                                    isRequired={true}
                                    fieldValue={cPhone}
                                    handleAction={updateCPhone}/>
                            </Grid>
                            <Grid item container sx={{justifyContent: "center"}}>
                                <Button variant="contained" sx={{
                                    paddingY: "1em",
                                    paddingX: ".6em",
                                    backgroundColor: "#97B4FF",
                                    fontWeight: 300
                                }} onClick={handleCitizenLogin} fullWidth>Find or Create Record | &nbsp;<span className="banglaText"> তথ্য খুজি অথবা তৈরি করি</span>
                                </Button>
                            </Grid>
                        </Grid>
                    </TabPanel>

                    <TabPanel value={value} index={1} dir={theme.direction} className={classes.tabPanelBg}>
                        <Grid container xs={12} sm={6} sx={{margin: "auto", justifyContent: "center"}} rowSpacing={3}>
                            <Grid item container sx={{justifyContent: "center"}}>
                                <TextInputField fullWidth lblTxt="National ID" lblTxtBng="জাতীয় পরিচয়" id="owner_nid" variant="filled" inpStyle={{background: "white", borderRadius: "5px"}} inpFieldStyle={{padding: "13px"}} lblStyle={{paddingLeft: "15px"}} isRequired={true} fieldValue={oNid} handleAction={updateONid}/>
                            </Grid>

                            <Grid item container sx={{justifyContent: "center"}}>
                                <TextInputField fullWidth lblTxt="Phone No" lblTxtBng="ফোন নম্বর" id="owner_phone" variant="filled" inpStyle={{background: "white", borderRadius: "5px"}} inpFieldStyle={{padding: "13px"}} lblStyle={{paddingLeft: "15px"}} isRequired={true} fieldValue={oPhone} handleAction={updateOPhone}/>
                            </Grid>

                            <Grid item container sx={{justifyContent: "center"}}>
                                <Button variant="contained" sx={{
                                    paddingY: "1em",
                                    paddingX: ".6em",
                                    backgroundColor: "#97B4FF",
                                    fontWeight: 300
                                }} onClick={handleOwnerLogin}  fullWidth>Find or Create Record | &nbsp;<span className="banglaText">লগ ইন করুন</span>
                                </Button>
                            </Grid>
                        </Grid>
                    </TabPanel>

                    <TabPanel value={value} index={2} dir={theme.direction} className={classes.tabPanelBg}>
                        <Grid container xs={12} sm={6} sx={{margin: "auto", justifyContent: "center"}} rowSpacing={3}>
                            <Grid item container sx={{justifyContent: "center"}}>
                                <TextInputField fullWidth lblTxt="Badge or ID" lblTxtBng="ব্যাজ বা আইডি নং" id="admin_badge" variant="filled" inpStyle={{background: "white", borderRadius: "5px"}} inpFieldStyle={{padding: "13px"}} lblStyle={{paddingLeft: "15px"}} isRequired={true} fieldValue={aBadge} handleAction={updateABadge}/>
                            </Grid>

                            <Grid item container sx={{justifyContent: "center"}}>
                                <TextInputField fullWidth lblTxt="Password" lblTxtBng="পাসওয়ার্ড" id="admin_password" variant="filled" inpStyle={{background: "white", borderRadius: "5px"}} inpFieldStyle={{padding: "13px"}} lblStyle={{paddingLeft: "15px"}} inputType="password" isRequired={true} fieldValue={aPassword} handleAction={updateAPassword}/>
                            </Grid>

                            <Grid item container sx={{justifyContent: "center"}}>
                                <Button variant="contained" sx={{
                                    paddingY: "1em",
                                    paddingX: ".6em",
                                    backgroundColor: "#97B4FF",
                                    fontWeight: 300
                                }} onClick={handleAdminLogin} fullWidth> Find or Create Record | &nbsp;<span className="banglaText">লগ ইন করুন</span>
                                </Button>
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
                        { !resendOtp ?
                            <Grid item container sx={{justifyContent: "center"}}>
                                <Typography id="modal-modal-description">
                                    We sent an 8 digit OTP to the phone number you provided. <br/>Please enter that in the following box within 30 secs. After that the OTP will become invalid.
                                </Typography>
                            </Grid>
                            :
                            <Grid item container sx={{justifyContent: "center"}}>
                                <Typography>OTP Time has expired</Typography>
                            </Grid>
                        }

                        { !resendOtp ?
                            <Grid item container sx={{justifyContent: "center"}}>
                                <Typography id="modal-modal-description" sx={{fontSize: "0.9em"}}> আপনার প্রদত্ত্ব মোবাইল নম্বর এ ৮ সংখ্যার একটি ওটিপি পাঠানো হয়েছে। <br/>অনুগ্রহ করে ৩০ সেকেন্ডের মধ্যেই নিচের ঘরটিতে তা লিখুন। এর পর ওটিপিটি অব্যবহারযোগ্য হয়ে যাবে।
                                </Typography>
                            </Grid>
                            :
                            <Grid item container sx={{justifyContent: "center"}}>
                                <Typography>ও.টি.পিটি অব্যবহারযোগ্য হয়ে গেছে</Typography>
                            </Grid>
                        }

                        {resendOtp ?
                            <Grid item container sx={{justifyContent: "center"}}>
                                <Button variant="link" sx={{ color: "blue", width: "50%", display: "flex", alignSelf: "center" }} fullWidth>Resend OTP | আবার ও.টি.পি পাঠান</Button>
                            </Grid>
                            :  ""
                        }

                        <Grid item container sx={{justifyContent: "center"}}><TextField fullWidth label="OTP | ও.টি.পি" id="otp_no" sx={{
                            background: "white",
                            borderRadius: "5px",
                            width: "50%",
                            display: "flex",
                            alignSelf: "center",
                            textAlign: "center"
                        }} required value={confirmationOtp} onChange={updateConfirmationOtp}/>
                        </Grid>

                        <Grid item container sx={{justifyContent: "center"}}><Button variant="contained" sx={{
                            paddingY: "1em",
                            paddingX: ".6em",
                            backgroundColor: "#97FFC1",
                            color: "black",
                            fontWeight: 300,
                            width: "50%",
                            display: "flex",
                            alignSelf: "center"
                        }} onClick={processOtp} fullWidth>{"Submit | ও.টি.পি নিশ্চিত"}</Button>
                        </Grid>
                    </Grid>
                </Modal>
            </Grid>
        </AppLayout>
    );
}

export default Home;