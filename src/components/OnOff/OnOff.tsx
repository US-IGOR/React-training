import React, {useState} from 'react';

type PropsType = {
    on: boolean,
    change:(on:boolean)=>void
}



export const OnOff = (props: PropsType) => {
    console.log('rendering OnOff')
    const [on,setOn]=useState(true)

    console.log('on: '+props.on)


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: '5px',
        marginTop: '5px',
        backgroundColor:  props.on ? 'green' : 'white'
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: '2px',
        marginTop: '5px',
        backgroundColor:  props.on ? 'white' : 'red'
    };
    const indikatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: '5px',
        marginTop: '5px',
        backgroundColor:  props.on ? 'green' : 'red'
    };


    return <div>
        <div style={onStyle} onClick={ ()=> { props.change (true)}}>on</div>
        <div style={offStyle} onClick={ ()=> {props.change  (false)}}>off</div>
        <div style={indikatorStyle}></div>
    </div>
}