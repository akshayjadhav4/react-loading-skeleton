import React from "react";
import Skeleton from "./Skeleton";
const SkeletonArticle = () => {
  return (
    <div className="skeletonArticle__wrapper">
      <div className="skeletonArticle__item">
        <Skeleton type="title" />
        <Skeleton type="text" />
        <Skeleton type="text" />
        <Skeleton type="text" />
      </div>
    </div>
  );
};

export default SkeletonArticle;
