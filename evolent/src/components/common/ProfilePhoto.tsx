import React from "react";

const ProfilePhoto = (props) => {
  const getComputedStyle = () => {
    return {
      width: props.width,
      height: props.height,
      backgroundColor: props.bgColor,
    };
  };

  return props.url ? (
    <img
      src={props.url}
      width={props.width}
      height={props.height}
      className={props.cssClass}
    ></img>
  ) : (
    <div className={`avatar ${props.cssClass}`} style={getComputedStyle()}>
      {props.initials}
    </div>
  );
};

export default ProfilePhoto;
