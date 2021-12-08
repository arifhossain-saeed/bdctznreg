import React from "react";
import AppLayout from "../../layouts/default";
import Stack from "@mui/material/Stack";
import SectionTitle from "../../components/page_parts/SectionTitle";
import Box from "@mui/material/Box";
import SelectInputField from "../../components/form_parts/SelectInputField";
import TextInputField from "../../components/form_parts/TextInputField";
import Button from "@mui/material/Button";
import useInputState from "../../hooks/useInputState";
import useToggleState from "../../hooks/useToggleState";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

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

function getStyles(name, personName, theme) {

    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const CitizenFormCredentials = () => {
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
        navigate("/ctzn_form_permanent")
    }
    const goToNextForm = () => {
        navigate("/ctzn_form_members")
    }
    const previousRentals = [
        {
            address: "54/1 Middle Paikpara",
            tenure: "July 2013 - August 2017",
            owner: "Do not know",
            phone: "Do not know"
        },
        {
            address: "269/3 Ahmednagar Paikpara",
            tenure: "July 2006 - June 2013",
            owner: "Osman Gani",
            phone: "Do not know"
        },
    ]
    return(
    <AppLayout pageTitle="Citizen Form Page [Education Occupation]" pageTitleBangla="নাগরিক তথ্য সংগ্রহ [শিক্ষা পেশা]">
        <Grid container rowSpacing={3} className="page-content">
            <Grid item container rowSpacing={3}>
                <SectionTitle titleText="Highest Education" titleTextBng="শিক্ষাগত যোগ্যতা" textStyle={{marginTop: "-2.2em"}}/>
                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={6}>
                        <TextInputField lblTxt="Name of the degree" lblTxtBng="ডিগ্রির নাম" fieldValue={postCode} handleAction={updateDiv} />
                    </Grid>
                    <Grid item md={6}>
                        <TextInputField lblTxt="Institution Name" lblTxtBng="শিক্ষা প্রতিষ্ঠানের নাম" fieldValue={postCode} handleAction={updateDiv} />
                    </Grid>
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item container md={6} justify="space-between" spacing={3}>
                        <Grid item md={6}>
                            <SelectInputField txtLbl="Starting Month" txtLblBng="শুরুর মাস" dataList={["Jan", "Feb"]}
                                              handleAction={updatePs} fieldValue={ps}/>
                        </Grid>
                        <Grid item md={6}>
                            <SelectInputField txtLbl="Starting Year" txtLblBng="শুরুর বছর" dataList={["2001", "2000"]}
                                              handleAction={updatePs} fieldValue={ps}/>
                        </Grid>
                    </Grid>
                    <Grid item container md={6} justify="space-between" spacing={3}>
                        <Grid item md={6}>
                            <SelectInputField txtLbl="Completing Month" txtLblBng="শেষের মাস" dataList={["Jan", "Feb"]}
                                              handleAction={updatePs} fieldValue={ps}/>
                        </Grid>
                        <Grid item md={6}>
                            <SelectInputField txtLbl="Completing Year" txtLblBng="শেষের বছর" dataList={["2001", "2000"]}
                                              handleAction={updatePs} fieldValue={ps}/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container>
                    <TextInputField lblTxt="Study Gap Reason [if any]" lblTxtBng="শিক্ষা বিলম্বের কারন" fieldValue={postCode} handleAction={updatePostCode}/>
                </Grid>

                <Grid item container sx={{justifyContent:"center"}}>
                    <Button variant="contained" color="success" onClick={savePresentAddress}>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
                </Grid>
            </Grid>


            <Grid item container rowSpacing={3} sx={{marginTop: "20px"}}>
                <SectionTitle titleText="Occupation" titleTextBng="পেশা" textStyle={{marginTop: "-2.2em"}}/>
                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Occupation" txtLblBng="পেশার ধরন" dataList={["Web Developer", "Fullstack Developer"]} handleAction={updatePs} fieldValue={ps}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Organizaiton Name" lblTxtBng="প্রতিষ্ঠানের নাম" fieldValue={postCode}
                                        handleAction={updatePostCode}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Employer Name [if any]" lblTxtBng="মালিকের নাম [যদি থাকে]" fieldValue={postCode}
                                        handleAction={updatePostCode}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Organization Address" lblTxtBng="প্রতিষ্ঠানের ঠিকানা" fieldValue={postCode}
                                        handleAction={updatePostCode}/>
                    </Grid>
                </Grid>
                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Organization phone" lblTxtBng="প্রতিষ্ঠানের যোগাযোগ নং" fieldValue={postCode}
                                        handleAction={updatePostCode}/>
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Organization Email" lblTxtBng="প্রতিষ্ঠানের ইমেইল" fieldValue={postCode}
                                        handleAction={updatePostCode} inputType="email"/>
                    </Grid>
                    <Grid item container md={6} justify="space-between" spacing={3}>
                        <Grid item md={6}>
                            <SelectInputField txtLbl="Start Month" txtLblBng="কাজ শুরুর মাস" dataList={["January", "February"]} fieldValue={month} handleAction={updateMonth} />
                        </Grid>
                        <Grid item md={6}>
                            <SelectInputField txtLbl="Start Year" txtLblBng="শুরুর বছর" dataList={["2001", "2000"]} fieldValue={year} handleAction={updateYear} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Occupation Status" txtLblBng="পেশার বর্তমান অবস্থা" dataList={["Continuing", "Ended"]} fieldValue={month} handleAction={updateMonth} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Date Ended" lblTxtBng="শেষের তারিখ" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Grid>
                    <Grid item md={6}>
                        <TextInputField lblTxt="Reason for leaving" lblTxtBng="কাজ শেষের ব্যাপারে মন্তব্য" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Grid>
                </Grid>
                <Grid item container sx={{justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={savePreviousRentals}>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
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
    );
}

export default CitizenFormCredentials;