import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    sectionTitleBox: {
        borderTop: "1px solid black",
        margin: "30px 0"
    }
})

const SectionTitle = ({titleText}) => {
    const classes = useStyles();
    return(
        <Box className={classes.sectionTitleBox}>
            <Typography variant="h6" sx={{padding: "inherit 30px", backgroundColor: "white", width: "30%", margin: "auto", textAlign: "center", marginTop: "-0.8em"}}>{titleText}</Typography>
        </Box>
    )
}

export default SectionTitle;