import React from "react";
import MyPosts from "../MyPosts";
import c from "./Post.module.css"

const Post = (props) => { 
  
 

  return (
    <>
    <div className={c.item}>
      <img src="https://images.prom.ua/1980590661_1980590661.jpg?PIMAGE_ID=1980590661"
      />
      {props.message} 
     
    </div>
    <span>{props.likesCount}</span>
    </>
  )
  
}

export default Post;