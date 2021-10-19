import React, {ChangeEvent, useRef, useState} from 'react';
import {Input} from "./Input";
import {action} from "@storybook/addon-actions";

export default {
    title: 'components/Input',
    component: Input,
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


        <button onClick={save}>save
        </button>
        <br/>
        actual value :{value}
    </div>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const handler = (e:ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
return <input value={parentValue} onChange={handler}
/>
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)
    const handler = (e:ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)
    return <input type={'checkbox'} checked={parentValue} onChange={handler}
                  />
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState <string| undefined>(undefined)
   const handler = (e:ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)
    return     <select value={parentValue} onChange={handler}>
        <option >none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>2
    </select>
}