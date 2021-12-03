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

const helpingHands =  [
    {name:"Saeed", occupation:"Cook", address: "7A, 37 Middle Paikpara", phone:"01877354232"},
    {name:"Shahin", occupation:"Care taker", address:"7C, 37 Middle Paikpara", phone:"01911097666"}
];

const CitizenFormHelps = () => {
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
    return(
    <AppLayout pageTitle="Citizen Form Page [Helping Hands]"  pageTitleBangla="নাগরিক তথ্য সংগ্রহ [সহযোগীতাকারি]" pageContent="Citizen Information Collection Form">
        <Box className="page-content">
            <Stack direction="column" spacing={3}>
                <SectionTitle titleText="Helping Hands" />
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <TableAlterateColor tableData={helpingHands} />
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "48%"}}>
                        <TextInputField lblTxt="Full Name" lblTxtBng="পোষ্ট কোড" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Father's Name" lblTxtBng="পোষ্ট কোড" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Mother's Name" lblTxtBng="পোষ্ট কোড" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                </Box>

                <Box sx={{display: "flex", justifyContent: "space-between"}}>

                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Birth Date" lblTxtBng="পোষ্ট কোড" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="National ID" lblTxtBng="পোষ্ট কোড" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="Gender" txtLblBng="থানা" dataList={["Male", "Female", "Other"]} handleAction={updatePs} fieldValue={ps}/>
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="Religion" txtLblBng="থানা" dataList={["Muslim", "Hindu", "Christian", "Buddist", "Jew", "Other"]} handleAction={updatePs}  fieldValue={ps} />
                    </Box>
                </Box>

                <Box sx={{display: "flex", justifyContent: "space-between"}}>

                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="Marital Status" txtLblBng="থানা" dataList={["Never Married", "Married", "Divorced", "Widowed"]} handleAction={updatePs} fieldValue={ps}/>
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="Education" txtLblBng="থানা" dataList={["PhD", "Masters", "Bachelors", "High School", "Primary School", "Alphabetical"]} handleAction={updatePs} fieldValue={ps}/>
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Phone" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Email" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode} handleAction={updatePostCode} inputType="email"/>
                    </Box>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="Occupation" txtLblBng="থানা" dataList={["Maid", "Driver", "Care Taker", "Gardner"]} handleAction={updatePs} fieldValue={ps}/>
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Phone" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Passport No [if any]" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Driving License No [if any]" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Box>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "100%"}}>
                        <TextInputField lblTxt="Full Address" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Box>

                </Box>
            </Stack>


            <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", marginTop: "30px"}}>
                <Box sx={{width: "31%", display: "flex"}}>
                    <Button variant="contained" color="info" onClick={goToPreviousForm}>Previous</Button>
                    <Button variant="contained" color="error" onClick={cancelRecordCreation}
                            sx={{ml: 2}}>Cancel</Button>

                </Box>
                <Box sx={{width: "31%", display: "flex", justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={savePreviousRentals}>Add</Button>
                </Box>
                <Box sx={{width: "31%", display: "flex", justifyContent: "right"}}>
                    <Button variant="contained" color="info" onClick={goToNextForm}>Next</Button>
                </Box>
            </Box>
        </Box>
    </AppLayout>
)};

export default CitizenFormHelps;