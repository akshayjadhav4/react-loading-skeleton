import React from "react";
import Skeleton from "./Skeleton";

const SkeletonProfile = () => {
  return (
    <div className="skeletonProfile__wrapper">
      <div className="skeletonProfile__container">
        <div className="skeletonProfile__left">
          <Skeleton type="avatar" />
        </div>
        <div className="skeletonProfile__Right">
          <Skeleton type="title" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonProfile;