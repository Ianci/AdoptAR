import React from 'react'
import { Spinner } from '../spinner/Spinner'

export const LoadingPage = (props) => {
    return (
        <div>
            <h1 className={props.classes}>{props.title}</h1>
            <Spinner />            

        </div>
    )
}
