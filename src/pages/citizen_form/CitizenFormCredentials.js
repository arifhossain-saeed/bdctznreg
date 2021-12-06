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
        <Box className="page-content">
            <Stack direction="column" spacing={3}>
                <SectionTitle titleText="Highest Education"/>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "48%"}}>
                        <TextInputField lblTxt="Name of the degree" lblTxtBng="পোষ্ট কোড" fieldValue={postCode} handleAction={updateDiv} />
                    </Box>
                    <Box sx={{width: "48%"}}>
                        <TextInputField lblTxt="Institution Name" lblTxtBng="পোষ্ট কোড" fieldValue={postCode} handleAction={updateDiv} />
                    </Box>
                </Box>

                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "48%", display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "45%"}}>
                            <SelectInputField txtLbl="Starting Month" txtLblBng="থানা" dataList={["Jan", "Feb"]}
                                              handleAction={updatePs} fieldValue={ps}/>
                        </Box>
                        <Box sx={{width: "45%"}}>
                            <SelectInputField txtLbl="Starting Year" txtLblBng="থানা" dataList={["2001", "2000"]}
                                              handleAction={updatePs} fieldValue={ps}/>
                        </Box>
                    </Box>
                    <Box sx={{width: "48%", display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "45%"}}>
                            <SelectInputField txtLbl="Completing Month" txtLblBng="থানা" dataList={["Jan", "Feb"]}
                                              handleAction={updatePs} fieldValue={ps}/>
                        </Box>
                        <Box sx={{width: "45%"}}>
                            <SelectInputField txtLbl="Completing Year" txtLblBng="থানা" dataList={["2001", "2000"]}
                                              handleAction={updatePs} fieldValue={ps}/>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "100%"}}>
                        <TextInputField lblTxt="Study Gap Reason [if any]" lblTxtBng="সেকশন/সেক্টর" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Box>
                </Box>

                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={savePresentAddress}>Save</Button>
                </Box>
            </Stack>


            <Stack direction="column" spacing={3}>
                <SectionTitle titleText="Occupation"/>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="Occupation" txtLblBng="থানা" dataList={["Web Developer", "Fullstack Developer"]} handleAction={updatePs} fieldValue={ps}/>
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Organizaiton Name" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                        handleAction={updatePostCode}/>
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Employer Name [if any]" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                        handleAction={updatePostCode}/>
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Organization Address" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                        handleAction={updatePostCode}/>
                    </Box>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Organization phone" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                        handleAction={updatePostCode}/>
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Organization Email" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                        handleAction={updatePostCode} inputType="email"/>
                    </Box>
                    <Box sx={{width: "48%", display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "45%"}}>
                            <SelectInputField txtLbl="Start Month" txtLblBng="মাস" dataList={["January", "February"]} fieldValue={month} handleAction={updateMonth} />
                        </Box>
                        <Box sx={{width: "45%"}}>
                            <SelectInputField txtLbl="Start Year" txtLblBng="বছর" dataList={["2001", "2000"]} fieldValue={year} handleAction={updateYear} />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{width: "22%"}}>
                        <SelectInputField txtLbl="Occupation Status" txtLblBng="মাস" dataList={["Continuing", "Ended"]} fieldValue={month} handleAction={updateMonth} />
                    </Box>
                    <Box sx={{width: "22%"}}>
                        <TextInputField lblTxt="Date Ended" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Box>
                    <Box sx={{width: "48%"}}>
                        <TextInputField lblTxt="Reason for leaving" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode} handleAction={updatePostCode}/>
                    </Box>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={savePreviousRentals}>Save</Button>
                </Box>
            </Stack>

            <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", marginTop: "30px", borderTop: "1px solid black", paddingTop: "30px"}}>
                <Box sx={{width: "31%", display: "flex"}}>
                    <Button variant="contained" color="info" onClick={goToPreviousForm}>Previous</Button>
                </Box>
                <Box sx={{width: "31%", display: "flex", justifyContent: "center"}}>
                    <Button variant="contained" color="error" onClick={cancelRecordCreation} sx={{ml: 2}}>Cancel</Button>
                </Box>
                <Box sx={{width: "31%", display: "flex", justifyContent: "right"}}>
                    <Button variant="contained" color="info" onClick={goToNextForm}>Next</Button>
                </Box>
            </Box>
        </Box>
    </AppLayout>
    );
}

export default CitizenFormCredentials;