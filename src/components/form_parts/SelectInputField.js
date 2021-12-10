import React from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const SelectInputField = ({txtLbl, txtLblBng, dataList, fieldValue, handleAction}) => {

    return(
        <FormControl variant="standard" fullWidth>
            <InputLabel id={txtLbl.toString().toLowerCase()}>{txtLbl} | <span className="banglaText">{txtLblBng}</span></InputLabel>
            <Select
                labelId={txtLbl.toString().toLowerCase()}
                id={txtLbl.toString().toLowerCase() + "id"}
                value={fieldValue}
                onChange={handleAction}
            >
                {dataList.map((data, index) => (
                    <MenuItem
                        key={index}
                        value={data}
                    >
                        {data}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default SelectInputField;