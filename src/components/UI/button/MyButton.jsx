import React from "react";
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} class={classes.myBtn}>
            {children}
        </button>
    )
}

export default MyButton