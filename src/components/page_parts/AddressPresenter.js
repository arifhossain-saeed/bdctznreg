import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const AddressPresenter = ({addressLabel, addressData, addressObject,addressLabelBng}) => {
    return (
        <Grid item container justify="space-between" rowSpacing={3}>
            <Grid item sm={3}>{addressLabel} {addressLabelBng ? <>[<span className="banglaText">{addressLabelBng}</span>]</>:""}</Grid>
            <Grid item sm={1}>:</Grid>
            <Grid item sm={8}>
                {addressObject? Object.keys(addressObject).map((key, index) => {
                    if(addressObject[key] && !key.toString().includes("hereSince")) {
                        return <span key={index} style={{textTransform: "capitalize",  }}>{key.toString()} : <strong>{addressObject[key].toString()}</strong>{!key.toString().includes("postCode") ? ",":""}&nbsp;</span>;
                    }
                }) : addressData }
            </Grid>
        </Grid>
    )
}

export default AddressPresenter;