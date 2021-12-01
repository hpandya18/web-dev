const PostSummaryItem = (post) => {
  return `
<div class="card card-post pt-1">
<div class="card-topic">${post.topic}</div>
<div class="card-title-name">
  <span class="card-topic-name">${post.userName}</span>
  <i class="fa fa-check-circle mt-1"></i>
  <span class="dot-class">&#x2022;</span>
  ${post.time}
</div>
<div class="post-card-body">
  <p class="card-text post-card-text">
    ${post.title}
  </p>
  <img class="post-logo" src="${post.image}" alt="" />
</div>
</div>
`;
};

export default PostSummaryItem;
