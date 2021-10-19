import React from "react";


type UsersType = {
    user:string
    value:any
}
type AccordionPropsType = {
    title: string
    collapsed: boolean,
    cb: () => void
    users: UsersType[]
    clickCB:(value:any)=>void
}
type AccordionTitlePropsType = {
    title: string,
    cb: () => void,
}
type AccordionBodyPropsType = {
    users: UsersType[]
    clickCB:(value:any)=>void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (<div onClick={props.cb}>{props.title}</div>)
}


const AccordionBody = (props: AccordionBodyPropsType) => {
    return (<div>
        {props.users.map((m,index) => <li key={index}  onClick={()=>{props.clickCB(m.value)}}>{m.user}</li>)}
    </div>)
}


export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.title} cb={props.cb}/>
        {
            !props.collapsed && <AccordionBody users={props.users} clickCB={props.clickCB}/>}
    </div>
}



