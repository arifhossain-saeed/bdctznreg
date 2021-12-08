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


const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const CitizenFormMembers = () => {
    const [division, updateDiv, resetDiv] = useInputState("");
    const [district, updateDist, resetDist] = useInputState("");
    const [subDist, updateSubDist, resetSubDist] = useInputState("");
    const [ps, updatePs, resetPs] = useInputState("");
    const [po, updatePo, resetPo] = useInputState("");
    const [city, updateCity, resetCity] = useInputState("");
    const [area, updateArea, resetArea] = useInputState("");
    const [postCode, updatePostCode, resetPostCode] = useInputState("");

    const [isPermanent, updateIsPermanent] = useToggleState(false);

    const [month, updateMonth] = useInputState("");
    const [year, updateYear] = useInputState("");

    const savePresentAddress = () => {

    }
    const savePreviousRentals = () => {

    }
    const cancelRecordCreation = () => {

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
                        <TextInputField lblTxt="Full Name" lblTxtBng="সম্পূর্ন নাম" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Member Type" txtLblBng="সদস্যর ধরন" dataList={["Family", "Mess"]} handleAction={updateSubDist}  fieldValue={subDist} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Family Type" txtLblBng="পারিবারিক সদস্যর ধরন" dataList={["Parent", "Sibling", "Spouse", "Child"]} handleAction={updatePs}  fieldValue={ps} />
                    </Grid>
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Father's Name" lblTxtBng="পিতার নাম" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Mother's Name" lblTxtBng="মাতার নাম" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Birth Date" lblTxtBng="জন্ম তারিখ" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="National ID" lblTxtBng="জাতীয় পরিচয় [যেকোন]" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Gender" txtLblBng="লিঙ্গ" dataList={["Male", "Female", "Other"]} handleAction={updatePs} fieldValue={ps}/>
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Religion" txtLblBng="ধর্ম" dataList={["Muslim", "Hindu", "Christian", "Buddist", "Jew", "Other"]} handleAction={updatePs}  fieldValue={ps} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Marital Status" txtLblBng="বৈবাহিক অবস্থা" dataList={["Never Married", "Married", "Divorced", "Widowed"]} handleAction={updatePs} fieldValue={ps}/>
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Education" txtLblBng="শিক্ষার স্তর" dataList={["PhD", "Masters", "Bachelors", "High School", "Primary School", "Alphabetical"]} handleAction={updatePs} fieldValue={ps}/>
                    </Grid>
                </Grid>
                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Phone" lblTxtBng="ফোন নং" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Email" lblTxtBng="ইমেইল" fieldValue={postCode} handleAction={updatePostCode} inputType="email"/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Passport No [if any]" lblTxtBng="পাসপোর্ট নং [যদি থাকে]" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Driving License No [if any]" lblTxtBng="ড্রাইভিং লাইসেন্স নং [যদি থাকে]" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Grid>
                </Grid>
                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Occupation" txtLblBng="পেশা" dataList={["Service", "Business", "Self Employed"]} handleAction={updatePs} fieldValue={ps}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Organization Name" lblTxtBng="প্রতিষ্ঠানের নাম" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Organization Phone" lblTxtBng="প্রতিষ্ঠানের ফোন নং" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Organization Email" lblTxtBng="প্রতিষ্ঠানের ইমেইল" fieldValue={postCode} handleAction={updatePostCode} inputType="email"/>
                    </Grid>
                </Grid>
                <Grid item container sx={{justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={savePreviousRentals}>Add | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
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