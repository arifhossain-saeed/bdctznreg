import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CheckInputField = ({boxWidth, inputChecked, handleAction, lblTxt, lblTxtBng}) => {
    return (
        <Box sx={{ width: boxWidth, display: "flex"}}>
            <Checkbox
                checked={inputChecked}
                onChange={handleAction}
            />
            <Typography variant="p" sx={{m: 1}}>{lblTxt} | <span className="banglaText">{lblTxtBng}</span></Typography>
        </Box>
    );
}

export default CheckInputField;