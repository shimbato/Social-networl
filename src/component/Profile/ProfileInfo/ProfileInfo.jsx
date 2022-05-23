import React from "react";

import c from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>

      <div>
      
        <img src='https://btsarmy.ru/_nw/5/80208136.jpg' />
      </div>
      <div className={c.descriptionBlock}>
        ava + description
      </div>

    </div>
  )

}

export default ProfileInfo;