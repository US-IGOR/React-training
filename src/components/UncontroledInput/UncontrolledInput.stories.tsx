import React, {useRef, useState} from 'react';
import {UncontrolledInput} from "./UncontroledInput";

export default {
    title: 'components/UncontrolledInput',
    component: UncontrolledInput,
};


export const TrackUncontrolledInput = () => {
    const [value, setValue] = useState('')

    return <div><input onChange={event => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }}
    />-{value}-
    </div>
}


export const TrackUncontrolledInputByButton = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }


    return <div><input ref={inputRef} id={'inputId'}/>



        <button onClick={ save  }>save
        </button>
        <br/>
        actual value :{value}
    </div>
}

