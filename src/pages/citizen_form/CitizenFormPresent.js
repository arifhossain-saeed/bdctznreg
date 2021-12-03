import React from "react";
import AppLayout from "../../layouts/default";
import Box from "@mui/material/Box";
import SectionTitle from "../../components/page_parts/SectionTitle";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import useTheme from "@mui/material/styles/useTheme";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import SelectInputField from "../../components/form_parts/SelectInputField";
import TextField from "@mui/material/TextField";
import useInputState from "../../hooks/useInputState";
import TextInputField from "../../components/form_parts/TextInputField";
import CheckInputField from "../../components/form_parts/CheckInputField";
import useToggleState from "../../hooks/useToggleState";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import TableAlternateColor from "../../components/page_parts/TableAlternateColor";
import {useNavigate} from "react-router-dom";

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

const CitizenFormPresent = () => {
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
    const goToNextForm = () => {
        navigate("/ctzn_form_permanent")
    }
    const previousRentals = [
        {address: "54/1 Middle Paikpara", tenure: "July 2013 - August 2017", owner: "Do not know", phone: "Do not know"},
        {address: "269/3 Ahmednagar Paikpara", tenure: "July 2006 - June 2013", owner: "Osman Gani", phone: "Do not know"},
    ]

    return (
    <AppLayout pageTitle="Citizen Form Page [Present Address]"  pageTitleBangla="নাগরিক তথ্য সংগ্রহ [বর্তমান ঠিকানা]" pageContent="Citizen Information Collection Form">
        <Box className="page-content">
            <Stack direction="column" spacing={3}>
                <SectionTitle titleText="Present Address Information" />
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="Division" txtLblBng="বিভাগ" dataList={names} handleAction={updateDiv}  fieldValue={division} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="District" txtLblBng="জেলা" dataList={names} handleAction={updateDist}  fieldValue={district} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="Sub-District" txtLblBng="উপজেলা" dataList={names} handleAction={updateSubDist}  fieldValue={subDist} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="Police Station" txtLblBng="থানা" dataList={names} handleAction={updatePs}  fieldValue={ps} />
                    </Box>
                </Box>

                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="Post Office" txtLblBng="ডাকঘর" dataList={names} handleAction={updatePo}  fieldValue={po} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Post Code" lblTxtBng="পোষ্ট কোড" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="City | Village" txtLblBng="শহর । গ্রাম" dataList={names} handleAction={updateCity}  fieldValue={city} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="Area" txtLblBng="এলাকা" dataList={names} handleAction={updateArea}  fieldValue={area} />
                    </Box>
                </Box>

                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Section/Sector" lblTxtBng="সেকশন/সেক্টর" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Block" lblTxtBng="ব্লক" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Road" lblTxtBng="রাস্তা" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                    <Box sx={{width: "22%", display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "45%"}}>
                            <TextInputField lblTxt="House" lblTxtBng="বাড়ি" fieldValue={postCode} handleAction={updatePostCode} />
                        </Box>
                        <Box sx={{width: "45%"}}>
                            <TextInputField lblTxt="Flat/Apartment" lblTxtBng="ফ্ল্যাট/এপার্টমেন্ট" fieldValue={postCode} handleAction={updatePostCode} />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "48%", display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "45%"}}>
                            <SelectInputField txtLbl="Month" txtLblBng="মাস" dataList={["January", "February"]} fieldValue={month} handleAction={updateMonth} />
                        </Box>
                        <Box sx={{width: "45%"}}>
                            <SelectInputField txtLbl="Year" txtLblBng="বছর" dataList={["2001", "2000"]} fieldValue={year} handleAction={updateYear} />
                        </Box>
                    </Box>
                    <Box sx={{width: "48%"}}>
                        <TextInputField lblTxt="Nearest Landmark" lblTxtBng="নিকটস্থ পরিচিত স্থান" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                </Box>

                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Land Owner" lblTxtBng="সম্পত্তির অধিকারী" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Father's Name" lblTxtBng="সম্পত্তির অধিকারীর পিতার নাম" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="NID No" lblTxtBng="এনআইডি নং" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Phone" lblTxtBng="ফোন" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <CheckInputField boxWidth="50%" inputChecked={isPermanent} handleAction={updateIsPermanent} lblTxt="Permanent Address" lblTxtBng="স্থায়ী ঠিকানা" />
                </Box>

                <Box sx={{display:"flex", justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={savePresentAddress}>Save</Button>
                </Box>
            </Stack>


            <Stack direction="column" spacing={3}>
                <SectionTitle titleText="Previous Rental Addresses" />
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    {<Alert variant="filled" severity="info" sx={{width: "100%"}}>
                        The records are empty
                    </Alert>
                    }
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "48%"}}>
                        <TextInputField lblTxt="Land Owner" lblTxtBng="সম্পত্তির অধিকারী" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="NID No" lblTxtBng="এনআইডি নং" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Phone" lblTxtBng="ফোন" fieldValue={postCode} handleAction={updatePostCode} />
                    </Box>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <TextInputField lblTxt="Full Address" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode} handleAction={updatePostCode} />
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <TextInputField lblTxt="Reason for leaving" lblTxtBng="পরিবর্তনের কারন" fieldValue={postCode} handleAction={updatePostCode} />
                </Box>
                <Box sx={{width: "100%", display:"flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "31%", display:"flex", justifyContent: "left"}}>
                        <Button variant="contained" color="error" onClick={cancelRecordCreation}>Cancel</Button>
                    </Box>
                    <Box sx={{width: "31%", display:"flex", justifyContent: "center"}}>
                        <Button variant="contained" color="success" onClick={savePreviousRentals}>Save</Button>
                    </Box>
                    <Box sx={{width: "31%", display:"flex", justifyContent: "right"}}>
                        <Button variant="contained" color="info" onClick={goToNextForm}>Next</Button>
                    </Box>
                </Box>
            </Stack>
        </Box>
    </AppLayout>
    )
};

export default CitizenFormPresent;