import SectionTitle from "../../page_parts/SectionTitle";
import Grid from "@mui/material/Grid";
import CheckInputField from "../CheckInputField";
import SelectInputField from "../SelectInputField";
import {DIVISIONS, MONTHS, YEARS} from "../../../utils/consts";
import TextInputField from "../TextInputField";
import Button from "@mui/material/Button";
import React, {useState, useEffect} from "react";
import useInputState from "../../../hooks/useInputState";
import useToggleState from "../../../hooks/useToggleState";
import {useDispatch, useSelector} from "react-redux";
import {allDistricts} from "../../../store/actions/district";
import {allSubDistricts} from "../../../store/actions/sub_district";
import {allPoliceStations} from "../../../store/actions/police_stations";
import {allPostOffices} from "../../../store/actions/post_offices";

const CitizenPresentAddress = ({activeCitizen}) => {
    const [oneLineAddress, setOneLineAddress] = useToggleState(false);
    const [fullAddress, updateFullAddress] = useInputState("");
    const [division, updateDiv] = useInputState("");
    const [district, updateDist] = useInputState("");
    const [subDist, updateSubDist] = useInputState("");
    const [ps, updatePs] = useInputState("");
    const [po, updatePo] = useInputState("");
    const [city, updateCity] = useInputState("");
    const [area, updateArea] = useInputState("");
    const [postCode, updatePostCode] = useInputState("");
    const [month, updateMonth] = useInputState("");
    const [year, updateYear] = useInputState("");
    const [sect, updateSect] = useInputState("");
    const [block, updateBlock] = useInputState("");
    const [road, updateRoad] = useInputState("");
    const [house, updateHouse] = useInputState("");
    const [flat, updateFlat] = useInputState("");
    const [isPermanent, updateIsPermanent] = useToggleState(false);
    const [isOwner, updateIsOwner] = useToggleState(false);
    const [landmark, updateLandmark] = useInputState("");
    const [landlord, updateLandlord] = useInputState("");
    const [llFather, updatellFather] = useInputState("");
    const [llNid, updatellNid] = useInputState("");
    const [llPhone, updatellPhone] = useInputState("");

    const savePresentAddress = () => {

    }
    console.log(activeCitizen);

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

    // const divDistricts = districts.map(dist => dist.name);
    // console.log(districts, subDistricts, policeStations, postOffices);

    return(
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
                            <SelectInputField txtLbl="Division" txtLblBng="বিভাগ" dataList={DIVISIONS} handleAction={updateDiv}  fieldValue={division} />
                        </Grid>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="District" txtLblBng="জেলা" dataList={districts} handleAction={updateDist}  fieldValue={district} />
                        </Grid>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="Sub-District" txtLblBng="উপজেলা" dataList={subDistricts} handleAction={updateSubDist}  fieldValue={subDist} />
                        </Grid>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="Police Station" txtLblBng="থানা" dataList={policeStations} handleAction={updatePs}  fieldValue={ps} />
                        </Grid>
                    </Grid>

                    <Grid item container justify="space-between" spacing={3}>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="Post Office" txtLblBng="ডাকঘর" dataList={pOffs} handleAction={updatePo}  fieldValue={po} />
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
                            <TextInputField lblTxt="Section/Sector" lblTxtBng="সেকশন/সেক্টর" fieldValue={sect} handleAction={updateSect} />
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Block" lblTxtBng="ব্লক" fieldValue={block} handleAction={updateBlock} />
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Road" lblTxtBng="রাস্তা" fieldValue={road} handleAction={updateRoad} />
                        </Grid>
                        <Grid item container md={3} justify="space-between" spacing={3}>
                            <Grid item md={6}>
                                <TextInputField lblTxt="House" lblTxtBng="বাড়ি" fieldValue={house} handleAction={updateHouse} />
                            </Grid>
                            <Grid item md={6}>
                                <TextInputField lblTxt="Flat/Apartment" lblTxtBng="ফ্ল্যাট/এপার্টমেন্ট" fieldValue={flat} handleAction={updateFlat} />
                            </Grid>
                        </Grid>
                    </Grid>
                </> :
                <Grid item container>
                    <TextInputField lblTxt="Full Address" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={fullAddress} multipleLine={3} handleAction={updateFullAddress} />
                </Grid>
            }

            <Grid item container justify="space-between" spacing={3}>
                <Grid item sm={6}>
                    <CheckInputField inputChecked={isPermanent} handleAction={updateIsPermanent} lblTxt="Permanent Address" lblTxtBng="স্থায়ী ঠিকানা" />
                </Grid>
                <Grid item sm={6}>
                    <CheckInputField inputChecked={isOwner} handleAction={updateIsOwner} lblTxt="Owner" lblTxtBng="স্বত্তাধীকারী" />
                </Grid>
            </Grid>

            <Grid item container rowSpacing={3}>
                <Grid item container justify="space-between" spacing={3}>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Starting Month" txtLblBng="ভাড়া শুরুর মাস" dataList={MONTHS} fieldValue={month} handleAction={updateMonth} />
                    </Grid>
                    <Grid item md={3}>
                        <SelectInputField txtLbl="Starting Year" txtLblBng="ভাড়া শুরুর বছর" dataList={YEARS} fieldValue={year} handleAction={updateYear} />
                    </Grid>

                    <Grid item md={6}>
                        <TextInputField lblTxt="Nearest Landmark" lblTxtBng="নিকটস্থ পরিচিত স্থান" fieldValue={landmark} handleAction={updateLandmark} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container justify="space-between" spacing={3}>
                <Grid item md={3}>
                    <TextInputField lblTxt="Land Owner" lblTxtBng="সম্পত্তির অধিকারী" fieldValue={landlord} handleAction={updateLandlord} />
                </Grid>
                <Grid item md={3}>
                    <TextInputField lblTxt="Father's Name" lblTxtBng="সম্পত্তির অধিকারীর পিতার নাম" fieldValue={llFather} handleAction={updatellFather} />
                </Grid>
                <Grid item md={3}>
                    <TextInputField lblTxt="NID No" lblTxtBng="এনআইডি নং" fieldValue={llNid} handleAction={updatellNid} />
                </Grid>
                <Grid item md={3}>
                    <TextInputField lblTxt="Phone" lblTxtBng="ফোন" fieldValue={llPhone} handleAction={updatellPhone} />
                </Grid>
            </Grid>

            <Grid item container sx={{justifyContent: "center"}}>
                <Button variant="contained" color="success" onClick={savePresentAddress}>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
            </Grid>
        </Grid>
    )
}

export default CitizenPresentAddress;