import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import {Rating} from "./Rating";
import {RatingValueType} from "../UncontroledRating/UncontroledRating";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/Rating',
    component: Rating,
    };

export const EmptyRating = ()=> <Rating value={0} CBonClick={x=>x}/>
export const Rating1 = ()=> <Rating value={1} CBonClick={x=>x}/>
export const Rating2 = ()=> <Rating value={2} CBonClick={x=>x}/>
export const Rating3 = ()=> <Rating value={3} CBonClick={x=>x}/>
export const Rating4 = ()=> <Rating value={4} CBonClick={x=>x}/>
export const Rating5 = ()=> <Rating value={5} CBonClick={x=>x}/>
export const ChangeRating = ()=> {
    const [rating,setRating] = useState<RatingValueType>(5);
    return <Rating value={rating} CBonClick={setRating}/>};
