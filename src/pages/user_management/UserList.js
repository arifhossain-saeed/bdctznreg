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
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";


const helpingHands =  [
    {name:"Saeed", occupation:"Cook", address: "7A, 37 Middle Paikpara", phone:"01877354232"},
    {name:"Shahin", occupation:"Care taker", address:"7C, 37 Middle Paikpara", phone:"01911097666"}
];

const UserList = () => {
    const [searchText, updateSearchText, resetSearch] = useInputState("");

    const navigate = useNavigate();
    const handleVisibility = () => {
        navigate("/ctzn_detail");
    }

    return(
        <AppLayout
            pageTitle="Citizen Records"
            pageTitleBangla=""
        >
            <Grid container rowSpacing={3} className="page-content">

                <SectionTitle titleText="User List" titleTextBng="" textStyle={{marginTop: "-2.2em"}} />
                <Grid item container rowSpacing={2} justify="space-between">
                    <Grid item container justify="space-between" spacing={3} rowSpacing={2}>
                        <Grid item sm={9}>
                            <TextInputField lblTxt="Search" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={searchText} handleAction={updateSearchText} inpStyle={{marginTop: "-.8em"}}/>
                        </Grid>
                        <Grid item sm={3}>
                            <Button variant="contained" color="success" onClick={updateSearchText} fullWidth>Search</Button>
                        </Grid>
                    </Grid>
                </Grid>

                {
                    searchText.length > 0 ? (
                        <Grid item container spacing={3}>
                            <Grid item sm={3}>
                                <Typography variant="p">Showing result(s) for: </Typography>
                            </Grid>
                            <Grid item sm={9}>
                                <Typography variant="p"><strong>{searchText}</strong></Typography>
                            </Grid>
                        </Grid>
                    ) : ""
                }


                <Grid item container justify="space-between" sx={{marginTop: "30px !important"}}>
                    <TableAlternateColorAct tableData={helpingHands} handleVisibilityAction={handleVisibility} />
                </Grid>


                <Grid item container sx={{margin: "30px 0"}}>
                    <Box sx={{border: "1px solid black", width: "100%"}}></Box>
                </Grid>
                <Grid item container sx={{justifyContent: "center", alignItems: "center"}}>
                    <Button variant="contained" sx={{ backgroundColor: "#97B4FF", fontWeight: 300, margin: "0 auto"}}>{"Create User | ইউজার তৈরি করুন"}</Button>
                </Grid>
            </Grid>
        </AppLayout>
    );
}


export default UserList;