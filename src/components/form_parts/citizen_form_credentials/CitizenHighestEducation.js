import SectionTitle from "../../page_parts/SectionTitle";
import Grid from "@mui/material/Grid";
import TextInputField from "../TextInputField";
import SelectInputField from "../SelectInputField";
import Button from "@mui/material/Button";
import React from "react";
import {MONTHS, YEARS} from "../../../utils/consts";
import useInputState from "../../../hooks/useInputState";

const CitizenHighestEducation = ({activeCitizen}) => {
    const [degreeName, updateDegreeName] = useInputState("");
    const [instName, updateInstName] = useInputState("");
    const [startMonth, updateStartMonth] = useInputState("");
    const [startYear, updateStartYear] = useInputState("");
    const [completeMonth, updateCompleteMonth] = useInputState("");
    const [completeYear, updateCompleteYear] = useInputState("");
    const [delayReason, updateDelayReason] = useInputState("");

    const saveHighestEducation = () => {

    }

    return(
        <Grid item container rowSpacing={3}>
            <SectionTitle titleText="Highest Education" titleTextBng="শিক্ষাগত যোগ্যতা" textStyle={{marginTop: "-2.2em"}}/>
            <Grid item container justify="space-between" spacing={3}>
                <Grid item md={6}>
                    <TextInputField lblTxt="Name of the degree" lblTxtBng="ডিগ্রির নাম" fieldValue={degreeName} handleAction={updateDegreeName} />
                </Grid>
                <Grid item md={6}>
                    <TextInputField lblTxt="Institution Name" lblTxtBng="শিক্ষা প্রতিষ্ঠানের নাম" fieldValue={instName} handleAction={updateInstName} />
                </Grid>
            </Grid>

            <Grid item container justify="space-between" spacing={3}>
                <Grid item container md={6} justify="space-between" spacing={3}>
                    <Grid item md={6}>
                        <SelectInputField txtLbl="Starting Month" txtLblBng="শুরুর মাস" dataList={MONTHS}
                                          handleAction={startMonth} fieldValue={updateStartMonth}/>
                    </Grid>
                    <Grid item md={6}>
                        <SelectInputField txtLbl="Starting Year" txtLblBng="শুরুর বছর" dataList={YEARS}
                                          handleAction={startYear} fieldValue={updateStartYear}/>
                    </Grid>
                </Grid>
                <Grid item container md={6} justify="space-between" spacing={3}>
                    <Grid item md={6}>
                        <SelectInputField txtLbl="Completing Month" txtLblBng="শেষের মাস" dataList={MONTHS}
                                          handleAction={completeMonth} fieldValue={updateCompleteMonth}/>
                    </Grid>
                    <Grid item md={6}>
                        <SelectInputField txtLbl="Completing Year" txtLblBng="শেষের বছর" dataList={YEARS}
                                          handleAction={completeYear} fieldValue={updateCompleteYear}/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container>
                <TextInputField lblTxt="Study Gap Reason [if any]" lblTxtBng="শিক্ষা বিলম্বের কারন" fieldValue={delayReason} handleAction={updateDelayReason}/>
            </Grid>

            <Grid item container sx={{justifyContent:"center"}}>
                <Button variant="contained" color="success" onClick={saveHighestEducation}>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
            </Grid>
        </Grid>
    )
}

export default CitizenHighestEducation;