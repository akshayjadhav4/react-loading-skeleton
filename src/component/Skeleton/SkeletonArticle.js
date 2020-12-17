import React from "react";
import Skeleton from "./Skeleton";
const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || "light";
  return (
    <div className={`skeletonArticle__wrapper ${themeClass}`}>
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
