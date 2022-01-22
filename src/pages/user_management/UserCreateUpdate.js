import React, {useState} from "react";
import AppLayout from "../../layouts/default";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import LabelAndData from "../../components/page_parts/LabelAndData";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";

import CtznPicture from "../../assets/images/userPicture.png";
import Typography from "@mui/material/Typography";
import SectionTitle from "../../components/page_parts/SectionTitle";
import TableAlterateColor from "../../components/page_parts/TableAlternateColor";
import TableAlternateColor from "../../components/page_parts/TableAlternateColor";
import Button from "@mui/material/Button";
import AddressPresenter from "../../components/page_parts/AddressPresenter";
import TextInputField from "../../components/form_parts/TextInputField";
import useInputState from "../../hooks/useInputState";
import SelectInputField from "../../components/form_parts/SelectInputField";
import {DAYS, MONTHS, YEARS} from "../../utils/consts";

const useStyles = makeStyles({
})

const UserCreateUpdate = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState({
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
    });

    const [userName, updateUserName] = useInputState("");
    const [badgeNo, updateBadgeNo] = useInputState("");
    const [designation, updateDesignation] = useInputState("");
    const [station, updateStation] = useInputState("");
    const [joiningDay, updateJoiningDay] = useInputState("");
    const [joiningMonth, updateJoiningMonth] = useInputState("");
    const [joiningYear, updateJoiningYear] = useInputState("");
    const [status, updateStatus] = useInputState("");
    const [phone, updatePhone] = useInputState("");
    const [email, updateEmail] = useInputState("");
    const [supervisor, updateSupervisor] = useInputState("");
    const [supervisorDesignation, updateSupervisorDesignation] = useInputState("");
    const [stationInCharge, updateStationInCharge] = useInputState("");
    const [inChargeDesignation, updateInChargeDesignation] = useInputState("");


    const cancelOperation = () => {};
    const clearFields = () => {};
    const saveRecord = () => {};

    return (
        <AppLayout pageTitle="User Create/Update" pageTitleBangla="নাগরিক তথ্য বিবরনী" pageContent="Details about a citizen">
            <Grid container maxWidth="lg" rowSpacing={3} className="page-content">

                <SectionTitle titleText="Create/Update User" titleTextBng="ইউজার তৈরি/সঠিক করা" textStyle={{marginTop: "-2.2em"}} />
                <Grid item container rowSpacing={2}>
                    <Grid item container spacing={3} rowSpacing={2}>
                        <Grid item container xs={12} sm={12} md={9} rowSpacing={2}  className="user-information">
                            <Grid item container spacing={2} justify="space-between">
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextInputField lblTxt="Name" lblTxtBng="নাম" fieldValue={userName} handleAction={updateUserName} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextInputField lblTxt="Badge / ID" lblTxtBng="ব্যাজ / আইডি নং" fieldValue={badgeNo} handleAction={updateBadgeNo} />
                                </Grid>
                            </Grid>
                            <Grid item container spacing={2} justify="space-between">
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextInputField lblTxt="Designation" lblTxtBng="পদবী" fieldValue={designation} handleAction={updateDesignation} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextInputField lblTxt="Station / Office" lblTxtBng="স্টেশন / অফিস" fieldValue={station} handleAction={updateStation} />
                                </Grid>
                            </Grid>
                            <Grid item container spacing={2} justify="space-between">
                                <Grid item xs={12} sm={3} md={3}>
                                    <SelectInputField txtLbl="Joined Day" txtLblBng="জয়েনিং এর দিন" dataList={DAYS} fieldValue={joiningDay} handleAction={updateJoiningDay} />
                                </Grid>
                                <Grid item xs={12} sm={3} md={3}>
                                    <SelectInputField txtLbl="Month" txtLblBng="মাস" dataList={MONTHS} fieldValue={joiningMonth} handleAction={updateJoiningMonth} />
                                </Grid>
                                <Grid item xs={12} sm={3} md={3}>
                                    <SelectInputField txtLbl="Year" txtLblBng="বছর" dataList={YEARS} fieldValue={joiningYear} handleAction={updateJoiningYear} />
                                </Grid>
                                <Grid item xs={12} sm={3} md={3}>
                                    <SelectInputField txtLbl="Status" txtLblBng="বর্তমান অবস্থা" dataList={["Active", "Inactive"]} fieldValue={status} handleAction={updateStatus} />
                                </Grid>
                            </Grid>
                            <Grid item container spacing={2} justify="space-between">
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextInputField lblTxt="Phone" lblTxtBng="ফোন নং" fieldValue={phone} handleAction={updatePhone} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextInputField lblTxt="Email" lblTxtBng="ইমেইল" fieldValue={email} handleAction={updateEmail} />
                                </Grid>
                            </Grid>
                            <Grid item container spacing={2} justify="space-between">
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextInputField lblTxt="Supervisor" lblTxtBng="সুপারভাইজর" fieldValue={supervisor} handleAction={updateSupervisor} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextInputField lblTxt="Supervisor Designation" lblTxtBng="সুপারভাইজরের পদবী" fieldValue={supervisorDesignation} handleAction={updateSupervisorDesignation} />
                                </Grid>
                            </Grid>
                            <Grid item container spacing={2} justify="space-between">
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextInputField lblTxt="Station In-charge" lblTxtBng="স্টেশন / অফিস ইন-চার্জ" fieldValue={stationInCharge} handleAction={updateStationInCharge} />
                                </Grid>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextInputField lblTxt="In-charge Designation" lblTxtBng="ইন-চার্জের পদবী" fieldValue={inChargeDesignation} handleAction={updateInChargeDesignation} />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item container xs={12} sm={12} md={3} rowSpacing={3} className="user-image">
                            <Grid item container>
                                <img src={postData.image} style={{width: "180px", height: "200px", maxWidth:"100%", padding:"5px", borderRadius: "10px", backgroundColor: "#DDDDDD", texAlign: "center"}} alt="User Image"/>
                            </Grid>
                            <Grid item container>
                                <FileBase type="file" multiple={ false } onDone={({base64}) => setPostData({...postData, image: base64})} /></Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container sx={{margin: "30px 0"}}>
                    <Box sx={{border: "1px solid black", width: "100%"}}></Box>
                </Grid>

                <Grid item container rowSpacing={2} spacing={2} justify="space-between">
                    <Grid item xs={12} sm={4}>
                        <Button variant="contained" color="error" onClick={cancelOperation} fullWidth>Cancel | &nbsp;<span className="banglaText">এখন নয়</span></Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button variant="contained" color="info" onClick={clearFields} fullWidth>Clear | &nbsp;<span className="banglaText">আবার</span></Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button variant="contained" color="success" onClick={saveRecord} fullWidth>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
                    </Grid>
                </Grid>
            </Grid>
        </AppLayout>
    );
}

export default UserCreateUpdate;