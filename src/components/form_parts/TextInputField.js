import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";


const TextInputField = ({inpVariant, lblTxt, lblTxtBng, fieldValue, handleAction, inputType, inpStyle, inpFieldStyle, lblStyle}) => {
    const idForInput = lblTxt.toString().toLowerCase();

    return(
        <FormControl variant={!inpVariant ? "standard": inpVariant} fullWidth sx={inpStyle}>
            <InputLabel htmlFor={idForInput} style={lblStyle}>{lblTxt} | <span className="banglaText">{lblTxtBng}</span></InputLabel>
            <Input id={idForInput} value={fieldValue} onChange={handleAction} type={inputType} sx={inpFieldStyle} />
        </FormControl>
    )
}

export default TextInputField;