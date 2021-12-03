import React from "react";
import { CssBaseline } from "@mui/material";
import Container from "@mui/material/Container";
import { makeStyles } from '@mui/styles'
import { theme } from "../../theme";
import MainNavigation from "../../components/layout_parts/MainNavigation";
import LeftNavigation from "../../components/layout_parts/LeftNavigation";
import RightNavigation from "../../components/layout_parts/RightNavigation";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import BDGovtLogo from "../../assets/images/bangladeshGovtLogo.png";
import PoliceLogo from "../../assets/images/bangladeshPoliceLogo.png";


const useStyles = makeStyles({
    app: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    container: {
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    mainNavigation: {
        display: "flex",
        justifyContent: "space-between"
    },
    mainContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px 20px"
    },
    pageTitle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center"
    },
    footer: {
        minWidth: "100hw",
        padding: "10px 20",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "auto"
    },
    bengaliText: {
        fontFamily: 'Bangla, sans-serif !important',
        fontSize: '1.6em !important'
    }
});

const AppLayout = ({pageTitle = "", pageTitleBangla="", children, showLeftNav=false, showRightNav=false}) => {
    const classes = useStyles();

    return (
    <div className={classes.app}>
        <CssBaseline />

        <Container className={classes.container}>
            {/*<MainNavigation  className={classes.mainNavigation} />*/}

            <Grid container className={classes.mainContent}>
                {showLeftNav ? <Grid item sm={2}><LeftNavigation /></Grid> : <></>}

                <Grid item sm={showLeftNav && showRightNav ? 8: showLeftNav || showRightNav ? 10 : 12}>
                    <header className={classes.header}>
                        <img src={BDGovtLogo} alt="BD Logo" height="64px" />
                        <div className={classes.pageTitle}>
                            <Typography variant="h5">BD Citizen Registry | { pageTitle }</Typography>
                            <Typography variant="h6" className="banglaTextHeading">বাংলাদেশ নাগরিক নথি | { pageTitleBangla }</Typography>
                        </div>
                        <img src={PoliceLogo} alt="Police Logo" height="64px" />
                    </header>
                    <hr/>
                    <br/>

                    {children}

                    <br/>
                    <hr/>
                    <footer className={classes.footer}>
                        <Typography variant="p">Serving the people is our first objective</Typography>
                        <Typography variant="p">Peoples Republic of Bangladesh</Typography>
                    </footer>

                </Grid>

                {showRightNav ? <Grid item sm={2}><RightNavigation /></Grid> : <></>}
            </Grid>
        </Container>
    </div>
)};

export default AppLayout;