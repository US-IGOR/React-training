import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {RatingValueType, UncontroledRating} from "./components/UncontroledRating/UncontroledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontroledAccordion} from "./components/UncontroledAccordion/UncontroledAccordion";
import {UncontroledOnOff} from "./components/UncontroledOnOff/UncontroledOnOff";
import {Input} from "./components/Input/Input";
import {UncontrolledInput} from "./components/UncontroledInput/UncontroledInput";
import {HookUseEffect} from "./components/useEffect/HookUseEffect";
import {Clock} from "./components/Clock/Clock";


function App() {
    console.log('rendering App')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [switchOn2, setSwitchOn2] = useState<boolean>(false)

    const clickCB = (value: any) => {
        alert(`Hi, id #${value}`)
    }


    //React.memo
    const AccordionMemo = React.memo(Accordion)
    const InputMemo = React.memo(Input)
    const OnOffMemo = React.memo(OnOff)
    const RatingMemo = React.memo(Rating)
    const UncontroledAccordionMemo = React.memo(UncontroledAccordion)
    const UncontrolledInputMemo = React.memo(UncontrolledInput)
    const UncontroledOnOffMemo = React.memo(UncontroledOnOff)
    const UncontroledRatingMemo = React.memo(UncontroledRating)


    return (
        <div className="App">
            {/*    <OnOff on={switchOn} change={setSwitchOn}/>
            <Accordion title={'Menu'} collapsed={accordionCollapsed}
                       cb={() => setAccordionCollapsed(!accordionCollapsed)}
                       users={[{user: 'Roma', value: 1},
                           {user: 'Evgenia', value: 2},
                           {user: 'Igor', value: 3}]}
                       clickCB={clickCB}
            />
            <UncontroledRating onChange={() => ''}/>
            <Rating value={ratingValue} CBonClick={setRatingValue}/>

            <UncontroledOnOff change={setSwitchOn2}/>{switchOn2.toString()}
*/}

            {/*    <UncontroledAccordionMemo title={'Menu Unc Acord.'} />*/}

            <HookUseEffect/>
            <Clock/>

        </div>
    );
}

const PageTitle = (props: any) => {
    return (<div>{props.title}</div>)
}


export default App;
