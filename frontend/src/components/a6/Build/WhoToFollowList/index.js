import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import whos from "./who";
const WhoToFollowList = () => {
  return (
    <>
      <ul className="list-group">
        {whos.map((who, index) => {
          return <WhoToFollowListItem who={who} key={index} />;
        })}
      </ul>
    </>
  );
};

export default WhoToFollowList;
