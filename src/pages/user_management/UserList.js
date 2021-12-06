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
            <Box className="page-content">
                <Stack direction="column" spacing={3}>
                    <SectionTitle titleText="User Records" />
                    <Box sx={{display: "flex", justifyContent: "space-between", marginTop: "-15px !important"}}>
                        <Box sx={{width: "75%"}}>
                            <TextInputField lblTxt="Search" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={searchText} handleAction={updateSearchText}/>
                        </Box>
                        <Box sx={{width: "22%"}}>
                            <Button variant="contained" color="success" onClick={updateSearchText} fullWidth>Search</Button>
                        </Box>
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
                    <hr/>


                    <Box sx={{display: "flex", justifyContent: "space-between", marginTop: "30px !important"}}>
                        <TableAlternateColorAct tableData={helpingHands} handleVisibilityAction={handleVisibility} />
                    </Box>
                </Stack>


                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button variant="contained" sx={{ backgroundColor: "#97B4FF", fontWeight: 300, margin: "1.5em auto"}}>{"Create User | ইউজার তৈরি করুন"}</Button>
                </Box>
            </Box>
        </AppLayout>
    );
}


export default UserList;