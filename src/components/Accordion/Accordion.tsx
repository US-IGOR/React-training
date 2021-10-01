import React from "react";

export function Accordion() {
    return <div>
            <AccordionTitle/>
        <AccordionBody/>
        </div>
}

const AccordionTitle = () => {
    return (<div>Menu</div>)
}
const AccordionBody = () => {
    return (<div>
            <ul>1</ul>
        <ul>2</ul>
        <ul>3</ul>
        </div>)
}