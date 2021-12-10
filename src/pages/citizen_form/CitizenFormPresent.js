import React, {useEffect, useState} from "react";
import AppLayout from "../../layouts/default";
import Box from "@mui/material/Box";
import SectionTitle from "../../components/page_parts/SectionTitle";
import Grid from "@mui/material/Grid";
import SelectInputField from "../../components/form_parts/SelectInputField";
import useInputState from "../../hooks/useInputState";
import TextInputField from "../../components/form_parts/TextInputField";
import CheckInputField from "../../components/form_parts/CheckInputField";
import useToggleState from "../../hooks/useToggleState";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import {useNavigate} from "react-router-dom";
import FileBase from "react-file-base64";

import { useDispatch, useSelector } from "react-redux";
import { allDistricts } from "../../store/actions/district";
import { allSubDistricts } from "../../store/actions/sub_district";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const divisions = [
    'Dhaka',
    'Chitagong',
    'Khulna',
    'Barisal',
    'Sylhet',
    'Rangpur',
    'Rajshahi',
    'Mymensingh'
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const CitizenFormPresent = () => {

    const [division, updateDiv, resetDiv] = useInputState("");
    const [district, updateDist, resetDist] = useInputState("");
    const [subDist, updateSubDist, resetSubDist] = useInputState("");
    const [ps, updatePs, resetPs] = useInputState("");
    const [po, updatePo, resetPo] = useInputState("");
    const [city, updateCity, resetCity] = useInputState("");
    const [area, updateArea, resetArea] = useInputState("");
    const [postCode, updatePostCode, resetPostCode] = useInputState("");

    const [isPermanent, updateIsPermanent] = useToggleState(false);

    const [month, updateMonth] = useInputState("");
    const [year, updateYear] = useInputState("");
    const [postData, setPostData] = useState({image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"});
    const [oneLineAddress, setOneLineAddress] = useToggleState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allDistricts());
        dispatch(allSubDistricts());
    },[dispatch]);

    const districts = useSelector((state) => state.districts).filter(dist => dist.division.trim().toLowerCase() === division.toLowerCase()).map(d=>d.name);

    const subDistricts = useSelector((state) => state.subDistricts).filter(sd => sd.district.trim().toLowerCase() === district.toLowerCase()).map(sd=>sd.name);

    // const divDistricts = districts.map(dist => dist.name);
    console.log(districts, subDistricts);

    const savePresentAddress = () => {

    }
    const savePreviousRentals = () => {

    }
    const cancelRecordCreation = () => {

    }
    const navigate = useNavigate();
    const goToNextForm = () => {
        navigate("/ctzn_form_permanent")
    }
    const previousRentals = [
        {address: "54/1 Middle Paikpara", tenure: "July 2013 - August 2017", owner: "Do not know", phone: "Do not know"},
        {address: "269/3 Ahmednagar Paikpara", tenure: "July 2006 - June 2013", owner: "Osman Gani", phone: "Do not know"},
    ]

    return (
    <AppLayout pageTitle="Citizen Form Page [Present Address]"  pageTitleBangla="নাগরিক তথ্য সংগ্রহ [বর্তমান ঠিকানা]" pageContent="Citizen Information Collection Form">
        <Grid container rowSpacing={3} className="page-content">
            <Grid item container rowSpacing={3}>
                <SectionTitle titleText="Citizen Bio" titleTextBng="জীবন বৃত্তান্ত" textStyle={{marginTop: "-2.2em"}}/>
                <Grid item container spacing={4}>
                    <Grid item container md={2}>
                        <Grid item container>
                            <img src={postData.image} style={{width: "180px", height: "200px", padding:"5px", borderRadius: "10px", backgroundColor: "#DDDDDD"}} alt="User Image"/>
                        </Grid>
                        <Grid item container>
                            <FileBase type="file" multiple={ false } onDone={({base64}) => setPostData({...postData, image: base64})} />
                        </Grid>
                    </Grid>
                    <Grid item container md={10} rowSpacing={3}>
                        <Grid item container justify="space-between" spacing={3}>
                            <Grid item md={6}>
                                <TextInputField lblTxt="Full Name" lblTxtBng="সম্পূর্ন নাম" fieldValue={postCode} handleAction={updatePostCode}/>
                            </Grid>

                            <Grid item container md={6} justify="space-between" spacing={3}>
                                <Grid item md={4}>
                                    <SelectInputField txtLbl="Birth Day" txtLblBng="জন্ম দিন" dataList={["1", "2"]}
                                                      handleAction={updatePs} fieldValue={ps}/>
                                </Grid>
                                <Grid item md={4}>
                                    <SelectInputField txtLbl="Birth Month" txtLblBng="মাস" dataList={["Jan", "Feb"]}
                                                      handleAction={updatePs} fieldValue={ps}/>
                                </Grid>
                                <Grid item md={4}>
                                    <SelectInputField txtLbl="Birth Year" txtLblBng="বছর" dataList={["2001", "2000"]} handleAction={updatePs} fieldValue={ps}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container justify="space-between" spacing={3}>
                            <Grid item md={3}>
                                <TextInputField lblTxt="Father's Name" lblTxtBng="পিতার নাম" fieldValue={postCode} handleAction={updatePostCode}/>
                            </Grid>
                            <Grid item md={3}>
                                <TextInputField lblTxt="Mother's Name" lblTxtBng="মাতার নাম" fieldValue={postCode}
                                                handleAction={updatePostCode}/>
                            </Grid>
                            <Grid item md={3}>
                                <TextInputField lblTxt="National ID" lblTxtBng="জাতীয় পরিচয় নং" fieldValue={postCode} handleAction={updatePostCode}/>
                            </Grid>
                            <Grid item md={3}>
                                <SelectInputField txtLbl="Religion" txtLblBng="ধর্ম" dataList={["Muslim", "Hindu", "Christian", "Buddist", "Jew", "Other"]} handleAction={updatePs} fieldValue={ps}/>
                            </Grid>
                        </Grid>
                        <Grid item container justify="space-between" spacing={3}>
                            <Grid item md={3}>
                                <SelectInputField txtLbl="Gender" txtLblBng="লিঙ্গ" dataList={["Male", "Female", "Other"]} handleAction={updatePs} fieldValue={ps}/>
                            </Grid>
                            <Grid item md={3}>
                                <SelectInputField txtLbl="Marital Status" txtLblBng="বৈবাহিক অবস্থা" dataList={["Never Married", "Married", "Divorced", "Widowed"]} handleAction={updatePs} fieldValue={ps}/>
                            </Grid>
                            <Grid item md={3}>
                                <TextInputField lblTxt="Passport No [if any]" lblTxtBng="পাসপোর্ট নং [যদি থাকে]" fieldValue={postCode} handleAction={updatePostCode}/>
                            </Grid>
                            <Grid item md={3}>
                                <TextInputField lblTxt="Driving License No [if any]" lblTxtBng="ড্রাইভিং লাইসেন্স নং [যদি থাকে]" fieldValue={postCode} handleAction={updatePostCode}/>
                            </Grid>
                        </Grid>
                        <Grid item container justify="space-between" spacing={3}>
                            <Grid item md={3}>
                                <TextInputField lblTxt="Email" lblTxtBng="ইমেইল" fieldValue={postCode}
                                                handleAction={updatePostCode} inputType="email"/>
                            </Grid>
                            <Grid item md={3}>
                                <TextInputField lblTxt="Confirm Email" lblTxtBng="নিশ্চিতকরন ইমেইল" fieldValue={postCode}
                                                handleAction={updatePostCode} inputType="email"/>
                            </Grid>
                            <Grid item md={3}>
                                <TextInputField lblTxt="Phone" lblTxtBng="ফোন নং" fieldValue={postCode}
                                                handleAction={updatePostCode}/>
                            </Grid>
                            <Grid item md={3}>
                                <TextInputField lblTxt="Alternate Phone" lblTxtBng="অন্য ফোন নং" fieldValue={postCode}
                                                handleAction={updatePostCode}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container sx={{justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={savePresentAddress}>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
                </Grid>
            </Grid>

            <Grid item container rowSpacing={3}>
                <SectionTitle titleText="Present Address Information" titleTextBng="বর্তমান ঠিকানা" textStyle={{marginTop: "-2.2em"}} />
                <Grid item container>
                    <Grid item>
                        <CheckInputField inputChecked={oneLineAddress} handleAction={setOneLineAddress} lblTxt="Full Address in one line?" lblTxtBng="সম্পূর্ন ঠিকানা একই সারিতে?" />
                    </Grid>
                </Grid>
                {!oneLineAddress ?
                    <>
                        <Grid item container justify="space-between" spacing={3}>
                            <Grid item md={3}>
                                <SelectInputField txtLbl="Division" txtLblBng="বিভাগ" dataList={divisions} handleAction={updateDiv}  fieldValue={division} />
                            </Grid>
                            <Grid item md={3}>
                                <SelectInputField txtLbl="District" txtLblBng="জেলা" dataList={districts} handleAction={updateDist}  fieldValue={district} />
                            </Grid>
                            <Grid item md={3}>
                                <SelectInputField txtLbl="Sub-District" txtLblBng="উপজেলা" dataList={subDistricts} handleAction={updateSubDist}  fieldValue={subDist} />
                            </Grid>
                            <Grid item md={3}>
                                <SelectInputField txtLbl="Police Station" txtLblBng="থানা" dataList={divisions} handleAction={updatePs}  fieldValue={ps} />
                            </Grid>
                        </Grid>

                        <Grid item container justify="space-between" spacing={3}>
                            <Grid item md={3}>
                                <SelectInputField txtLbl="Post Office" txtLblBng="ডাকঘর" dataList={divisions} handleAction={updatePo}  fieldValue={po} />
                            </Grid>
                            <Grid item md={3}>
                                <TextInputField lblTxt="Post Code" lblTxtBng="পোষ্ট কোড" fieldValue={postCode} handleAction={updatePostCode} />
                            </Grid>
                            <Grid item md={3}>
                                <TextInputField lblTxt="City | Village" lblTxtBng="শহর । গ্রাম" handleAction={updateCity}  fieldValue={city} />
                            </Grid>
                            <Grid item md={3}>
                                <TextInputField lblTxt="Area" lblTxtBng="এলাকা" handleAction={updateArea}  fieldValue={area} />
                            </Grid>
                        </Grid>

                        <Grid item container justify="space-between" spacing={3}>
                            <Grid item md={3}>
                                <TextInputField lblTxt="Section/Sector" lblTxtBng="সেকশন/সেক্টর" fieldValue={postCode} handleAction={updatePostCode} />
                            </Grid>
                            <Grid item md={3}>
                                <TextInputField lblTxt="Block" lblTxtBng="ব্লক" fieldValue={postCode} handleAction={updatePostCode} />
                            </Grid>
                            <Grid item md={3}>
                                <TextInputField lblTxt="Road" lblTxtBng="রাস্তা" fieldValue={postCode} handleAction={updatePostCode} />
                            </Grid>
                            <Grid item container md={3} justify="space-between" spacing={3}>
                                <Grid item md={6}>
                                    <TextInputField lblTxt="House" lblTxtBng="বাড়ি" fieldValue={postCode} handleAction={updatePostCode} />
                                </Grid>
                                <Grid item md={6}>
                                    <TextInputField lblTxt="Flat/Apartment" lblTxtBng="ফ্ল্যাট/এপার্টমেন্ট" fieldValue={postCode} handleAction={updatePostCode} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </> :
                    <Grid item container>
                        <TextInputField lblTxt="Full Address" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                }

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item sm={6}>
                        <CheckInputField inputChecked={isPermanent} handleAction={updateIsPermanent} lblTxt="Permanent Address" lblTxtBng="স্থায়ী ঠিকানা" />
                    </Grid>
                    <Grid item sm={6}>
                        <CheckInputField inputChecked={isPermanent} handleAction={updateIsPermanent} lblTxt="Owner" lblTxtBng="স্বত্তাধীকারী" />
                    </Grid>
                </Grid>

                <Grid item container rowSpacing={3}>
                    <Grid item container justify="space-between" spacing={3}>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="Starting Month" txtLblBng="ভাড়া শুরুর মাস" dataList={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]} fieldValue={month} handleAction={updateMonth} />
                        </Grid>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="Starting Year" txtLblBng="ভাড়া শুরুর বছর" dataList={["2001", "2000"]} fieldValue={year} handleAction={updateYear} />
                        </Grid>

                        <Grid item md={6}>
                            <TextInputField lblTxt="Nearest Landmark" lblTxtBng="নিকটস্থ পরিচিত স্থান" fieldValue={postCode} handleAction={updatePostCode} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Land Owner" lblTxtBng="সম্পত্তির অধিকারী" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Father's Name" lblTxtBng="সম্পত্তির অধিকারীর পিতার নাম" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="NID No" lblTxtBng="এনআইডি নং" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Phone" lblTxtBng="ফোন" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                </Grid>

                <Grid item container sx={{justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={savePresentAddress}>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
                </Grid>
            </Grid>

            <Grid item container rowSpacing={3}>
                <SectionTitle titleText="Previous Rental Addresses" titleTextBng="পূর্ববর্তী ঠিকানা" textStyle={{marginTop: "-2.2em"}} />
                <Grid item container>
                    {<Alert variant="filled" severity="info" sx={{width: "100%"}}>
                        The records are empty
                    </Alert>
                    }
                </Grid>
                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={6}>
                        <TextInputField lblTxt="Land Owner" lblTxtBng="সম্পত্তির অধিকারী" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="NID No" lblTxtBng="এনআইডি নং" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                    <Grid item md={3}>
                        <TextInputField lblTxt="Phone" lblTxtBng="ফোন" fieldValue={postCode} handleAction={updatePostCode} />
                    </Grid>
                </Grid>
                <Grid item container>
                    <TextInputField lblTxt="Full Address" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={postCode} handleAction={updatePostCode} />
                </Grid>
                <Grid item container>
                    <TextInputField lblTxt="Reason for leaving" lblTxtBng="পরিবর্তনের কারন" fieldValue={postCode} handleAction={updatePostCode} />
                </Grid>
                <Grid item container sx={{justifyContent: "center"}}>
                    <Button variant="contained" color="success" onClick={savePreviousRentals}>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
                </Grid>

                <Grid item container sx={{margin: "30px 0"}}>
                    <Box sx={{border: "1px solid black", width: "100%"}}></Box>
                </Grid>

                <Grid item container justify="space-between" spacing={6}>
                    <Grid item md={4} sx={{justifyContent: "left"}}>
                        <Button variant="contained" color="error" onClick={cancelRecordCreation} fullWidth>Cancel | &nbsp;<span className="banglaText">এখন নয়</span></Button>
                    </Grid>

                    <Grid item sm={4}>
                    </Grid>

                    <Grid item md={4} sx={{justifyContent: "right"}}>
                        <Button variant="contained" color="info" onClick={goToNextForm} fullWidth>Next | &nbsp;<span className="banglaText">পরবর্তী</span></Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </AppLayout>
    )
};

export default CitizenFormPresent;