import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const AddressPresenter = ({addressLabel, addressData, addressObject}) => {
    return (
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Grid item sm={3}>{addressLabel}</Grid>
            <Grid item sm={1}>:</Grid>
            <Grid item sm={8}>
                {addressObject? Object.keys(addressObject).map((key, index) => {
                    if(addressObject[key] && !key.toString().includes("hereSince")) {
                        return <span style={{textTransform: "capitalize",  }}>{key.toString()} : <strong>{addressObject[key].toString()}</strong>{!key.toString().includes("postCode") ? ",":""}&nbsp;</span>;
                    }
                }) : addressData }
            </Grid>
        </Box>
    )
}

export default AddressPresenter;