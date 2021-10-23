import React, {useReducer, useState} from "react";
import {log} from "util";

type UncontroledAccordionPropsType = {
    title: string
    /*   collapsed: boolean*/
}
type AccordionTitlePropsType = {
    title: string,
    onClick: ()=>void

}

type ActionType={ type:string}

const reducer = (state:boolean, action:ActionType) => {
    if (action.type === "TOGGLE-COLLAPSED") {
        return !state
    }
    return state
}


export function UncontroledAccordion(props: UncontroledAccordionPropsType) {

    let [collapsed, dispatch] = useReducer(reducer,true)

    return <div>
        <AccordionTitle2  title={props.title} onClick={() => {dispatch({type:"TOGGLE-COLLAPSED"})}}/>

        {!collapsed && <AccordionBody/>}
    </div>
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