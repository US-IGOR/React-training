import React from "react";
import {RatingValueType} from "../UncontroledRating/UncontroledRating";


type RatingPropsType = {
    value: RatingValueType,
    CBonClick: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {


    return (<div>
        <Star selected={props.value > 0} CallBackOnClick={props.CBonClick} value={1}/>
        <Star selected={props.value > 1} CallBackOnClick={props.CBonClick} value={2}/>
        <Star selected={props.value > 2} CallBackOnClick={props.CBonClick} value={3}/>
        <Star selected={props.value > 3} CallBackOnClick={props.CBonClick} value={4}/>
        <Star selected={props.value > 4} CallBackOnClick={props.CBonClick} value={5}/>
    </div>)


}

type PropsType = {
    selected: boolean,
    CallBackOnClick: (value: RatingValueType) => void,
    value: RatingValueType
}
const Star = (props: PropsType) => {
    return <span onClick={() => {
                props.CallBackOnClick(props.value)
    }}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}