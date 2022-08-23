import React from "react";
import { addPostActionCreator, updateNewPostText, updateNewPostTextActionCreator } from "../../redux/profileReducer";
import c from "./MyPosts.module.css";
import Post from "./post/Post";


export const MyPosts = (props) => {

  let postsElement =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
   props.addPost();
  
  }
  let onPostChange =() => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  
  }
  return (

    <div className={c.postsBlock}>
      <h3>My post</h3>

      <div>
        <div>
          <textarea 
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          />
          
        </div>
        <div>
          <button onClick={ onAddPost}>Add post</button>
        </div>

      </div>

      <div className={c.posts}>
        {postsElement}

      </div>
    </div>
  )

}

