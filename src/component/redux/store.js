import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";

export let store = {
     _state : {
        profilePage: {
            posts: [
                { id: 1, message: "Hi,how are you?", likesCount: "like 12" },
                { id: 2, message: "V's Birthday", likesCount: "like 11" },
                { id: 3, message: "Hi!", likesCount: "like 20" },
                { id: 4, message: " Birthday?", likesCount: "like 59" },
    
            ],
            newPostText: 'it-kamasutra'
        },
    
        dialogsPage: {
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
            
    
        },
        sidebar: {},
    
    },
    getState() {
        return this._state;
    },
    subscribe(observer) { // паттерны
        this._callSubscribe = observer;
    },
    _callSubscribe(){ 
        console.log("state changed")
    },
    dispatch(action){ // {type: "ADD-POST"}

        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer( this._state.sidebar, action);
        
        this._callSubscribe(this._state);
    }
  
} 

window.store= store ;

// state -ОПП