import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}
type AccordionTitlePropsType = {
    title: string
}


export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.title}/>
        {!props.collapsed  && <AccordionBody/>}
    </div>
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (<div>{props.title}</div>)
}
const AccordionBody = () => {
    return (<div>
        <ul>1</ul>
        <ul>2</ul>
        <ul>3</ul>
    </div>)
}