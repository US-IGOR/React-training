import {stateType} from "./UncontroledAccordion";

type ActionType = { type: string }
export const reducer = (state: stateType, action: ActionType) => {
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return {...state,
                collapsed:!state.collapsed
            }
        default:
            throw new Error('Action type is bad !!! ')

    }
    return state
}