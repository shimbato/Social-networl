import React from "react";
import { addPost } from "../redux/store";
import {MyPosts} from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import c from "./Profile.module.css"
import { MyPostsContainer } from "./myPosts/MyPostsСontainer";

const Profile = (props) => {

  return (
    <div>

      <div>
        <ProfileInfo/>
        <MyPostsContainer />
      </div>

    </div>
  )

}

export default Profile;