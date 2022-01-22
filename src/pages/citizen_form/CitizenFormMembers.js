import React from "react";
import AppLayout from "../../layouts/default";
import Stack from "@mui/material/Stack";
import SectionTitle from "../../components/page_parts/SectionTitle";
import Box from "@mui/material/Box";
import SelectInputField from "../../components/form_parts/SelectInputField";
import TextInputField from "../../components/form_parts/TextInputField";
import CheckInputField from "../../components/form_parts/CheckInputField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import useInputState from "../../hooks/useInputState";
import useToggleState from "../../hooks/useToggleState";
import {useNavigate} from "react-router-dom";
import TableAlterateColor from "../../components/page_parts/TableAlternateColor";
import Grid from "@mui/material/Grid";
import {EDUCATIONAL_LEVEL, GENDERS, MARITAL_STATUS, OCCUPATIONS, RELATIONS, RELIGIONS} from "../../utils/consts";
import {useSelector} from "react-redux";


const CitizenFormMembers = () => {
    const activeCitizen = useSelector((state) => state.citizen)
    const [fullName, updateFullName] = useInputState("");
    const [memberType, updateMemberType] = useInputState("");
    const [relationType, updateRelationType] = useInputState("");
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
    const [passport, updatePassport] = useInputState("");
    const [drivingLnc, updateDrivingLnc] = useInputState("");
    const [orgName, updateOrgName] = useInputState("");
    const [orgPhone, updateOrgPhone] = useInputState("");
    const [orgEmail, updateOrgEmail] = useInputState("");

    const saveMemberInfo = () => {

    }

    const cancelRecordCreation = () => {
        navigate("/ctzn_detail");
    }
    const navigate = useNavigate();
    const goToPreviousForm = () => {
        navigate("/ctzn_form_credentials")
    }
    const goToNextForm = () => {
        navigate("/ctzn_form_helps")
    }
    const members =  [
        {name:"Saeed", age:33, occupation:"Programmer", phone:"01877354232"},
        {name:"Shahin", age:35, occupation:"Housewife", phone:"01911097666"}
    ];

    return(
    <AppLayout pageTitle="Citizen Form Page [Members]"  pageTitleBangla="নাগরিক তথ্য সংগ্রহ [সদস্যরা]" pageContent="Citizen Information Collection Form">
        <Grid container className="page-content">
            <Grid item container rowSpacing={3}>
                <SectionTitle titleText="Family / Mess Member" titleTextBng="পরিবার / মেসের সদস্যরা" textStyle={{marginTop: "-2.2em"}} />
                <Grid item container>
                    <TableAlterateColor tableData={members} />
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={6}>
                        <TextInputField lblTxt="Full Name" lblTxtBng="সম্পূর্ন নাম" fieldValue={fullName} handleAction={updateFullName} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Member Type" txtLblBng="সদস্যর ধরন" dataList={["Family Member", "Mess Member"]} handleAction={updateMemberType}  fieldValue={memberType} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Family Type" txtLblBng="পারিবারিক সদস্যর ধরন" dataList={["Parent", "Sibling", "Spouse", "Children", "Relative"]} handleAction={updateRelationType}  fieldValue={relationType} />
                    </Grid>
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Father's Name" lblTxtBng="পিতার নাম" fieldValue={fatherName} handleAction={updateFatherName} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Mother's Name" lblTxtBng="মাতার নাম" fieldValue={motherName} handleAction={updateMotherName} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Birth Date" lblTxtBng="জন্ম তারিখ" fieldValue={birthDate} handleAction={updateBirthDate} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="National ID" lblTxtBng="জাতীয় পরিচয় [যেকোন]" fieldValue={nid} handleAction={updateNid} />
                    </Grid>
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Gender" txtLblBng="লিঙ্গ" dataList={GENDERS} handleAction={updateGender} fieldValue={gender}/>
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Religion" txtLblBng="ধর্ম" dataList={RELIGIONS} handleAction={updateReligion}  fieldValue={religion} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Marital Status" txtLblBng="বৈবাহিক অবস্থা" dataList={MARITAL_STATUS} handleAction={updateMStatus} fieldValue={mStatus}/>
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Education" txtLblBng="শিক্ষার স্তর" dataList={EDUCATIONAL_LEVEL} handleAction={updateEducation} fieldValue={education}/>
                    </Grid>
                </Grid>
                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Phone" lblTxtBng="ফোন নং" fieldValue={phone} handleAction={updatePhone}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Email" lblTxtBng="ইমেইল" fieldValue={email} handleAction={email} inputType="email"/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Passport No [if any]" lblTxtBng="পাসপোর্ট নং [যদি থাকে]" fieldValue={passport} handleAction={updatePassport}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Driving License No [if any]" lblTxtBng="ড্রাইভিং লাইসেন্স নং [যদি থাকে]" fieldValue={drivingLnc} handleAction={updateDrivingLnc}/>
                    </Grid>
                </Grid>
                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Occupation" txtLblBng="পেশা" dataList={OCCUPATIONS} handleAction={updateOccupation} fieldValue={occupation}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Organization Name" lblTxtBng="প্রতিষ্ঠানের নাম" fieldValue={orgName} handleAction={updateOrgName}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Organization Phone" lblTxtBng="প্রতিষ্ঠানের ফোন নং" fieldValue={orgPhone} handleAction={updateOrgPhone}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Organization Email" lblTxtBng="প্রতিষ্ঠানের ইমেইল" fieldValue={orgEmail} handleAction={updateOrgEmail} inputType="email"/>
                    </Grid>
                </Grid>
                <Grid item container sx={{justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={saveMemberInfo}>Add | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
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
                    <Button variant="contained" color="info" onClick={goToNextForm} fullWidth>Next | &nbsp;<span className="banglaText">পরবর্তী</span></Button>
                </Grid>
            </Grid>
        </Grid>
    </AppLayout>
)};

export default CitizenFormMembers;