import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";


const TextInputField = ({lblTxt, lblTxtBng, fieldValue, handleAction, inputType}) => {
    const idForInput = lblTxt.toString().toLowerCase();

    return(
        <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor={idForInput}>{lblTxt} | <span className="banglaText">{lblTxtBng}</span></InputLabel>
            <Input id={idForInput} value={fieldValue} onChange={handleAction} type={inputType} />
        </FormControl>
    )
}

export default TextInputField;