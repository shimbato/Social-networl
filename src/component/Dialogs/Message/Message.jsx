import React from "react";

import c from './../Dialogs.module.css';




export const Message = (props) => {
    return <div className={c.dialogs}>{props.message}</div>

}

