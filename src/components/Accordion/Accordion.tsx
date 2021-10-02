import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean,
    cb:()=>void
}
type AccordionTitlePropsType = {
    title: string,
    cb:()=>void
}


export function Accordion(props: AccordionPropsType) {
    return <div>

        <AccordionTitle title={props.title} cb={props.cb}/>

        {

            !props.collapsed  && <AccordionBody/>}
    </div>
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (<div onClick={()=>{props.cb()}}>{props.title}</div>)
}
const AccordionBody = () => {
    return (<div>
        <ul>1</ul>
        <ul>2</ul>
        <ul>3</ul>
    </div>)
}