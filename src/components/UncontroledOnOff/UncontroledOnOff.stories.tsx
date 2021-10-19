import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontroledOnOff} from "./UncontroledOnOff";



export default {
    title: 'components/UncontroledOnOff',
    component: UncontroledOnOff,
    };

const callback = action ('on or off clicked')

export const changedOn = ()=>  <UncontroledOnOff change={action('clicked')} />
export const changedOff = ()=> <UncontroledOnOff change={action('clicked')}/>
