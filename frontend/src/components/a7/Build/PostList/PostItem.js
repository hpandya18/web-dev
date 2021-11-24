const PostItem = ({
  post = {
    userName: "Elon Musk",
    handle: "elonmusk",
    time: "23h",
    cardImage: "../assets/inspiration_4x.jpeg",
    title:
      "Amazing show about <span className='link'>@Inspiration4x</span> mission.",
    topic: "Countdown: Inspiration4 Mission to Space. | Netflix official site.",
    details:
      "From training to launch to landing, this all access docuseries rides with with the inspiration4 crewon the first all civilian orbital space.",
    image: "../../../../assets/musk.png",
    comments: "23K",
    retweets: "50K",
    likes: "200K",
  },
}) => {
  return (
    <>
      <div className="home-post">
        <div className="home-post-title">
          <div className="home-image-div">
            <img className="home-owner-image" src={post.image} alt="" />
          </div>
          <div className="home-author-details">
            <span className="home-author-name">{post.userName}</span>
            <span className="home-author-handle">@{post.handle}</span>
            <span>&#8226;</span>
            <span className="home-author-handle">{post.time}</span>
            <span className="home-option">
              <i className="fas fa-ellipsis-h"></i>
            </span>
            <div
              className="home-post-details"
              dangerouslySetInnerHTML={{ __html: post.title }}
            ></div>
            <div className="card home-card">
              <img src={post.cardImage} className="home-card-image" alt="..." />
              <div className="home-card-body">
                <h5
                  className="home-card-title"
                  dangerouslySetInnerHTML={{ __html: post.topic }}
                ></h5>
                <p className="home-card-text">{post.details}</p>
              </div>
            </div>
            <div className="home-post-icons">
              <i className="fas fa-comment">{post.comments}</i>
              <i className="fa fa-retweet" aria-hidden="true">
                {post.retweets}
              </i>
              <i className="fa fa-heart">{post.likes}</i>
              <i className="fas fa-upload"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostItem;
