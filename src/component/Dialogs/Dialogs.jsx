import React from "react";
import { NavLink } from "react-router-dom";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogsReducer";
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
  
    
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key ={d.id} id={d.id} /> )
    let messageElement = state.messages.map(m => <Message message={m.message} key = {m.message}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
    props.sendMessage();
    }

    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body);
    }
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
               
               {dialogsElement}
               
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
            </div>
            <div className={c.messages}>
                <div>{messageElement}</div>
                <div>
                    <div> <textarea 
                    value={newMessageBody} 
                    onChange={onNewMessageChange}
                    placeholder="Enter your message"/></div>
                    <div><button onClick={onSendMessageClick}> Send</button></div>

                </div>
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