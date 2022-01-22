import SectionTitle from "../../page_parts/SectionTitle";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import TextInputField from "../TextInputField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React, {useState, useEffect} from "react";
import useInputState from "../../../hooks/useInputState";

export const CitizenPreviousRental = ({activeCitizen}) => {
    const previousRentals = [
        {address: "54/1 Middle Paikpara", tenure: "July 2013 - August 2017", owner: "Do not know", phone: "Do not know"},
        {address: "269/3 Ahmednagar Paikpara", tenure: "July 2006 - June 2013", owner: "Osman Gani", phone: "Do not know"},
    ]

    const [preLandlord, updatePreLandlord, resetPreLandlord] = useInputState("");
    const [prellNid, updatePrellNid, resetPrellNid] = useInputState("");
    const [prellPhone, updatePrellPhone, resetPrellPhone] = useInputState("");
    const [preFullAddress, updatePreFullAddress, resetPreFullAddress] = useInputState("");
    const [preChangeReason, updatePreChangeReason, resetChangeReason] = useInputState("");

    const savePreviousRentals = () => {

    }

    return(
        <Grid item container rowSpacing={3}>
            <SectionTitle titleText="Previous Rental Addresses" titleTextBng="পূর্ববর্তী ঠিকানা" textStyle={{marginTop: "-2.2em"}} />
            <Grid item container>
                {<Alert variant="filled" severity="info" sx={{width: "100%"}}>
                    The records are empty
                </Alert>
                }
            </Grid>
            <Grid item container justify="space-between" spacing={3}>
                <Grid item md={6}>
                    <TextInputField lblTxt="Land Owner" lblTxtBng="সম্পত্তির অধিকারী" fieldValue={preLandlord} handleAction={updatePreLandlord} />
                </Grid>
                <Grid item md={3}>
                    <TextInputField lblTxt="NID No" lblTxtBng="এনআইডি নং" fieldValue={prellNid} handleAction={updatePrellNid} />
                </Grid>
                <Grid item md={3}>
                    <TextInputField lblTxt="Phone" lblTxtBng="ফোন" fieldValue={prellPhone} handleAction={updatePrellPhone} />
                </Grid>
            </Grid>
            <Grid item container>
                <TextInputField lblTxt="Full Address" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={preFullAddress} handleAction={updatePreFullAddress} />
            </Grid>
            <Grid item container>
                <TextInputField lblTxt="Reason for leaving" lblTxtBng="পরিবর্তনের কারন" fieldValue={preChangeReason} handleAction={updatePreChangeReason} />
            </Grid>
            <Grid item container sx={{justifyContent: "center"}}>
                <Button variant="contained" color="success" onClick={savePreviousRentals}>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
            </Grid>

            <Grid item container sx={{margin: "30px 0"}}>
                <Box sx={{border: "1px solid black", width: "100%"}}></Box>
            </Grid>
        </Grid>
    )
}

export default CitizenPreviousRental;