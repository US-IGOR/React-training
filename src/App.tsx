import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Setting'} collapsed={false}/>
        </div>
    );
}

const PageTitle = (props: any) => {
    return (<div>{props.title}</div>)
}


export default App;
