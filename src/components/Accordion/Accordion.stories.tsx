import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {RatingValueType} from "../UncontroledRating/UncontroledRating";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'components/Accordion',
    component: Accordion,
};



const callback = action("Accord mode");
const clickCB = action("Click mode");
export const CollapsedMode = () =>
    <Accordion users={[{user: 'Roma', value: 1},
        {user: 'Evgenia', value: 2},
        {user: 'Igor', value: 3}]}
               title={'hello'}
               collapsed={true}
               cb={callback}
               clickCB={clickCB}
    />
export const UnCollapsedMode = () =>
    <Accordion users={[{user: 'Roma', value: 1},
        {user: 'Evgenia', value: 2},
        {user: 'Igor', value: 3}]}
               title={'users'}
               collapsed={false}
               cb={callback}
               clickCB={clickCB}/>

export const ModeChang = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        title={"Users"}
        collapsed={value}
        cb={() => setValue(!value)}
        users={[{user: 'Roma', value: 1},
            {user: 'Evgenia', value: 2},
            {user: 'Igor', value: 3}]}
        clickCB={clickCB}
    />
}