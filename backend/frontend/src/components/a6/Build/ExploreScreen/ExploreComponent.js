import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return (
    <>
      <div className="row search-row">
        <div className="search-bar p-0 mb-2">
          <div className="input-box">
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="&#128269;  Search Twitter"
            />
          </div>
          <div>
            <i className="fa fa-cog fa-2x"></i>
          </div>
        </div>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="../for-you.html">
            For you
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../trending.html">
            Trending
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../news.html">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../sports.html">
            Sports
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../entertainment.html">
            Entertainment
          </a>
        </li>
      </ul>
      <div className="rocket-card card">
        <img
          className="rocket-image"
          src="../../../../assets/rocket1.jpeg"
          alt=""
        />
        <div className="image-content">SpaceX's Starship</div>
      </div>
      <PostSummaryList />
    </>
  );
};
export default ExploreComponent;
