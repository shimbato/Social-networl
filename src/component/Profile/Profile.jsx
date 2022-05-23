import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import c from "./Profiles.module.css";

const Profile = () => {
  return (
    <div>

      <div>
        <ProfileInfo/>
        <MyPosts />
      </div>

    </div>
  )

}

export default Profile;