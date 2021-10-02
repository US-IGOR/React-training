import React, {useState} from "react";

type UncontroledAccordionPropsType = {
    title: string
 /*   collapsed: boolean*/
}
type AccordionTitlePropsType = {
    title: string,

}


export function UncontroledAccordion(props: UncontroledAccordionPropsType) {

    const [collapsed,setCollapsed]=useState(false)


    return <div>
        <AccordionTitle title={props.title}/>
        <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
        {!collapsed  && <AccordionBody/>}
    </div>
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (<div>{props.title}</div>
    )
}
const AccordionBody = () => {
    return (<div>
        <ul>1</ul>
        <ul>2</ul>
        <ul>3</ul>
    </div>)
}