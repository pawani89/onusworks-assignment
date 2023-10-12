import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DialogWrapperMemonized } from "../home/dailog";
import { useDispatch, useSelector } from "react-redux";
import { Person, add, setEditMode } from "../../store/slices/person-slice";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [open, setOpen] = useState(false)
    const selectedPerson = useSelector((state: RootState) => state.persons.selectedPerson);
    const navigate = useNavigate()
    useEffect(() => {
        let isLoggedIn = localStorage.getItem('loggedin')
        if (isLoggedIn !== "true") {
            navigate('/login')
        }
    }, [])
    // const handleLogout = () => {
    //     localStorage.removeItem("username");
    //     localStorage.removeItem("password");
    //     localStorage.removeItem("loggedin");
    //     navigate("/login")
    // }
    const addDetails = (details: Person) => {
        dispatch(add({ ...details }))
        setOpen(false)

    }
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(false)
        dispatch(setEditMode(false));
    }
    return (
        <>

            <div>
                <p>Details:</p>
                {selectedPerson.name !== "" ? (<><p>{selectedPerson.name}</p>
                    <p>{selectedPerson.age}</p>
                    <p>{selectedPerson.proffession}</p></>) : (<>Kindly come through home page</>)}

            </div>
            {/* <Button onClick={handleLogout} variant="contained">
                Logout
            </Button> */}
            <Button onClick={() => setOpen(true)} variant="contained" disabled={selectedPerson.name === ""}>
                Edit Person
            </Button>
            <Button onClick={() => navigate("/home")} variant="contained">
                Back to Home
            </Button>
            <DialogWrapperMemonized
                dailogOpen={open}
                handleClose={handleClose}
                add={addDetails} />
        </>
    )
}

export default Profile;