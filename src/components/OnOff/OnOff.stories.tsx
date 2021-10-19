import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";


export default {
    title: 'components/OnOff',
    component: OnOff,
    };

export const OnMode = ()=> <OnOff change={action('clicked')} on={true}/>
export const OffMode = ()=> <OnOff change={action('clicked')} on={false}/>
export const ModeChanging = ()=> {
    const [value,setValue] = useState<boolean>(true);
    return <OnOff change={setValue} on={value}  />};