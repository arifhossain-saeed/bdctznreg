import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import VisibilityIcon from '@mui/icons-material/Visibility';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#CCCCCC",
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const TableAlternateColorAct = ({tableData, handleVisibilityAction}) => {
    const TableHeads = [...Object.keys(tableData[0])];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Sl</StyledTableCell>
                        {TableHeads.map((head, index) => <StyledTableCell key={index} align="center" sx={{textTransform: "capitalize"}}>{head}</StyledTableCell>)}
                        <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell>{index+1}</StyledTableCell>
                            {Object.keys(row).map(k =>
                                <StyledTableCell key={k} align="center">{row[k]}</StyledTableCell>
                            )}
                            <StyledTableCell>
                                <Box sx={{display: "flex", justifyContent: "center"}}>
                                    <IconButton aria-label="View Detail" onClick={handleVisibilityAction}>
                                        <VisibilityIcon />
                                    </IconButton>
                                </Box>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableAlternateColorAct;