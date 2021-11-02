import React, {useEffect, useState} from "react";

export const HookUseEffect = () => {
    const [seconds, setSeconds] = useState(58);
    const [minutes, setMinutes] = useState(11);

    if (60 === seconds) {
        setSeconds(0);
        setMinutes(minutes + 1)
    }

    useEffect(() => {

        setInterval(() => {

            setSeconds((state) => state + 1)
        }, 100)
    }, [])


    const restart = ()=>{
        setMinutes(0)
        setSeconds(0)

    }

    return (<div>
            <>time: {minutes} : {seconds}</>

        <button onClick={restart}>res.</button>
    </div>)

}
