import {reducer} from "./Reducer";
import {stateType} from "./UncontroledAccordion";

test ('reducer will change value',()=>{
    //data
    const state = {
        collapsed:true
    }

    //action
    const NewState:stateType = reducer(state,{type:"TOGGLE-COLLAPSED"})
    //expected
    expect(NewState.collapsed).toBe(false)
})



test ('reducer will Error',()=>{
    //data
    const state = {
        collapsed:true
    }
    expect( () => {reducer(state,{type:"FAKE-TYPE"})}).toThrowError()
})