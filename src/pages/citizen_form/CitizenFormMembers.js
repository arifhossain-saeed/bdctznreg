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
    <AppLayout pageTitle="Citizen Form Page [Members]"  pageTitleBangla="?????????????????? ???????????? ?????????????????? [?????????????????????]" pageContent="Citizen Information Collection Form">
        <Grid container className="page-content">
            <Grid item container rowSpacing={3}>
                <SectionTitle titleText="Family / Mess Member" titleTextBng="?????????????????? / ??????????????? ?????????????????????" textStyle={{marginTop: "-2.2em"}} />
                <Grid item container>
                    <TableAlterateColor tableData={members} />
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={6}>
                        <TextInputField lblTxt="Full Name" lblTxtBng="???????????????????????? ?????????" fieldValue={fullName} handleAction={updateFullName} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Member Type" txtLblBng="?????????????????? ?????????" dataList={["Family Member", "Mess Member"]} handleAction={updateMemberType}  fieldValue={memberType} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Family Type" txtLblBng="??????????????????????????? ?????????????????? ?????????" dataList={["Parent", "Sibling", "Spouse", "Children", "Relative"]} handleAction={updateRelationType}  fieldValue={relationType} />
                    </Grid>
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Father's Name" lblTxtBng="??????????????? ?????????" fieldValue={fatherName} handleAction={updateFatherName} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Mother's Name" lblTxtBng="??????????????? ?????????" fieldValue={motherName} handleAction={updateMotherName} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Birth Date" lblTxtBng="???????????? ???????????????" fieldValue={birthDate} handleAction={updateBirthDate} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="National ID" lblTxtBng="??????????????? ??????????????? [???????????????]" fieldValue={nid} handleAction={updateNid} />
                    </Grid>
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Gender" txtLblBng="???????????????" dataList={GENDERS} handleAction={updateGender} fieldValue={gender}/>
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Religion" txtLblBng="????????????" dataList={RELIGIONS} handleAction={updateReligion}  fieldValue={religion} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Marital Status" txtLblBng="????????????????????? ??????????????????" dataList={MARITAL_STATUS} handleAction={updateMStatus} fieldValue={mStatus}/>
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Education" txtLblBng="????????????????????? ????????????" dataList={EDUCATIONAL_LEVEL} handleAction={updateEducation} fieldValue={education}/>
                    </Grid>
                </Grid>
                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Phone" lblTxtBng="????????? ??????" fieldValue={phone} handleAction={updatePhone}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Email" lblTxtBng="???????????????" fieldValue={email} handleAction={email} inputType="email"/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Passport No [if any]" lblTxtBng="???????????????????????? ?????? [????????? ????????????]" fieldValue={passport} handleAction={updatePassport}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Driving License No [if any]" lblTxtBng="???????????????????????? ???????????????????????? ?????? [????????? ????????????]" fieldValue={drivingLnc} handleAction={updateDrivingLnc}/>
                    </Grid>
                </Grid>
                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Occupation" txtLblBng="????????????" dataList={OCCUPATIONS} handleAction={updateOccupation} fieldValue={occupation}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Organization Name" lblTxtBng="???????????????????????????????????? ?????????" fieldValue={orgName} handleAction={updateOrgName}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Organization Phone" lblTxtBng="???????????????????????????????????? ????????? ??????" fieldValue={orgPhone} handleAction={updateOrgPhone}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Organization Email" lblTxtBng="???????????????????????????????????? ???????????????" fieldValue={orgEmail} handleAction={updateOrgEmail} inputType="email"/>
                    </Grid>
                </Grid>
                <Grid item container sx={{justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={saveMemberInfo}>Add | &nbsp;<span className="banglaText">????????? ?????????</span></Button>
                </Grid>
            </Grid>


            <Grid item container sx={{margin: "30px 0"}}>
                <Box sx={{border: "1px solid black", width: "100%"}}></Box>
            </Grid>

            <Grid item container justify="space-between" spacing={3}>
                <Grid item md={4}>
                    <Button variant="contained" color="info" onClick={goToPreviousForm} fullWidth>Previous | &nbsp;<span className="banglaText">???????????? ????????????</span></Button>
                </Grid>
                <Grid item md={4}>
                    <Button variant="contained" color="error" onClick={cancelRecordCreation} fullWidth>Cancel | &nbsp;<span className="banglaText">????????? ??????</span></Button>
                </Grid>
                <Grid item md={4}>
                    <Button variant="contained" color="info" onClick={goToNextForm} fullWidth>Next | &nbsp;<span className="banglaText">?????????????????????</span></Button>
                </Grid>
            </Grid>
        </Grid>
    </AppLayout>
)};

export default CitizenFormMembers;