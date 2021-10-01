import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            This is APP component
            <Rating />
            <Accordion/>
        </div>
    );
}



function Rating() {
    return (
        <div>
            <Star/>
        </div>
    )
}

const Star = ()=> {
    return(<div>star</div>)
}

const AppTitle =()=> {
    return <div>Title</div>
}

function Accordion () {
    return <div>
        <h3>Menu</h3>
        <ul>1</ul>
        <ul>2</ul>
        <ul>3</ul>
    </div>
}




export default App;
