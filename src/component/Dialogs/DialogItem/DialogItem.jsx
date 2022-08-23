import React from "react";
import { NavLink } from "react-router-dom";
import c from './../Dialogs.module.css';

export const DialogItem = (props) => {
    let path = "/dialogs" + props.id;

    return <div className={c.dialog + ' ' + c.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>;
}

