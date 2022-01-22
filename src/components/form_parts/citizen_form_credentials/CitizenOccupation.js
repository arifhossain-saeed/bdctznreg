import SectionTitle from "../../page_parts/SectionTitle";
import Grid from "@mui/material/Grid";
import SelectInputField from "../SelectInputField";
import TextInputField from "../TextInputField";
import Button from "@mui/material/Button";
import React from "react";
import {MONTHS, OCCUPATIONS, YEARS} from "../../../utils/consts";
import useInputState from "../../../hooks/useInputState";

const CitizenOccupation = ({activeCitizen}) => {
    const [occupation, updateOccuation] = useInputState("");
    const [orgName, updateOrgName] = useInputState("");
    const [employerName, updateEmployerName] = useInputState("");
    const [orgAddress, updateOrgAddress] = useInputState("");
    const [orgPhone, updateOrgPhone] = useInputState("");
    const [orgEmail, updateOrgEmail] = useInputState("");
    const [startMonth, updateStartMonth] = useInputState("");
    const [startYear, updateStartYear] = useInputState("");
    const [occupationStatus, updateOccupationStatus] = useInputState("");
    const [endMonth, updateEndMonth] = useInputState("");
    const [endYear, updateEndYear] = useInputState("");
    const [leavingReason, updateLeavingReason] = useInputState("");

    const saveOrganizationInfo = () => {

    }

    console.log(activeCitizen);

    return(
        <Grid item container rowSpacing={3} sx={{marginTop: "20px"}}>
            <SectionTitle titleText="Occupation" titleTextBng="পেশা" textStyle={{marginTop: "-2.2em"}}/>
            <Grid item container justify="space-between" spacing={3}>
                <Grid item md={3}>
                    <SelectInputField txtLbl="Occupation" txtLblBng="পেশার ধরন" dataList={OCCUPATIONS} handleAction={updateOccuation} fieldValue={occupation}/>
                </Grid>
                <Grid item md={3}>
                    <TextInputField lblTxt="Organizaiton Name" lblTxtBng="প্রতিষ্ঠানের নাম" fieldValue={orgName}
                                    handleAction={updateOrgName}/>
                </Grid>
                <Grid item md={3}>
                    <TextInputField lblTxt="Employer Name [if any]" lblTxtBng="মালিকের নাম [যদি থাকে]" fieldValue={employerName}
                                    handleAction={updateEmployerName}/>
                </Grid>
                <Grid item md={3}>
                    <TextInputField lblTxt="Organization Address" lblTxtBng="প্রতিষ্ঠানের ঠিকানা" fieldValue={orgAddress}
                                    handleAction={updateOrgAddress}/>
                </Grid>
            </Grid>
            <Grid item container justify="space-between" spacing={3}>
                <Grid item md={3}>
                    <TextInputField lblTxt="Organization phone" lblTxtBng="প্রতিষ্ঠানের যোগাযোগ নং" fieldValue={orgPhone}
                                    handleAction={updateOrgPhone}/>
                </Grid>
                <Grid item md={3}>
                    <TextInputField lblTxt="Organization Email" lblTxtBng="প্রতিষ্ঠানের ইমেইল" fieldValue={orgEmail}
                                    handleAction={updateOrgEmail} inputType="email"/>
                </Grid>
                <Grid item container md={6} justify="space-between" spacing={3}>
                    <Grid item md={6}>
                        <SelectInputField txtLbl="Start Month" txtLblBng="কাজ শুরুর মাস" dataList={MONTHS} fieldValue={startMonth} handleAction={updateStartMonth} />
                    </Grid>
                    <Grid item md={6}>
                        <SelectInputField txtLbl="Start Year" txtLblBng="শুরুর বছর" dataList={YEARS} fieldValue={startYear} handleAction={updateStartYear} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container justify="space-between" spacing={3}>
                <Grid item md={3}>
                    <SelectInputField txtLbl="Occupation Status" txtLblBng="পেশার বর্তমান অবস্থা" dataList={["Continuing", "Ended"]} fieldValue={occupationStatus} handleAction={updateOccupationStatus} />
                </Grid>
                <Grid item container md={3} justify="space-between" spacing={3}>
                    <Grid item md={6}>
                        <SelectInputField txtLbl="End Month" txtLblBng="কাজ শেষের মাস" dataList={MONTHS} fieldValue={endMonth} handleAction={updateEndMonth} />
                    </Grid>
                    <Grid item md={6}>
                        <SelectInputField txtLbl="End Year" txtLblBng="শেষের বছর" dataList={YEARS} fieldValue={endYear} handleAction={updateEndYear} />
                    </Grid>
                </Grid>
                <Grid item md={6}>
                    <TextInputField lblTxt="Reason for leaving" lblTxtBng="কাজ শেষের ব্যাপারে মন্তব্য" fieldValue={leavingReason} handleAction={updateLeavingReason}/>
                </Grid>
            </Grid>
            <Grid item container sx={{justifyContent: "center"}}>
                <Button variant="contained" color="success" onClick={saveOrganizationInfo}>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
            </Grid>
        </Grid>
    )
}

export default CitizenOccupation;