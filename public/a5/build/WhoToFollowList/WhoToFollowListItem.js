const WhoToFollowListItem = (who) => {
  return `
    <div class="card">
    <div class="card-body">
      <div class="card-details">
        <img
          class="follow-logo"
          src="${who.avatarIcon}"
          alt="logo"
          srcset=""
        />
        <div>
          <div class="card-text">${who.userName}</div>
          <div class="handle">@${who.handle}</div>
        </div>
        <i class="fa fa-check-circle mt-1"></i>
      </div>
      <div class="follow-button">
        <button type="button" class="btn btn-sm btn-primary">
          Follow
        </button>
      </div>
    </div>
  </div>`;
};

export default WhoToFollowListItem;
