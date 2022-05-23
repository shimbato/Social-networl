import React from "react";
import { NavLink } from "react-router-dom";
import c from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={c.dialog + ' ' + c.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>;
}



let Message = (props) => {
    return <div className={c.dialogs}>{props.message}</div>

}

const Dialogs = (props) => {
    
    let dialogs = [
        { id: 1, name: "J-Hope" },
        { id: 2, name: "Sugar" },
        { id: 3, name: "V" },
        { id: 4, name: "Jungkook" },
        { id: 5, name: "RM" }

    ]
    let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "yoooo dude, how are you?" },
        { id: 3, message: "Hello dear friends!" },
        { id: 4, message: "Heloooooo" },
        { id: 5, message: "what's up" }
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} /> )
    let messageElement = messages.map(m => <Message message={m.message}/>)
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
               
               {dialogsElement}
               
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}


            </div>
            <div className={c.messages}>
                {messageElement}
                {/* <Message message={messageData[0].message} />
                <Message message={messageData[1].message}/>
              */}

            </div>
        </div>
    )
}

export default Dialogs;



{/* <div className={c.dialog + ' ' + c.active}>
                <NavLink to="/dialogs/1">J-Hope</NavLink>
            
               </div>
               <div className={c.dialog}>
                <NavLink to='/dialogs/2'>Sugar</NavLink>
               </div>
               <div className={c.dialog}>
               <NavLink to='/dialogs/3'>RM</NavLink> 
               </div>
               <div className={c.dialog}>
                <NavLink to="/dialogs/4">Jungkook </NavLink>
               </div> */}

        //        <div className={c.messages}>
        //        <Message message="Hi"/>
        //        <div className={c.message}>YOOO, What's up</div>
        //        <div className={c.message}>How you doing</div>

        //    </div>