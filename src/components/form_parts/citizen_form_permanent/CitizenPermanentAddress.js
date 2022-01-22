import SectionTitle from "../../page_parts/SectionTitle";
import Grid from "@mui/material/Grid";
import CheckInputField from "../CheckInputField";
import SelectInputField from "../SelectInputField";
import TextInputField from "../TextInputField";
import Button from "@mui/material/Button";
import React, {useEffect, useState} from "react";
import useInputState from "../../../hooks/useInputState";
import useToggleState from "../../../hooks/useToggleState";
import {useDispatch, useSelector} from "react-redux";
import {allDistricts} from "../../../store/actions/district";
import {allSubDistricts} from "../../../store/actions/sub_district";
import {allPoliceStations} from "../../../store/actions/police_stations";
import {allPostOffices} from "../../../store/actions/post_offices";
import {DIVISIONS} from "../../../utils/consts";


const CitizenPermanentAddress = ({activeCitizen}) => {
    const [division, updateDiv] = useInputState("");
    const [district, updateDist] = useInputState("");
    const [subDist, updateSubDist] = useInputState("");
    const [ps, updatePs] = useInputState("");
    const [po, updatePo] = useInputState("");
    const [city, updateCity] = useInputState("");
    const [area, updateArea] = useInputState("");
    const [postCode, updatePostCode] = useInputState("");
    const [oneLineAddress, setOneLineAddress] = useToggleState(false);
    const [fullAddress, updateFullAddress] = useInputState("");

    const savePermanentAddress = () => {

    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allDistricts());
        dispatch(allSubDistricts());
        dispatch(allPoliceStations());
        dispatch(allPostOffices());
    },[dispatch]);

    const districts = useSelector((state) => state.districts).filter(dist => dist.division.trim().toLowerCase() === division.toLowerCase()).map(d=>d.name);

    const subDistricts = useSelector((state) => state.subDistricts).filter(sd => sd.district.trim().toLowerCase() === district.toLowerCase()).map(sd=>sd.name);

    const policeStations = useSelector((state) => state.policeStations).filter(ps => ps.district.trim().toLowerCase() === district.toLowerCase()).map(ps=>ps.name);

    const postOffices = useSelector((state) => state.postOffices).filter(po => po.police_station.trim().toLowerCase() === ps.toLowerCase());

    const pOffs = postOffices.map(po => po.name);

    return(
        <Grid item container rowSpacing={3}>
            <SectionTitle titleText="Permanent Address" titleTextBng="স্থায়ী ঠিকানা" textStyle={{marginTop:"-2.2em"}}/>
            <Grid item container>
                <Grid item>
                    <CheckInputField inputChecked={oneLineAddress} handleAction={setOneLineAddress} lblTxt="Full Address in one line?" lblTxtBng="সম্পূর্ন ঠিকানা একই সারিতে?" />
                </Grid>
            </Grid>
            { !oneLineAddress ?
                <>
                    <Grid item container justify="space-betwee" spacing={3}>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="Division" txtLblBng="বিভাগ" dataList={DIVISIONS} handleAction={updateDiv} fieldValue={division}/>
                        </Grid>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="District" txtLblBng="জেলা" dataList={districts} handleAction={updateDist} fieldValue={district}/>
                        </Grid>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="Sub-District" txtLblBng="উপজেলা" dataList={subDistricts} handleAction={updateSubDist} fieldValue={subDist}/>
                        </Grid>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="Police Station" txtLblBng="থানা" dataList={policeStations} handleAction={updatePs} fieldValue={ps}/>
                        </Grid>
                    </Grid>
                    <Grid item container justify="space-between" spacing={3}>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="Post Office" txtLblBng="ডাকঘর" dataList={pOffs} handleAction={updatePo} fieldValue={po}/>
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Post Code" lblTxtBng="পোষ্ট কোড" fieldValue={postCode} handleAction={updatePostCode}/>
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="City | Village" lblTxtBng="শহর । গ্রাম" handleAction={updateCity} fieldValue={city}/>
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Area" lblTxtBng="এলাকা" handleAction={updateArea} fieldValue={area}/>
                        </Grid>
                    </Grid>

                    <Grid item container justify="space-between" spacing={3}>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Section/Sector" lblTxtBng="সেকশন/সেক্টর" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Block" lblTxtBng="ব্লক" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Road" lblTxtBng="রাস্তা" fieldValue={postCode}
                                            handleAction={updatePostCode}/>
                        </Grid>
                        <Grid item container md={3} justify="space-between" spacing={3}>
                            <Grid item md={6}>
                                <TextInputField lblTxt="House" lblTxtBng="বাড়ি" fieldValue={postCode}
                                                handleAction={updatePostCode}/>
                            </Grid>
                            <Grid item md={6}>
                                <TextInputField lblTxt="Flat/Apartment" lblTxtBng="ফ্ল্যাট/এপার্টমেন্ট"
                                                fieldValue={postCode} handleAction={updatePostCode}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </> :
                <Grid item container>
                    <TextInputField lblTxt="Full Address" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={fullAddress} handleAction={updateFullAddress} />
                </Grid>
            }

            <Grid item container sx={{justifyContent: "center"}}>
                <Button variant="contained" color="success" onClick={savePermanentAddress}>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
            </Grid>
        </Grid>
    )
}

export default CitizenPermanentAddress;