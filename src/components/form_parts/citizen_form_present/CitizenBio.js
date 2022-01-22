import SectionTitle from "../../page_parts/SectionTitle";
import Grid from "@mui/material/Grid";
import TextInputField from "../TextInputField";
import SelectInputField from "../SelectInputField";
import {DAYS, GENDERS, MARITAL_STATUS, MONTHS, RELIGIONS, YEARS} from "../../../utils/consts";
import Button from "@mui/material/Button";
import React, {useState, useEffect} from "react";
import useInputState from "../../../hooks/useInputState";
import FileBase from "react-file-base64";
import {useDispatch} from "react-redux";
import {getCitizen, updateCitizen} from "../../../store/actions/citizen";

const CitizenBio = ({activeCitizen}) => {
    const [fullName, updateFullName] = useInputState(activeCitizen.name?activeCitizen.name:"");
    const [bDay, updateBDay] = useInputState(activeCitizen.birth_day?activeCitizen.birth_day:"");
    const [bMonth, updateBMonth] = useInputState(activeCitizen.birth_month?activeCitizen.birth_month:"");
    const [bYear, updateBYear] = useInputState(activeCitizen.birth_year?activeCitizen.birth_year:"");
    const [fatherName, updateFatherName] = useInputState(activeCitizen.father?activeCitizen.father:"");
    const [motherName, updateMotherName] = useInputState(activeCitizen.mother?activeCitizen.mother:"");
    const [nid, updateNid] = useInputState(activeCitizen.nid?activeCitizen.nid:"");
    const [religion, updateReligion] = useInputState(activeCitizen.religion?activeCitizen.religion:"");
    const [gender, updateGender] = useInputState(activeCitizen.gender?activeCitizen.gender:"");
    const [mStatus, updateMStatus] = useInputState(activeCitizen.marital_status?activeCitizen.marital_status:"");
    const [passport, updatePassport] = useInputState(activeCitizen.passport_no?activeCitizen.passport_no:"");
    const [drivingLnc, updateDrivingLnc] = useInputState(activeCitizen.driving_license?activeCitizen.driving_license:"");
    const [email, updateEmail] = useInputState(activeCitizen.email?activeCitizen.email:"");
    const [confEmail, updateConfEmail] = useInputState("");
    const [phone, updatePhone] = useInputState(activeCitizen.phone?activeCitizen.phone:"");
    const [altPhone, updateAltPhone] = useInputState(activeCitizen.alternate_phone?activeCitizen.alternate_phone:"");
    const [image, setImage] = useState(activeCitizen.image?activeCitizen.image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png");

    const bio = {};

    const dispatch = useDispatch();

    const saveCitizenBio = () => {
        bio.full_name = fullName;
        bio.birth_day = bDay;
        bio.birth_month = bMonth;
        bio.birth_year = bYear;
        bio.father = fatherName;
        bio.mother = motherName;
        bio.nid = nid;
        bio.religion = religion;
        bio.gender = gender;
        bio.marital_status = mStatus;
        bio.passport_no = passport;
        bio.driving_license = drivingLnc;
        bio.email = email;
        bio.phone = phone;
        bio.alternate_phone = altPhone;
        bio.image = image;

        dispatch(updateCitizen(bio));
    }


    console.log(activeCitizen);


    return(
        <Grid item container rowSpacing={3}>
            <SectionTitle titleText="Citizen Bio" titleTextBng="জীবন বৃত্তান্ত" textStyle={{marginTop: "-2.2em"}}/>
            <Grid item container spacing={4}>
                <Grid item container md={2}>
                    <Grid item container>
                        <img src={image} style={{width: "180px", height: "200px", padding:"5px", borderRadius: "10px", backgroundColor: "#DDDDDD"}} alt="User Image"/>
                    </Grid>
                    <Grid item container>
                        <FileBase type="file" multiple={ false } onDone={({base64}) => setImage(base64)} />
                    </Grid>
                </Grid>
                <Grid item container md={10} rowSpacing={3}>
                    <Grid item container justify="space-between" spacing={3}>
                        <Grid item md={6}>
                            <TextInputField lblTxt="Full Name" lblTxtBng="সম্পূর্ন নাম" fieldValue={fullName} handleAction={updateFullName}/>
                        </Grid>

                        <Grid item container md={6} justify="space-between" spacing={3}>
                            <Grid item md={4}>
                                <SelectInputField txtLbl="Birth Day" txtLblBng="জন্ম দিন" dataList={DAYS}
                                                  handleAction={updateBDay} fieldValue={bDay}/>
                            </Grid>
                            <Grid item md={4}>
                                <SelectInputField txtLbl="Birth Month" txtLblBng="মাস" dataList={MONTHS}
                                                  handleAction={updateBMonth} fieldValue={bMonth}/>
                            </Grid>
                            <Grid item md={4}>
                                <SelectInputField txtLbl="Birth Year" txtLblBng="বছর" dataList={YEARS} handleAction={updateBYear} fieldValue={bYear}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container justify="space-between" spacing={3}>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Father's Name" lblTxtBng="পিতার নাম" fieldValue={fatherName} handleAction={updateFatherName}/>
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Mother's Name" lblTxtBng="মাতার নাম" fieldValue={motherName}
                                            handleAction={updateMotherName}/>
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="National ID" lblTxtBng="জাতীয় পরিচয় নং" fieldValue={nid} handleAction={updateNid}/>
                        </Grid>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="Religion" txtLblBng="ধর্ম" dataList={RELIGIONS} handleAction={updateReligion} fieldValue={religion}/>
                        </Grid>
                    </Grid>
                    <Grid item container justify="space-between" spacing={3}>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="Gender" txtLblBng="লিঙ্গ" dataList={GENDERS} handleAction={updateGender} fieldValue={gender}/>
                        </Grid>
                        <Grid item md={3}>
                            <SelectInputField txtLbl="Marital Status" txtLblBng="বৈবাহিক অবস্থা" dataList={MARITAL_STATUS} handleAction={updateMStatus} fieldValue={mStatus}/>
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Passport No [if any]" lblTxtBng="পাসপোর্ট নং [যদি থাকে]" fieldValue={passport} handleAction={updatePassport}/>
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Driving License No [if any]" lblTxtBng="ড্রাইভিং লাইসেন্স নং [যদি থাকে]" fieldValue={drivingLnc} handleAction={updateDrivingLnc}/>
                        </Grid>
                    </Grid>
                    <Grid item container justify="space-between" spacing={3}>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Email" lblTxtBng="ইমেইল" fieldValue={email}
                                            handleAction={updateEmail} inputType="email"/>
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Confirm Email" lblTxtBng="নিশ্চিতকরন ইমেইল" fieldValue={confEmail}
                                            handleAction={updateConfEmail} inputType="email"/>
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Phone" lblTxtBng="ফোন নং" fieldValue={phone}
                                            handleAction={updatePhone}/>
                        </Grid>
                        <Grid item md={3}>
                            <TextInputField lblTxt="Alternate Phone" lblTxtBng="অন্য ফোন নং" fieldValue={altPhone}
                                            handleAction={updateAltPhone}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container sx={{justifyContent: "center"}}>
                <Button variant="contained" color="success" onClick={saveCitizenBio}>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
            </Grid>
        </Grid>
    )
}

export default CitizenBio;