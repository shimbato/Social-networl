const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


let initialsState = {
    dialogs: [
        { id: 1, name: "J-Hope" },
        { id: 2, name: "Sugar" },
        { id: 3, name: "V" },
        { id: 4, name: "Jungkook" },
        { id: 5, name: "RM" }

    ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "yoooo dude, how are you?" },
        { id: 3, message: "Hello dear friends!" },
        { id: 4, message: "Heloooooo" },
        { id: 5, message: "what's up" }
    ],
    newMessageBody: " ",
    

}
export const dialogsReducer = (state = initialsState, action) => {

    // stateCopy.messages = [...state.messages]
    switch (action.type) { 
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            }
            
        case SEND_MESSAGE: 

             let body = state.newMessageBody;
             return {
                 ...state,
                 newMessageBody: '',
                 messages: [ ...state.messages, ({id: 6, message: body})]
             }
             
        default:
            return state;
    }
}

export const  sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator= (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body})
 