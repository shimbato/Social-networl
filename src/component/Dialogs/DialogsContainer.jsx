import React from "react";
import { connect } from "react-redux";

import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogsReducer";

import Dialogs from "./Dialogs";



let mapStateToProps =(state) => {
    return {
        dialogsPage: state.dialogsPage
    }
  }
  let mapDispatchToProps = (dispatch) => {
     return {
          updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
    },
          sendMessage: () => {
          
          dispatch(sendMessageCreator());
    }

   }
  }
  
 export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps )(Dialogs);





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