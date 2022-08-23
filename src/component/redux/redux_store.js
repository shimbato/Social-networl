import { combineReducers, legacy_createStore } from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import { usersReducer } from "./usersReducer";


let reducers = combineReducers({  

    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,

});

 export let store = legacy_createStore(reducers);
