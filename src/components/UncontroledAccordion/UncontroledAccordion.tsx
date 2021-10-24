import React, {useReducer} from "react";
import {reducer} from "./Reducer";

type UncontroledAccordionPropsType = {
    title: string

}
type AccordionTitlePropsType = {
    title: string,
    onClick: ()=>void

}

export type stateType= {
    collapsed:boolean
}
const state:stateType = {
    collapsed: true
}

const AccordionTitle2 = (props: AccordionTitlePropsType) => {
    return (<h3 onClick={props.onClick}>{props.title}</h3>)
}

const AccordionBody = () => {
    return (<div>
        <ul onClick={() => {console.log('1')}}>1</ul>
        <ul>2</ul>
        <ul>3</ul>
    </div>)
}




const AccordionTitle2Memo=React.memo(AccordionTitle2)
const AccordionBodyMemo=React.memo(AccordionBody)



export function UncontroledAccordion(props: UncontroledAccordionPropsType) {


    let [collapsed, dispatch] = useReducer(reducer,state)

    return <div>
        <AccordionTitle2Memo  title={props.title} onClick={() => {dispatch({type:"TOGGLE-COLLAPSED"})}}/>

        {!collapsed.collapsed && <AccordionBodyMemo/>}
    </div>
}

