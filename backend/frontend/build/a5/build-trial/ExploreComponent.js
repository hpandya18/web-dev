import PostSummaryList from "./PostSummaryList.js";

const ExploreComponent = () => {
  return `
            <div class="row">
                <!-- search field and cog -->
                <div class="search-bar p-0 mb-2">
                  <div class="input-box">
                    <input
                      type="text"
                      class="form-control"
                      id="search"
                      placeholder="&#128269;  Search Twitter"
                    />
                  </div>
                  <div>
                    <i class="fa fa-cog fa-2x"></i>
                  </div>
              </div>
           </div>
           <ul class="nav nav-tabs">
           <li class="nav-item">
             <a class="nav-link active" href="../for-you.html">For you</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="../trending.html">Trending</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="../news.html">News</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="../sports.html">Sports</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="../entertainment.html"
               >Entertainment</a
             >
           </li>
         </ul>
           <!-- image with overlaid text -->
        <div class="rocket-card card">
           <img class="rocket-image" src="../assets/rocket1.jpeg" alt="" />
           <div class="image-content">SpaceX's Starship</div>
         </div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
