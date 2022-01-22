import SectionTitle from "../../page_parts/SectionTitle";
import Grid from "@mui/material/Grid";
import TextInputField from "../TextInputField";
import SelectInputField from "../SelectInputField";
import Button from "@mui/material/Button";
import React from "react";
import {RELATIONS} from "../../../utils/consts";
import useInputState from "../../../hooks/useInputState";

const CitizenEmergencyContact = ({activeCitizen}) => {
    const [contactName, updateContactName] = useInputState("");
    const [relation, updateRelation] = useInputState("");
    const [contactPhone, updateContactPhone] = useInputState("");
    const [contactEmail, updateContactEmail] = useInputState("");
    const [contactFullAddress, updateContactFullAddress] = useInputState("");

    const saveEmergencyContact = () => {

    }

    return(
        <Grid item container rowSpacing={3}>
            <SectionTitle titleText="Emergency Contact" titleTextBng="জরুরী যোগাযোগ" textStyle={{marginTop: "-2.2em"}}/>
            <Grid item container justify="space-between" spacing={3}>
                <Grid item md={3}>
                    <TextInputField lblTxt="Contact Name" lblTxtBng="যোগাযোগের নাম" fieldValue={contactName}
                                    handleAction={updateContactName}/>
                </Grid>
                <Grid item md={3}>
                    <SelectInputField txtLbl="Relation" txtLblBng="সম্পর্ক" dataList={RELATIONS} handleAction={updateRelation} fieldValue={relation}/>
                </Grid>
                <Grid item md={3}>
                    <TextInputField lblTxt="Contact Number" lblTxtBng="ফোন নং" fieldValue={contactPhone}
                                    handleAction={updateContactPhone}/>
                </Grid>
                <Grid item md={3}>
                    <TextInputField lblTxt="Contact Email" lblTxtBng="ইমেইল" fieldValue={contactEmail}
                                    handleAction={updateContactEmail}/>
                </Grid>
            </Grid>
            <Grid item container>
                <TextInputField lblTxt="Full Address" lblTxtBng="সম্পূর্ন ঠিকানা" fieldValue={contactFullAddress}
                                handleAction={updateContactFullAddress}/>
            </Grid>
            <Grid item container sx={{justifyContent: "center"}}>
                <Button variant="contained" color="success" onClick={saveEmergencyContact}>Save | &nbsp;<span className="banglaText">ঠিক আছে</span></Button>
            </Grid>
        </Grid>
    )
}

export default CitizenEmergencyContact;