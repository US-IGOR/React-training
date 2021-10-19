import React, {useState} from "react";


type RatingPropsType = {


    /**
     *  optional element
     */
    defaultValue?: RatingValueType
    onChange:(value:RatingValueType)=>void

}

export function UncontroledRating(props: RatingPropsType) {

    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)


    return (<div>
        <Star selected={value > 0} cb={() => {setValue(1); props.onChange(1)}}/>
        <Star selected={value > 1} cb={() => {setValue(2); props.onChange(2)}}/>
        <Star selected={value > 2} cb={() => {setValue(3); props.onChange(3)}}/>
        <Star selected={value > 3} cb={() => {setValue(4); props.onChange(4)}}/>
        <Star selected={value > 4} cb={() => {setValue(5); props.onChange(5)}}/>
    </div>)


}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type PropsType = {
    selected: boolean,
    cb: () => void

}
const Star = (props: PropsType) => {
    return <span onClick={() => {
        props.cb()
    }}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}
