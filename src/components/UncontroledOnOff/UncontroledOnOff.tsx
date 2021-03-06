import React, {useState} from 'react';


type PropsType = {
    change: (on: boolean) => void
}


export const UncontroledOnOff = (props: PropsType) => {
    console.log('rendering OnOff')
    const [on, setOn] = useState(true)

    console.log('on: ' + on)


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: '5px',
        marginTop: '5px',
        backgroundColor: on ? 'green' : 'white'
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: '2px',
        marginTop: '5px',
        backgroundColor: on ? 'white' : 'red'
    };
    const indikatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: '5px',
        marginTop: '5px',
        backgroundColor: on ? 'green' : 'red'
    };

    const changedOn = () => {
        setOn(true)
        props.change(true)
    }
    const changedOff = () => {
        setOn(false)
        props.change(false)
    }

    return <div>
        <div style={onStyle} onClick={changedOn}>on</div>
        <div style={offStyle} onClick={changedOff}>off</div>
        <div style={indikatorStyle}></div>
    </div>
}