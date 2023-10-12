import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface edit{
  details:Person,
  ind:number
}
export interface Person {
    name:string,
    age:number,
    proffession: string,
}
export interface PersonList  {
    personList: Person[],
    selectedPerson: Person,
    editMode:boolean,
    selectedIndex:number
}
const initialState: PersonList = {
  personList: [
    {
        name:"akansha",
        age:21,
        proffession: "teacher",
    },
    {
        name:"akkansha",
        age:32,
        proffession: "enginner",
    }
  ],
  selectedPerson:{
    name:"",
    age:0,
    proffession:""
  },
  editMode:false,
  selectedIndex:0,
}

export const addPerson = createSlice({
  name: 'add-person',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Person>) => {
      if(state.editMode === true){
        state.personList= state.personList.map((d, ind)=>{
          if(ind === state.selectedIndex){
            return{
              name: action.payload.name,
              age:action.payload.age,
              proffession:action.payload.proffession
            }
            
          }
          return d;
        });
        state.selectedPerson= {
          name: action.payload.name,
          age:action.payload.age,
          proffession:action.payload.proffession
        }
      }else{
        state.personList=[...state.personList, {...action.payload}]
      }
     
    },
    selectedPerson: (state, action: PayloadAction<edit>) => {
      state.selectedPerson= {...action.payload.details};
      state.selectedIndex=action.payload.ind
    },
    setEditMode: (state, action: PayloadAction<boolean>) => {
      state.editMode= action.payload
    },
    // edit: (state, action: PayloadAction<edit>) => {
    //   console.log('akana', action.payload)
    //   state.personList= state.personList.map((d, ind)=>{
    //     if(ind === state.selectedIndex){
    //       return{
    //         name: action.payload.details.name,
    //         age:action.payload.details.age,
    //         proffession:action.payload.details.proffession
    //       }
          
    //     }
    //     return d;
    //   })
    // },
  },
})

export const { add,selectedPerson, setEditMode } = addPerson.actions

export default addPerson.reducer