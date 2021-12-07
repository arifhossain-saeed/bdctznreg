import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
    sectionTitleBox: {
        borderTop: "1px solid black",
        margin: "25px 0 !important"
    }
})

const SectionTitle = ({titleText, titleTextBng, textStyle}) => {
    const classes = useStyles();
    return(
        <Grid item container className={classes.sectionTitleBox}>
            <Typography variant="h6" sx={{paddingLeft: "50px !important", paddingRight: "50px !important", backgroundColor: "white", margin: "auto", textAlign: "center", marginTop: "-1.1em"}} style={textStyle}>{titleText} | <span className="banglaText">{titleTextBng}</span></Typography>
        </Grid>
    )
}

export default SectionTitle;