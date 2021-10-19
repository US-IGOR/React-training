import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontroledRating} from "./UncontroledRating";

export default {
    title: 'components/UncontroledRating',
    component: UncontroledRating
};

const callBack=action('rating changed inside component')

export const EmptyRating = ()=> <UncontroledRating defaultValue={0} onChange={callBack}/>
export const Rating1 = ()=> <UncontroledRating defaultValue={1} onChange={callBack}/>
export const Rating2 = ()=> <UncontroledRating defaultValue={2} onChange={callBack}/>
export const Rating3 = ()=> <UncontroledRating defaultValue={3} onChange={callBack}/>
export const Rating4 = ()=> <UncontroledRating defaultValue={4} onChange={callBack}/>
export const Rating5 = ()=> <UncontroledRating defaultValue={5} onChange={callBack}/>
