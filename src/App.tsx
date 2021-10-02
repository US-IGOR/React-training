import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontroledAccordion} from "./components/UncontroledAccordion/UncontroledAccordion";
import {UncontroledRating} from "./components/UncontroledRating/UncontroledRating";

function App() {
    console.log('rendering App')
    return (
        <div className="App">
            <OnOff/>
            <UncontroledAccordion title={'Menu'}/>
            <UncontroledRating/>




        </div>
    );
}

const PageTitle = (props: any) => {
    return (<div>{props.title}</div>)
}


export default App;
