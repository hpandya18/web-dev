import posts from "./posts.js";

const PostItem = (post) => {
  return `
  <div class="home-post">
  <div class="home-post-title">
    <div class="home-image-div">
      <img
        class="home-owner-image"
        src="${post.image}"
        alt=""
        srcset=""
      />
    </div>
    <div class="home-author-details">
      <span class="home-author-name">${post.userName}</span>
      <span class="home-author-handle">@${post.handle}</span>
      <span>&#8226;</span>
      <span class="home-author-handle">${post.time}</span>
      <span class="home-option"><i class="fas fa-ellipsis-h"></i></span>
      <div class="home-post-details">
        ${post.title}
      </div>
      <div class="card home-card">
        <img src="${post.cardImage}" class="home-card-image" alt="..." />
        <div class="home-card-body">
          <h5 class="home-card-title">${post.topic}</h5>
          <p class="home-card-text">
            ${post.details}
          </p>
        </div>
      </div>
      <div class="home-post-icons">
      <i class="fas fa-comment">${post.comments}</i>
      <i class="fa fa-retweet" aria-hidden="true">${post.retweets}</i>
      <i class="fa fa-heart">${post.likes}</i>
      <i class="fas fa-upload"></i>
    </div>
    </div>
  </div>
</div>
`;
};

export default PostItem;
