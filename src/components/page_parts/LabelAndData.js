import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const LabelAndData = ({questionLabel, questionLabelBng, answerData, lblStyle, ansStyle}) => {
    return(
        <Grid container justify="space-between">
            <Grid item xs={4} sm={4} style={{textTransform: "capitalize"}} sx={lblStyle}>{questionLabel} {questionLabelBng ? <>[<span className="banglaText">{questionLabelBng}</span>]</> : ""}</Grid>
            <Grid item xs={2} sm={2} sx={{textAlign: "center"}}>:</Grid>
            <Grid item xs={6} sm={6} sx={ansStyle}><strong>{answerData}</strong></Grid>
        </Grid>
    )
}

export default LabelAndData;