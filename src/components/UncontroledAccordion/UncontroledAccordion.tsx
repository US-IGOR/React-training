import React, {useState} from "react";

type UncontroledAccordionPropsType = {
    title: string
 /*   collapsed: boolean*/
}
type AccordionTitlePropsType = {
    title: string,
    onClick:()=>void
}


export function UncontroledAccordion(props: UncontroledAccordionPropsType) {

    const [collapsed,setCollapsed]=useState(false)


    return <div>
        <AccordionTitle title={props.title} onClick={()=>{setCollapsed(!collapsed)}}/>

        {!collapsed  && <AccordionBody/>}
    </div>
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (<h3 onClick={()=>{props.onClick()}}>{props.title}</h3>    )
}
const AccordionBody = () => {
    return (<div>
        <ul>1</ul>
        <ul>2</ul>
        <ul>3</ul>
    </div>)
}