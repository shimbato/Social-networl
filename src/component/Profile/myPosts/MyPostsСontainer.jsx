import React from "react";
import { connect } from "react-redux";
import { StoreContext } from "../../../StoreContext";
import Dialogs from "../../Dialogs/Dialogs";
import { addPostActionCreator, updateNewPostText, updateNewPostTextActionCreator } from "../../redux/profileReducer";
import { store } from "../../redux/store";
import { MyPosts } from "./MyPosts";



const mapStateToProps = (state) => {
  return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
        updateNewPostText: (text) => {
          let action = updateNewPostTextActionCreator(text);
          dispatch(action);
        },
        addPost: () => {
          dispatch(addPostActionCreator())
        }
  }
}
 export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
