import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const LabelAndData = ({questionLabel, answerData}) => {
    return(
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Grid item sm={4}  style={{textTransform: "capitalize"}}>{questionLabel}</Grid>
            <Grid item sm={2}>:</Grid>
            <Grid item sm={6}><strong>{answerData}</strong></Grid>
        </Box>
    )
}

export default LabelAndData;