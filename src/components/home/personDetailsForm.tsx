import React, { ChangeEvent } from "react";
import TextField from '@mui/material/TextField';
import useTextFieldHandler from "../../hooks/useTextFieldHandler";
import { Button, ButtonGroup } from "@mui/material";
import { Person } from "../../store/slices/person-slice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface DeatilsProps {
    add: (details: Person) => void,
    handleClose: (open: boolean) => void,
}

const PersonDetailsFormNonMemonized = (props: DeatilsProps) => {
    const { add, handleClose } = props;
    const selectedPerson = useSelector((state: RootState) => state.persons.selectedPerson);
    const editMode = useSelector((state: RootState) => state.persons.editMode);
    const { data: name, setData: handleNameChange } = useTextFieldHandler(selectedPerson ? selectedPerson?.name : "");
    const { data: age, setData: handleAgeChange } = useTextFieldHandler(selectedPerson ? selectedPerson?.age.toString() : "");
    const { data: proffession, setData: handleProffessionChange } = useTextFieldHandler(selectedPerson ? selectedPerson?.proffession : "");
    return (
        <>
            <div>
                <TextField
                    label="Name"
                    variant="standard"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleNameChange(e.target.value)}
                    value={name} />
                <TextField
                    label="Age"
                    variant="standard"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleAgeChange(e.target.value)}
                    value={age} />
                <TextField
                    label="Proffession"
                    variant="standard"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleProffessionChange(e.target.value)}
                    value={proffession} />

            </div>

            <div>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => handleClose(false)} >Cancel</Button>
                    {editMode ?
                        (<Button
                            onClick={() => add({ name, age: Number(age), proffession })}
                        >
                            Edit
                        </Button>) :
                        (<Button
                            onClick={() => add({ name, age: Number(age), proffession })}
                        >
                            Add
                        </Button>)
                    }

                </ButtonGroup>
            </div>

        </>
    )
}

export const PersonDetailsForm = React.memo(PersonDetailsFormNonMemonized);