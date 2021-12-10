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
import Grid from "@mui/material/Grid";


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

    const filterData = () => {

    }

    return(
        <AppLayout
            pageTitle="Citizen Records"
            pageTitleBangla="নাগরিক তালিকা"
        >
            <Grid container rowSpacing={3} className="page-content">
                <SectionTitle titleText="Citizen Records" titleTextBng="নাগরিক তালিকা" textStyle={{marginTop: "-2.2em"}}/>
                <Grid item container rowSpacing={2} spacing={3} justify="space-between">
                    <Grid item md={9}>
                        <TextInputField lblTxt="Search" lblTxtBng="সন্ধান" fieldValue={searchText} handleAction={updateSearchText}/>
                    </Grid>
                    <Grid item md={3}>
                        <Button variant="contained" color="success" onClick={updateSearchText} fullWidth>Search | &nbsp;<span className="banglaText">খুঁজি</span></Button>
                    </Grid>
                    {
                        searchText.length > 0 ? (
                            <Grid item container>
                                <Grid item md={3}>
                                    <Typography variant="p">Showing result(s) for: </Typography>
                                </Grid>
                                <Grid item md={9}>
                                    <Typography variant="p"><strong>{searchText}</strong></Typography>
                                </Grid>
                            </Grid>
                        ) : ""
                    }
                </Grid>

                <Grid item container rowSpacing={2} spacing={3} justify="space-between">
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Division" txtLblBng="বিভাগ" dataList={names} handleAction={updateDiv}  fieldValue={division} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="District" txtLblBng="জেলা" dataList={names} handleAction={updateDist}  fieldValue={district} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Sub-District" txtLblBng="উপজেলা" dataList={names} handleAction={updateSubDist}  fieldValue={subDist} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Police Station" txtLblBng="থানা" dataList={names} handleAction={updatePs}  fieldValue={ps} />
                    </Grid>
                </Grid>

                <Grid item container spacing={3} justify="space-between">
                    <Grid item md={3}>
                        <TextInputField lblTxt="Area" lblTxtBng="সেকশন/সেক্টর" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Keyword" lblTxtBng="ব্লক" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                    <Grid item container md={3} justify="space-between">
                        <Grid sx={{width: "45%"}}>
                            <TextInputField lblTxt="Age From" lblTxtBng="বাড়ি" fieldValue={postCode} handleAction={updatePostCode} inputType="number" />
                        </Grid>
                        <Grid sx={{width: "45%"}}>
                            <TextInputField lblTxt="Age To" lblTxtBng="ফ্ল্যাট/এপার্টমেন্ট" fieldValue={postCode} handleAction={updatePostCode} inputType="number" />
                        </Grid>
                    </Grid>
                    <Grid item md={3}>
                        <Button variant="contained" color="success" onClick={filterData} fullWidth>Filter | &nbsp;<span className="banglaText">বাছাই</span></Button>
                    </Grid>
                </Grid>

                <Grid item container justify="space-between">
                    <TableAlternateColorAct tableData={helpingHands} handleVisibilityAction={handleVisibility} />
                </Grid>
            </Grid>
        </AppLayout>
    );
}

export default CitizenRecordsAdmin;