import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Person, add, selectedPerson, setEditMode } from "../../store/slices/person-slice";
import { RootState } from '../../store//store';
import PersonDetails from "./personDetails";
import { DialogWrapperMemonized } from "../home/dailog"
import { useNavigate, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
const Home = () => {
    const [dailogOpen, setDailogOpen] = useState(false);
    const persons = useSelector((state: RootState) => state.persons.personList);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        let isLoggedIn = localStorage.getItem('loggedin')
        if (isLoggedIn !== "true") {
            navigate('/login')
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("loggedin");
        navigate("/login")

    }


    const addDetails = (details: Person) => {
        dispatch(add({ ...details }))
        setDailogOpen(false)
    }

    const handleDailog = useCallback((val: boolean) => {
        setDailogOpen(val)
    }, [])
    const handleAddDailog = () => {
        setDailogOpen(true);
        dispatch(setEditMode(false));
        dispatch(selectedPerson({ details: { name: "", age: 0, proffession: "" }, ind: 0 }))
    }
    return (
        <>
            <PersonDetails
                list={persons} />
            <Button onClick={handleAddDailog} variant="contained">Add Person</Button>
            <Button onClick={handleLogout} variant="contained">Logout</Button>
            <DialogWrapperMemonized
                dailogOpen={dailogOpen}
                handleClose={handleDailog}
                add={addDetails}
            />
            {/* if you want to show the profile component as part of home
            few ui related changes will be done
            right now considering profile page as a different page
            point 2a and 2b are contradictory, have to take /home and /profile or /home/profile
            point
            point 3b says take to new page, then /home/profile not possible */}
            {/* <Outlet></Outlet> */}
        </>
    )
}

export default Home;