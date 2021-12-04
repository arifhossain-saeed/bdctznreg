import React from "react";
import AppLayout from "../../layouts/default";
import useInputState from "../../hooks/useInputState";
import useToggleState from "../../hooks/useToggleState";
import {useNavigate} from "react-router-dom";
import Stack from "@mui/material/Stack";
import SectionTitle from "../../components/page_parts/SectionTitle";
import Box from "@mui/material/Box";
import SelectInputField from "../../components/form_parts/SelectInputField";
import TextInputField from "../../components/form_parts/TextInputField";
import CheckInputField from "../../components/form_parts/CheckInputField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

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

const CitizenFormPermanent = () => {
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
        navigate("/ctzn_form_present")
    }
    const goToNextForm = () => {
        navigate("/ctzn_form_credentials")
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
    return (
        <AppLayout pageTitle="Citizen Form Page [Permanent Address]"
                   pageTitleBangla="নাগরিক তথ্য সংগ্রহ [স্থায়ী ঠিকানা]"
                   pageContent="Citizen Information Collection Form">
            <Box className="page-content">
                <Stack direction="column" spacing={3}>
                    <SectionTitle titleText="Permanent Address"/>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "22%"}}>
                            <SelectInputField txtLbl="Division" txtLblBng="বিভাগ" dataList={names}
                                              handleAction={updateDiv} fieldValue={division}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <SelectInputField txtLbl="District" txtLblBng="জেলা" dataList={names}
                                              handleAction={updateDist} fieldValue={district}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <SelectInputField txtLbl="Sub-District" txtLblBng="উপজেলা" dataList={names}
                                              handleAction={updateSubDist} fieldValue={subDist}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <SelectInputField txtLbl="Police Station" txtLblBng="থানা" dataList={names}
                                              handleAction={updatePs} fieldValue={ps}/>
                        </Box>
                    </Box>

                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "22%"}}>
                            <SelectInputField txtLbl="Post Office" txtLblBng="ডাকঘর" dataList={names}
                                              handleAction={updatePo} fieldValue={po}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Post Code" lblTxtBng="পোষ্ট কোড" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <SelectInputField txtLbl="City | Village" txtLblBng="শহর । গ্রাম" dataList={names}
                                              handleAction={updateCity} fieldValue={city}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <SelectInputField txtLbl="Area" txtLblBng="এলাকা" dataList={names} handleAction={updateArea}
                                              fieldValue={area}/>
                        </Box>
                    </Box>

                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Section/Sector" lblTxtBng="সেকশন/সেক্টর" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Block" lblTxtBng="ব্লক" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Road" lblTxtBng="রাস্তা" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Box>
                        <Box sx={{width: "22%", display: "flex", justifyContent: "space-between"}}>
                            <Box sx={{width: "45%"}}>
                                <TextInputField lblTxt="House" lblTxtBng="বাড়ি" fieldValue={postCode}
                                                handleAction={updatePostCode}/>
                            </Box>
                            <Box sx={{width: "45%"}}>
                                <TextInputField lblTxt="Flat/Apartment" lblTxtBng="ফ্ল্যাট/এপার্টমেন্ট"
                                                fieldValue={postCode} handleAction={updatePostCode}/>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Button variant="contained" color="success" onClick={savePresentAddress}>Save</Button>
                    </Box>
                </Stack>


                <Stack direction="column" spacing={3}>
                    <SectionTitle titleText="Citizen Bio"/>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "48%"}}>
                            <TextInputField lblTxt="Full Name" lblTxtBng="পরিবর্তনের কারন" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Box>

                        <Box sx={{width: "48%", display: "flex", justifyContent: "space-between"}}>
                            <Box sx={{width: "31%"}}>
                                <SelectInputField txtLbl="Birth Day" txtLblBng="থানা" dataList={["1", "2"]}
                                                  handleAction={updatePs} fieldValue={ps}/>
                            </Box>
                            <Box sx={{width: "31%"}}>
                                <SelectInputField txtLbl="Birth Month" txtLblBng="থানা" dataList={["Jan", "Feb"]}
                                                  handleAction={updatePs} fieldValue={ps}/>
                            </Box>
                            <Box sx={{width: "31%"}}>
                                <SelectInputField txtLbl="Birth Year" txtLblBng="থানা" dataList={["2001", "2000"]}
                                                  handleAction={updatePs} fieldValue={ps}/>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Father's Name" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Mother's Name" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="National ID" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <SelectInputField txtLbl="Religion" txtLblBng="থানা" dataList={["Muslim", "Hindu", "Christian", "Buddist", "Jew", "Other"]} handleAction={updatePs} fieldValue={ps}/>
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "22%"}}>
                            <SelectInputField txtLbl="Gender" txtLblBng="থানা" dataList={["Male", "Female", "Other"]}
                                              handleAction={updatePs} fieldValue={ps}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <SelectInputField txtLbl="Marital Status" txtLblBng="থানা" dataList={["Never Married", "Married", "Divorced", "Widowed"]}
                                              handleAction={updatePs} fieldValue={ps}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Passport No [if any]" lblTxtBng="সম্পূর্ন ঠিকানা"
                                            fieldValue={postCode} handleAction={updatePostCode}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Driving License No [if any]" lblTxtBng="সম্পূর্ন ঠিকানা"
                                            fieldValue={postCode} handleAction={updatePostCode}/>
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Email" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                            handleAction={updatePostCode} inputType="email"/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Confirm Email" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                            handleAction={updatePostCode} inputType="email"/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Phone" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Alternate Phone" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Button variant="contained" color="success" onClick={savePresentAddress}>Save</Button>
                    </Box>
                </Stack>

                <Stack direction="column" spacing={3}>
                    <SectionTitle titleText="Emergency Contact"/>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Contact Name" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <SelectInputField txtLbl="Relation" txtLblBng="থানা" dataList={["Parent", "Sibling", "Spouse", "Friend"]} handleAction={updatePs} fieldValue={ps}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Contact Number" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Contact Email" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Box sx={{width: "100%"}}>
                            <TextInputField lblTxt="Full Address" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
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
                        <Button variant="contained" color="error" onClick={cancelRecordCreation}
                                sx={{ml: 2}}>Cancel</Button>
                    </Box>
                    <Box sx={{width: "31%", display: "flex", justifyContent: "right"}}>
                        <Button variant="contained" color="info" onClick={goToNextForm}>Next</Button>
                    </Box>
                </Box>
            </Box>
        </AppLayout>
    );
}

export default CitizenFormPermanent;