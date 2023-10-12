import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { PersonDetailsForm } from "./personDetailsForm";
import { Person } from "../../store/slices/person-slice";

interface DailogWrapper {
    dailogOpen: boolean,
    handleClose: (open: boolean) => void,
    add: (deatils: Person) => void,
}

const DialogWrapper = (props: DailogWrapper) => {
    const { dailogOpen, handleClose, add } = props;

    return (
        <Dialog open={dailogOpen} onClose={handleClose} >
            <DialogTitle>Add Details</DialogTitle>
            <DialogContent>
                <PersonDetailsForm
                    handleClose={handleClose}
                    add={add}
                />
            </DialogContent>
        </Dialog>
    )
}

export const DialogWrapperMemonized = React.memo(DialogWrapper)