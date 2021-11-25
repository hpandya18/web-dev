import React, { useEffect } from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllWhos } from "../../../../services/whoService";

const selectAllWho = (state) => state.who.who;

const WhoToFollowList = () => {
  const dispatch = useDispatch();
  useEffect(() => fetchAllWhos(dispatch), []);
  const who = useSelector(selectAllWho);
  return (
    <ul className="list-group">
      <li className="list-group-item fw-bold">Who to follow</li>
      {who.map((who) => {
        return <WhoToFollowListItem who={who} />;
      })}
    </ul>
  );
};

export default WhoToFollowList;
