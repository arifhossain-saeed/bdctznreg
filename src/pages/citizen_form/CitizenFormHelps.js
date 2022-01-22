import React from "react";
import AppLayout from "../../layouts/default";
import Stack from "@mui/material/Stack";
import SectionTitle from "../../components/page_parts/SectionTitle";
import Box from "@mui/material/Box";
import TableAlterateColor from "../../components/page_parts/TableAlternateColor";
import TextInputField from "../../components/form_parts/TextInputField";
import SelectInputField from "../../components/form_parts/SelectInputField";
import Button from "@mui/material/Button";
import useInputState from "../../hooks/useInputState";
import useToggleState from "../../hooks/useToggleState";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import {EDUCATIONAL_LEVEL, GENDERS, MARITAL_STATUS, RELIGIONS} from "../../utils/consts";
import {useSelector} from "react-redux";


const helpingHands =  [
    {name:"Saeed", occupation:"Cook", address: "7A, 37 Middle Paikpara", phone:"01877354232"},
    {name:"Shahin", occupation:"Care taker", address:"7C, 37 Middle Paikpara", phone:"01911097666"}
];

const CitizenFormHelps = () => {
    const activeCitizen = useSelector((state) => state.citizen);
    const [fullName, updateFullName] = useInputState("");
    const [fatherName, updateFatherName] = useInputState("");
    const [motherName, updateMotherName] = useInputState("");
    const [birthDate, updateBirthDate] = useInputState("");
    const [gender, updateGender] = useInputState("");
    const [religion, updateReligion] = useInputState("");
    const [nid, updateNid] = useInputState("");
    const [education, updateEducation] = useInputState("");
    const [mStatus, updateMStatus] = useInputState("");
    const [phone, updatePhone] = useInputState("");
    const [email, updateEmail] = useInputState("");
    const [occupation, updateOccupation] = useInputState("");
    const [altPhone, updateAltPhone] = useInputState("");
    const [passport, updatePassport] = useInputState("");
    const [drivingLnc, updateDrivingLnc] = useInputState("");
    const [fullAddress, updateFullAddress] = useInputState("");


    const saveHelpInfo = () => {

    }

    const cancelRecordCreation = () => {
        navigate("/ctzn_detail");
    }
    const navigate = useNavigate();
    const goToPreviousForm = () => {
        navigate("/ctzn_form_members")
    }
    const goToNextForm = () => {
        navigate("/ctzn_detail")
    }
    return(
    <AppLayout pageTitle="Citizen Form Page [Helping Hands]"  pageTitleBangla="নাগরিক তথ্য সংগ্রহ [সহযোগীতাকারি]" pageContent="Citizen Information Collection Form">
        <Grid container className="page-content">
            <Grid item container rowSpacing={3}>
                <SectionTitle titleText="Helping Hands" titleTextBng="সহায়তাকারী/দের তথ্য" textStyle={{marginTop: "-2.2em"}} />
                <Grid item container>
                    <TableAlterateColor tableData={helpingHands} />
                </Grid>
                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={6}>
                        <TextInputField lblTxt="Full Name" lblTxtBng="সম্পূর্ন নাম" fieldValue={fullName} handleAction={updateFullName} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Father's Name" lblTxtBng="পিতার নাম" fieldValue={fatherName} handleAction={updateFatherName} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Mother's Name" lblTxtBng="মাতার নাম" fieldValue={motherName} handleAction={updateMotherName} />
                    </Grid>
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Birth Date" lblTxtBng="জন্ম তারিখ" fieldValue={birthDate} handleAction={updateBirthDate} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Gender" txtLblBng="লিঙ্গ" dataList={GENDERS} handleAction={updateGender} fieldValue={gender}/>
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Religion" txtLblBng="ধর্ম" dataList={RELIGIONS} handleAction={updateReligion}  fieldValue={religion} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="National ID" lblTxtBng="জাতীয় পরিচয় [যেকোন]" fieldValue={nid} handleAction={updateNid} />
                    </Grid>
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Education" txtLblBng="শিক্ষার স্তর" dataList={EDUCATIONAL_LEVEL} handleAction={updateEducation} fieldValue={education}/>
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Marital Status" txtLblBng="বৈবাহিক অবস্থা" dataList={MARITAL_STATUS} handleAction={updateMStatus} fieldValue={mStatus}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Phone" lblTxtBng="নিজস্ব ফোন নং" fieldValue={phone} handleAction={updatePhone}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Email" lblTxtBng="ইমেইল" fieldValue={email} handleAction={updateEmail} inputType="email"/>
                    </Grid>
                </Grid>
                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Occupation" txtLblBng="পেশা" dataList={["Maid", "Driving", "Care Taking", "Gardnening", "Security"]} handleAction={updateOccupation} fieldValue={occupation}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Alternate Phone" lblTxtBng="যোগাযোগের ফোন নং" fieldValue={altPhone} handleAction={updateAltPhone}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Passport No [if any]" lblTxtBng="পাসপোর্ট নং [যদি থাকে]" fieldValue={passport} handleAction={updatePassport}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Driving License No [if any]" lblTxtBng="ড্রাইভিং লাইসেন্স নং [যদি থাকে]" fieldValue={drivingLnc} handleAction={updateDrivingLnc}/>
                    </Grid>
                </Grid>
                <Grid item container>
                    <TextInputField lblTxt="Full Address" lblTxtBng="যোগাযোগের ঠিকানা" fieldValue={fullAddress} handleAction={updateFullAddress}/>
                </Grid>
                <Grid item container sx={{justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={saveHelpInfo}>Add | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
                </Grid>
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
    </AppLayout>
)};

export default CitizenFormHelps;