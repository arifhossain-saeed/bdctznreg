import React from "react";
import AppLayout from "../../layouts/default";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import LabelAndData from "../../components/page_parts/LabelAndData";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

import CtznPicture from "../../assets/images/userPicture.png";
import Typography from "@mui/material/Typography";
import SectionTitle from "../../components/page_parts/SectionTitle";
import TableAlterateColor from "../../components/page_parts/TableAlternateColor";
import TableAlternateColor from "../../components/page_parts/TableAlternateColor";
import Button from "@mui/material/Button";
import AddressPresenter from "../../components/page_parts/AddressPresenter";

const useStyles = makeStyles({
})

const UserDetail = () => {
    const classes = useStyles();

    const basicInfo = [
        {label: "Name", data: "Syed Arif Hossain"},
        {label: "National ID No", data: "26962347234"},
        {label: "Father\'s Name", data: "Syed Akhter Hossain"},
        {label: "Mother\'s Name", data: "Begum Shahanaz Akter"},
        {label: "Date of Birth", data: "1st December, 1987"},
        {label: "Religion", data: "Islam"},
        {label: "Education", data: "Masters in IT"},
        {label: "Marital Status", data: "Married"}
    ]

    const contactInfo = [
        {label: "Phone", data: "01911097666"},
        {label: "Email", data: "arifhossain.saeed@gmail.com"}
    ]

    const addresses = {
        permanent: {
            flatNo: "",
            houseNo: "Maulana Misri Bari",
            roadNo: "",
            blockNo: "",
            sectorNo: "",
            areaName: "",
            locale: "South Hatibandha",
            section: "",
            postOffice: "Matinpur",
            policeStation: "Sundarganj",
            district: "Gaibandha",
            division: "Rangpur",
            postCode: "5721"
        },
        present: {
            flatNo: "7A",
            houseNo: "37",
            roadNo: "Central Road",
            blockNo: "",
            sectorNo: "",
            areaName: "Middle Paikpara",
            locale: "Mirpur",
            section: "1",
            postOffice: "Mirpur",
            policeStation: "Mirpur",
            district: "Dhaka",
            division: "Dhaka",
            postCode: "1216",
            hereSince: "1st December, 2017"
        },
        previousAddresses: [
            {
                flatNo: "",
                houseNo: "59/3",
                roadNo: "",
                blockNo: "",
                sectorNo: "",
                areaName: "Middle Paikpara",
                locale: "Mirpur",
                section: "1",
                postOffice: "Mirpur",
                policeStation: "Mirpur",
                district: "Dhaka",
                division: "Dhaka",
                postCode: "1216",
                leavingReason: "Better Accommodation",
                owner: {
                    name: "Do not know",
                    phone: "Not Available"
                }
            },
            {
                flatNo: "",
                houseNo: "269/1",
                roadNo: "",
                blockNo: "",
                sectorNo: "",
                areaName: "Middle Paikpara",
                locale: "Mirpur",
                section: "1",
                postOffice: "Mirpur",
                policeStation: "Mirpur",
                district: "Dhaka",
                division: "Dhaka",
                postCode: "1216",
                leavingReason: "Land lord requested",
                owner: {
                    name: "Osman Gani",
                    phone: "Not Available"
                }
            }
        ]
    }

    const landOwner = {
        name: "Syed Amirul Hossain",
        nid: "2698234729231",
        phone: "01711097666",
        email: "amirulhossain@gmail.com"
    }

    const members =  [
        {name:"Saeed", age:33, occupation:"Programmer", phone:"01877354232"},
        {name:"Shahin", age:35, occupation:"Housewife", phone:"01911097666"}
    ];
    const helpingHands =  [
        {name:"Saeed", occupation:"Cook", address: "7A, 37 Middle Paikpara", phone:"01877354232"},
        {name:"Shahin", occupation:"Care taker", address:"7C, 37 Middle Paikpara", phone:"01911097666"}
    ];

    // @TODO create a method to extract previous rental addresses from citizen's previous addresses
    // use static data for now
    const previousRentals = [
        {address: "54/1 Middle Paikpara", tenure: "July 2013 - August 2017", owner: "Do not know", phone: "Do not know"},
        {address: "269/3 Ahmednagar Paikpara", tenure: "July 2006 - June 2013", owner: "Osman Gani", phone: "Do not know"},
    ]

    let navigate = useNavigate();
    const logOut = () => {
        navigate("/");
    }

    const editInformation = () => {
        navigate("/ctzn_form_present");
    }

    return (
        <AppLayout pageTitle="User Detail" pageTitleBangla="নাগরিক তথ্য বিবরনী" pageContent="Details about a citizen">
            <Box maxWidth="100%" className="page-content">
                <Stack spacing={3} direction="column">
                    <Box>
                        <SectionTitle titleText="User Detail" />
                        <Grid container sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <Grid item sm={3}>
                                <img src={CtznPicture} alt="Citizen Picture" style={{borderRadius: "10px", padding: "5px", backgroundColor: "#DDDDDD"}}/>
                            </Grid>
                            <Grid item sm={9}>
                                { basicInfo.length ? basicInfo.map(lnd =>
                                    <LabelAndData questionLabel={lnd.label} answerData={lnd.data} />
                                ) : ""}

                                {contactInfo.length ? contactInfo.map(lnd => {
                                    if(!lnd.label.includes("Address")){
                                        return <LabelAndData questionLabel={lnd.label} answerData={lnd.data}/>
                                    }
                                }) : ""}
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ borderTop: "1px solid black"}}>
                        <Grid container sx={{ marginTop: "20px"}}>
                            <Grid item sm={4} align="left">
                                <Button variant="contained" color="info" onClick={logOut}>Clear</Button>
                            </Grid>
                            <Grid item sm={4} align="center">
                                <Button variant="contained" color="error" onClick={logOut}>Cancel</Button>
                            </Grid>
                            <Grid item sm={4} align="right">
                                <Button variant="contained" color="success" onClick={editInformation}>Edit Information</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </Box>
        </AppLayout>
    );
}

export default UserDetail;