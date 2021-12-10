import AppLayout from "../../layouts/default";
import Stack from "@mui/material/Stack";
import SectionTitle from "../../components/page_parts/SectionTitle";
import Box from "@mui/material/Box";
import TableAlterateColor from "../../components/page_parts/TableAlternateColor";
import TextInputField from "../../components/form_parts/TextInputField";
import SelectInputField from "../../components/form_parts/SelectInputField";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import useInputState from "../../hooks/useInputState";
import TableAlternateColorAct from "../../components/page_parts/TableAlternateColorAct";
import {useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";


const helpingHands =  [
    {name:"Saeed", occupation:"Cook", address: "7A, 37 Middle Paikpara", phone:"01877354232"},
    {name:"Shahin", occupation:"Care taker", address:"7C, 37 Middle Paikpara", phone:"01911097666"}
];

const CitizenRecords = () => {
    const [searchText, updateSearchText, resetSearch] = useInputState("");

    const navigate = useNavigate();
    const handleVisibility = () => {
        navigate("/ctzn_detail");
    }

    return(
        <AppLayout
            pageTitle="Citizen Records"
            pageTitleBangla="নাগরিক তালিকা"
        >
            <Grid container rowSpacing={3} className="page-content">
                <SectionTitle titleText="Citizen Records" titleTextBng="নাগরিক তালিকা" textStyle={{marginTop: "-2.2em"}} />
                <Grid container rowSpacing={3}>
                    <Grid item container spacing={3} justify="space-between">
                        <Grid item md={9}>
                            <TextInputField lblTxt="Search" lblTxtBng="সন্ধান" fieldValue={searchText} handleAction={updateSearchText} inpStyle={{marginTop: "-.8em"}}/>
                        </Grid>
                        <Grid item md={3}>
                            <Button variant="contained" color="success" onClick={updateSearchText} fullWidth>Search | &nbsp;<span className="banglaText">খুঁজি</span></Button>
                        </Grid>
                    </Grid>

                    {
                        searchText.length > 0 ? (
                            <Grid item container rowSpacing={3} spacing={3}>
                                <Grid item md={3}>
                                    <Typography variant="p">Showing result(s) for: </Typography>
                                </Grid>
                                <Grid item md={9}>
                                    <Typography variant="p"><strong>{searchText}</strong></Typography>
                                </Grid>
                            </Grid>
                        ) : ""
                    }


                    <Grid item container>
                        <TableAlternateColorAct tableData={helpingHands} handleVisibilityAction={handleVisibility} />
                    </Grid>
                </Grid>
            </Grid>
        </AppLayout>
    );
}


export default CitizenRecords;