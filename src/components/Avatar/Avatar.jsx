import React from "react";
import { useSelector } from "react-redux";
import { IMAGES } from "../../constants/images";
import { Link } from "react-router-dom";

export const Avatar = () => {
  // Get User Data
  const { user } = useSelector((state) => state.user);

  console.log(user);

  // Profile Pic
  const profilePic = user.image ?? IMAGES.AVATAR;
  return (
    <Link to="/profile" className="mx-1">
      <img
        src={profilePic}
        className="rounded-circle"
        width={50}
        alt="user-avatar"
      />
    </Link>
  );
};
