import AppLayout from "../../layouts/default";
import Stack from "@mui/material/Stack";
import SectionTitle from "../../components/page_parts/SectionTitle";
import Box from "@mui/material/Box";
import TextInputField from "../../components/form_parts/TextInputField";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import useInputState from "../../hooks/useInputState";
import TableAlternateColorAct from "../../components/page_parts/TableAlternateColorAct";
import {useNavigate} from "react-router-dom";
import SelectInputField from "../../components/form_parts/SelectInputField";
import useToggleState from "../../hooks/useToggleState";


const helpingHands =  [
    {name:"Saeed", occupation:"Cook", address: "7A, 37 Middle Paikpara", phone:"01877354232"},
    {name:"Shahin", occupation:"Care taker", address:"7C, 37 Middle Paikpara", phone:"01911097666"}
];


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

const CitizenRecordsAdmin = () => {
    const [searchText, updateSearchText, resetSearch] = useInputState("");

    const navigate = useNavigate();
    const handleVisibility = () => {
        navigate("/ctzn_detail");
    }

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

    const filterData = () => {

    }

    return(
        <AppLayout
            pageTitle="Citizen Records"
            pageTitleBangla=""
        >
            <Box className="page-content">
                <Stack direction="column" spacing={3}>
                    <SectionTitle titleText="Citizen Records" />
                    <Box sx={{display: "flex", justifyContent: "space-between", marginTop: "-15px !important"}}>
                        <Box sx={{width: "75%"}}>
                            <TextInputField lblTxt="Search" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={searchText} handleAction={updateSearchText}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <Button variant="contained" color="success" onClick={updateSearchText} fullWidth>Search</Button>
                        </Box>
                        {
                            searchText.length > 0 ? (
                                <Box sx={{display: "flex"}}>
                                    <Box sx={{width: "20%"}}>
                                        <Typography variant="p">Showing result(s) for: </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="p"><strong>{searchText}</strong></Typography>
                                    </Box>
                                </Box>
                            ) : ""
                        }
                    </Box>

                    <hr/>

                    <Box sx={{display: "flex", justifyContent: "space-between", marginTop: "30px !important"}}>
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
                            <TextInputField lblTxt="Area" lblTxtBng="সেকশন/সেক্টর" fieldValue={postCode} handleAction={updatePostCode} />
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <TextInputField lblTxt="Keyword" lblTxtBng="ব্লক" fieldValue={postCode} handleAction={updatePostCode} />
                        </Box>
                        <Box sx={{width: "22%", display: "flex", justifyContent: "space-between"}}>
                            <Box sx={{width: "45%"}}>
                                <TextInputField lblTxt="Age From" lblTxtBng="বাড়ি" fieldValue={postCode} handleAction={updatePostCode} inputType="number" />
                            </Box>
                            <Box sx={{width: "45%"}}>
                                <TextInputField lblTxt="Age To" lblTxtBng="ফ্ল্যাট/এপার্টমেন্ট" fieldValue={postCode} handleAction={updatePostCode} inputType="number" />
                            </Box>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <Button variant="contained" color="success" onClick={filterData} fullWidth>Filter</Button>
                        </Box>
                    </Box>

                    <hr/>


                    <Box sx={{display: "flex", justifyContent: "space-between", marginTop: "30px !important"}}>
                        <TableAlternateColorAct tableData={helpingHands} handleVisibilityAction={handleVisibility} />
                    </Box>
                </Stack>
            </Box>
        </AppLayout>
    );
}


export default CitizenRecordsAdmin;