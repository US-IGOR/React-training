import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {RatingValueType, UncontroledRating} from "./components/UncontroledRating/UncontroledRating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    console.log('rendering App')

    let [ratingValue,setRatingValue]=useState<RatingValueType>(0)
    let [accordionCollapsed,setAccordionCollapsed]=useState<boolean>(true)



    return (
        <div className="App">
        {/*    <OnOff/>
            <UncontroledAccordion title={'Menu'}/>*/}
            <Accordion title={'Menu'} collapsed={accordionCollapsed} cb={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>

            <UncontroledRating/>
            <Rating value={ratingValue} CBonClick={setRatingValue}/>




        </div>
    );
}

const PageTitle = (props: any) => {
    return (<div>{props.title}</div>)
}


export default App;
