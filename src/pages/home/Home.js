import React from "react";
import AppLayout from "../../layouts/default";

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles'
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
    tabPanelBg: {
        backgroundColor: "#ededed"
    }
})

function Home () {
    const theme = useTheme();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return(
        <AppLayout pageTitle="Home" showRightNav={false} showLeftNav={false}>
            <Box sx={{ backgroundColor: 'background.paper', margin: "20px 0"}}>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Citizen" {...a11yProps(0)} />
                        <Tab label="Land Owner" {...a11yProps(1)} />
                        <Tab label="Administraiton" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction} className={classes.tabPanelBg}>
                        Citizen
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction} className={classes.tabPanelBg}>
                        Land Owner
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction} className={classes.tabPanelBg}>
                        Administration
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </AppLayout>
    );
}

export default Home;