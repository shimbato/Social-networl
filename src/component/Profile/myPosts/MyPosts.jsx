import React from "react";
import c from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {


  const posts = [
    { id: 1, message: "Hi,how are you?", likesCount: 12 },
    { id: 2, message: "V's Birthday", likesCount: 11 },
    { id: 3, message: "Hi!", likesCount: 14 },
    { id: 4, message: " Birthday?", likesCount: 15 },

  ]
  let postsElement = 
  posts.map(p =><Post message={p.message} likesCount={p.likesCount} />)
  return (

    <div className={c.postsBlock}>
      <h3>My post</h3>

      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>

      </div>

      <div className={c.posts}>
      {postsElement}

      </div>
    </div>
  )

}

export default MyPosts;