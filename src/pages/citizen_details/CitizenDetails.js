import React from "react";
import AppLayout from "../../layouts/default";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import LabelAndData from "../../components/page_parts/LabelAndData";
import AddressPresenter from "../../components/page_parts/AddressPresenter";
import {makeStyles} from "@mui/styles";
import {useNavigate} from "react-router-dom";

import CtznPicture from "../../assets/images/userPicture.png";
import Typography from "@mui/material/Typography";
import SectionTitle from "../../components/page_parts/SectionTitle";
import TableAlterateColor from "../../components/page_parts/TableAlternateColor";
import TableAlternateColor from "../../components/page_parts/TableAlternateColor";
import Button from "@mui/material/Button";
import {theme} from "../../theme";
import {useDispatch, useSelector} from "react-redux";
import {logoutAttempt} from "../../store/actions/login";

const useStyles = makeStyles({
    [theme.breakpoints.down("sm")]: {
        lAndQ: {
            paddingLeft: "30px"
        }
    }
})

const CitizenDetail = () => {
    const classes = useStyles();
    const citizen = useSelector((state) => state.citizen);
    const loggedInState = useSelector((state) => state.loginState);

    const basicInfo = [
        {label: "Name", labelBng: "নাম", data: "Syed Arif Hossain"},
        {label: "National ID No", labelBng: "জাতীয় পরিচয় নং", data: "26962347234"},
        {label: "Father\'s Name", labelBng: "পিতার নাম", data: "Syed Akhter Hossain"},
        {label: "Mother\'s Name", labelBng: "মাতার নাম", data: "Begum Shahanaz Akter"},
        {label: "Date of Birth", labelBng: "জন্ম তারিখ", data: "1st December, 1987"},
        {label: "Religion", labelBng: "ধর্ম", data: "Islam"},
        {label: "Education", labelBng: "শিক্ষা", data: "Masters in IT"},
        {label: "Marital Status", labelBng: "বৈবাহিক অবস্থা", data: "Married"}
    ]

    const contactInfo = [
        {label: "Phone", labelBng: "ফোন নং", data: "01911097666"},
        {label: "Email", labelBng: "ইমেইল", data: "arifhossain.saeed@gmail.com"}
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

    const members = [
        {name: "Saeed", age: 33, occupation: "Programmer", phone: "01877354232"},
        {name: "Shahin", age: 35, occupation: "Housewife", phone: "01911097666"}
    ];
    const helpingHands = [
        {name: "Saeed", occupation: "Cook", address: "7A, 37 Middle Paikpara", phone: "01877354232"},
        {name: "Shahin", occupation: "Care taker", address: "7C, 37 Middle Paikpara", phone: "01911097666"}
    ];

    // @TODO create a method to extract previous rental addresses from citizen's previous addresses
    // use static data for now
    const previousRentals = [
        {
            address: "54/1 Middle Paikpara",
            tenure: "July 2013 - August 2017",
            owner: "Do not know",
            phone: "Do not know"
        },
        {
            address: "269/3 Ahmednagar Paikpara",
            tenure: "July 2006 - June 2013",
            owner: "Osman Gani",
            phone: "Do not know"
        },
    ]

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const logOut = () => {
        dispatch(logoutAttempt())
        navigate('/');
    }

    const editInformation = () => {
        navigate("/ctzn_form_present");
    }

    return (
        <AppLayout pageTitle="Citizen Detail Page" pageTitleBangla="নাগরিক তথ্য বিবরনী"
                   pageContent="Details about a citizen">
            <Grid container maxWidth="lg" rowSpacing={6} sx={{width: "100%"}} className="page-content">
                <Grid item container>
                    <SectionTitle titleText="Bio" titleTextBng="ব্যক্তিগত তথ্য"/>
                    <Grid container rowSpacing={3} justify="space-between" sx={{marginTop: "20px"}}>
                        <Grid item xs={12} sm={12} md={3} sx={{justifyContent: "center", alignItems: "center"}}>
                            <img src={CtznPicture} alt="Citizen Picture" style={{
                                display: "flex",
                                borderRadius: "10px",
                                padding: "5px",
                                backgroundColor: "#DDDDDD",
                                margin: "auto"
                            }}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={9} className={classes.lAndQ}>
                            {basicInfo.length ? basicInfo.map((lnd, index) =>
                                <LabelAndData key={index} questionLabel={lnd.label} questionLabelBng={lnd.labelBng}
                                              answerData={lnd.data} lblStyle={{textAlign: "right"}}
                                              ansStyle={{textAlign: "left"}}/>
                            ) : ""}

                            {contactInfo.length ? contactInfo.map((lnd, index) => {
                                if (!lnd.label.includes("Address")) {
                                    return <LabelAndData key={index} questionLabel={lnd.label} questionLabelBng={lnd.labelBng} answerData={lnd.data} lblStyle={{textAlign: "right"}}
                                                         ansStyle={{textAlign: "left"}}/>
                                }
                            }) : ""}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container>
                    <SectionTitle titleText="Contact" titleTextBng="যোগাযোগ"/>
                    <Grid item container rowSpacing={3} sx={{marginTop: "20px"}}>
                        <AddressPresenter addressLabel="Permanent Address" addressObject={addresses.permanent}/>
                        <AddressPresenter addressLabel="Present Address" addressObject={addresses.present}/>
                        <AddressPresenter addressLabel="Here Since" addressData={addresses.present.hereSince}/>
                    </Grid>
                </Grid>

                <Grid item container>
                    <SectionTitle titleText="Land Owner" titleTextBng="সম্পত্তির মালিক"/>
                    <Grid container rowSpacing={2} sx={{marginTop: "20px"}}>
                        {Object.keys(landOwner).map((key, index) => {
                            return (
                                <Grid key={index} item xs={12} sm={6}>
                                    <LabelAndData questionLabel={key.toString()} answerData={landOwner[key]}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>

                <Grid item container>
                    <SectionTitle titleText="Family or Mess Members"  titleTextBng="পরিবার বা মেসের সদস্য"/>
                    <Grid container rowSpacing={3} sx={{marginTop: "20px"}}>
                        <TableAlterateColor tableData={members}/>
                    </Grid>
                </Grid>

                <Grid item container>
                    <SectionTitle titleText="Helping Hands" titleTextBng="সহায়তাকারী"/>
                    <Grid container sx={{marginTop: "20px"}}>
                        <TableAlterateColor tableData={helpingHands}/>
                    </Grid>
                </Grid>
                <Grid item container>
                    <SectionTitle titleText="Previous Rental Addresses" titleTextBng="পূর্ববর্তী ভাড়ার তথ্য"/>
                    <Grid container sx={{marginTop: "20px"}}>
                        <TableAlternateColor tableData={previousRentals}/>
                    </Grid>
                </Grid>
                <Grid item container>
                    <SectionTitle titleText="Verification Information" titleTextBng="সত্যয়নের তথ্য"/>
                    <Grid container sx={{marginTop: "20px"}}>
                        <Grid item sm={6}>
                            <LabelAndData questionLabel="Verified Property Owner" answerData="Yes"/>
                        </Grid>
                        <Grid item sm={6}>
                            <LabelAndData questionLabel="Field Officer & Badge No"
                                          answerData="S. I. Imran Khan - 5968041327"/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container sx={{margin: "30px 0"}}>
                    <Box sx={{border: "1px solid black", width: "100%"}}></Box>
                </Grid>

                <Grid item container spacing={3}>
                    <Grid item sm={4} sx={{justifyContent: "right"}}>
                        <Button variant="contained" color="error" onClick={logOut} fullWidth>Log Out |&nbsp;<span className="banglaText">লগ আউট</span> </Button>
                    </Grid>
                    <Grid item sm={4}>
                    </Grid>
                    <Grid item sm={4} sx={{justifyContent: "right"}}>
                        <Button variant="contained" color="success" onClick={editInformation} fullWidth>Edit
                            Information |&nbsp;<span className="banglaText">তথ্য পরিবর্তন</span> </Button>
                    </Grid>
                </Grid>
            </Grid>
        </AppLayout>
    );
}

export default CitizenDetail;