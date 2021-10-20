import React from "react";
const WhoToFollowListItem = ({
  who = {
    avatarIcon: "../../../images/nasa.png",
    userName: "NASA",
    handle: "NASA",
  },
}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-details">
            <img
              className="follow-logo"
              src={who.avatarIcon}
              alt="logo"
              srcSet=""
            />
            <div>
              <div className="card-text">{who.userName}</div>
              <div className="handle">{who.handle}</div>
            </div>
            <i className="fa fa-check-circle mt-1"></i>
          </div>
          <div className="follow-button">
            <button type="button" className="btn btn-sm btn-primary">
              Follow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoToFollowListItem;
