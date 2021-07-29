import React from "react";

const ProfilePhoto = (props) => {
  return (
    <img
      src={props.url}
      width={props.width}
      height={props.height}
      className={props.cssClass}
    ></img>
  );
};

export default ProfilePhoto;
