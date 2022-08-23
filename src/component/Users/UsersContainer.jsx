import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../redux/usersReducer";
import  Users  from "./Users";



let mapStateToProps = (state) => {
   
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId));
        },
        follow: (usersId) => {
            dispatch(unfollowAC(usersId));
        },
        follow: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);