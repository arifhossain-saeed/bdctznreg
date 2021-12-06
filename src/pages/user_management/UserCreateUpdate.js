import React, {useState} from "react";
import AppLayout from "../../layouts/default";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import LabelAndData from "../../components/page_parts/LabelAndData";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";

import CtznPicture from "../../assets/images/userPicture.png";
import Typography from "@mui/material/Typography";
import SectionTitle from "../../components/page_parts/SectionTitle";
import TableAlterateColor from "../../components/page_parts/TableAlternateColor";
import TableAlternateColor from "../../components/page_parts/TableAlternateColor";
import Button from "@mui/material/Button";
import AddressPresenter from "../../components/page_parts/AddressPresenter";
import TextInputField from "../../components/form_parts/TextInputField";
import useInputState from "../../hooks/useInputState";
import SelectInputField from "../../components/form_parts/SelectInputField";

const useStyles = makeStyles({
})

const UserCreateUpdate = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState({
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
    });

    const [userName, updateUserName] = useInputState("");

    const cancelOperation = () => {};
    const clearFields = () => {};
    const saveRecord = () => {};

    return (
        <AppLayout pageTitle="User Create/Update" pageTitleBangla="নাগরিক তথ্য বিবরনী" pageContent="Details about a citizen">
            <Box className="page-content">
                <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between"}}>
                    <Box className="user-information" sx={{width: "75%"}}>
                        <Stack direction="column" spacing={3}>
                            <Box sx={{ width:"100%", display: "flex", justifyContent: "space-between"}}>
                                <Box sx={{width: "46%"}}>
                                    <TextInputField lblTxt="Name" lblTxtBng="সেকশন/সেক্টর" fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                                <Box sx={{width: "46%", }}>
                                    <TextInputField lblTxt="Badge / ID" lblTxtBng="সেকশন/সেক্টর" fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                            </Box>
                            <Box sx={{ width:"100%", display: "flex", justifyContent: "space-between"}}>
                                <Box sx={{width: "46%"}}>
                                    <TextInputField lblTxt="Designation" lblTxtBng="সেকশন/সেক্টর" fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                                <Box sx={{width: "46%", }}>
                                    <TextInputField lblTxt="Station / Office" lblTxtBng="সেকশন/সেক্টর" fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                            </Box>
                            <Box sx={{ width:"100%", display: "flex", justifyContent: "space-between"}}>
                                <Box sx={{width: "19%"}}>
                                    <SelectInputField txtLbl="Joined Day" txtLblBng="সেকশন/সেক্টর" dataList={["1", "2", "3"]} fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                                <Box sx={{width: "19%"}}>
                                    <SelectInputField txtLbl="Month" txtLblBng="সেকশন/সেক্টর" dataList={["Jan", "Feb", "Mar"]} fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                                <Box sx={{width: "19%"}}>
                                    <SelectInputField txtLbl="Year" txtLblBng="সেকশন/সেক্টর" dataList={["1991", "1990"]} fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                                <Box sx={{width: "19%", }}>
                                    <SelectInputField txtLbl="Status" txtLblBng="সেকশন/সেক্টর" dataList={["Active", "Inactive"]} fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                            </Box>
                            <Box sx={{ width:"100%", display: "flex", justifyContent: "space-between"}}>
                                <Box sx={{width: "46%"}}>
                                    <TextInputField lblTxt="Phone" lblTxtBng="সেকশন/সেক্টর" fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                                <Box sx={{width: "46%", }}>
                                    <TextInputField lblTxt="Email" lblTxtBng="সেকশন/সেক্টর" fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                            </Box>
                            <Box sx={{ width:"100%", display: "flex", justifyContent: "space-between"}}>
                                <Box sx={{width: "46%"}}>
                                    <TextInputField lblTxt="Supervisor" lblTxtBng="সেকশন/সেক্টর" fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                                <Box sx={{width: "46%", }}>
                                    <TextInputField lblTxt="Supervisor Designation" lblTxtBng="সেকশন/সেক্টর" fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                            </Box>
                            <Box sx={{ width:"100%", display: "flex", justifyContent: "space-between"}}>
                                <Box sx={{width: "46%"}}>
                                    <TextInputField lblTxt="Station In-charge" lblTxtBng="সেকশন/সেক্টর" fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                                <Box sx={{width: "46%", }}>
                                    <TextInputField lblTxt="In-charge Designation" lblTxtBng="সেকশন/সেক্টর" fieldValue={userName} handleAction={updateUserName} />
                                </Box>
                            </Box>
                        </Stack>
                    </Box>

                    <Box className="user-image" sx={{width: "22%"}}>
                        <img src={postData.image} style={{width: "180px", height: "200px", maxWidth:"100%", padding:"5px", borderRadius: "10px", backgroundColor: "#DDDDDD", texAlign: "center"}} alt="User Image"/>
                        <br/>
                        <FileBase type="file" multiple={ false } onDone={({base64}) => setPostData({...postData, image: base64})} />
                    </Box>
                </Box>
                <Box sx={{width: "100%", display: "flex", justifyContent: "space-between", marginTop: "30px", borderTop: "1px solid black", paddingTop: "30px"}}>
                    <Box sx={{width: "31%", display: "flex"}}>
                        <Button variant="contained" color="error" onClick={cancelOperation}>Cancel</Button>
                    </Box>
                    <Box sx={{width: "31%", display: "flex", justifyContent: "center"}}>
                        <Button variant="contained" color="info" onClick={clearFields} sx={{ml: 2}}>Clear</Button>
                    </Box>
                    <Box sx={{width: "31%", display: "flex", justifyContent: "right"}}>
                        <Button variant="contained" color="success" onClick={saveRecord}>Save</Button>
                    </Box>
                </Box>
            </Box>
        </AppLayout>
    );
}

export default UserCreateUpdate;