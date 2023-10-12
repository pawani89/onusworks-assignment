import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Person } from "../../store/slices/person-slice";
import { selectedPerson, setEditMode } from "../../store/slices/person-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


interface DetailsProp {
    list: Person[],
}

const tableHeaders = ["Name", "Age", "Proffession"]

const PersonDetails = (props: DetailsProp) => {
    const { list } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlePersonSelection = (person: Person, ind: number) => {
        dispatch(selectedPerson({ details: { ...person }, ind: ind }));
        dispatch(setEditMode(true));
        /* if you want to show the profile component as part of home
            few ui related changes will be done
            right now considering profile page as a different page
            point 2a and 2b are contradictory, have to take /home and /profile or /home/profile
            point
            point 3b says take to new page, then /home/profile not possible */
        // navigate('/home/profile')
        navigate('/profile')
    }
    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {
                                tableHeaders.map((head) => {
                                    return (
                                        <TableCell>{head}</TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            list.map((d: Person, ind: number) => {
                                return (
                                    <TableRow key={d.name} onClick={() => handlePersonSelection({ ...d }, ind)}>
                                        <TableCell>{d.name}</TableCell>
                                        <TableCell>{d.age}</TableCell>
                                        <TableCell>{d.proffession}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default PersonDetails;