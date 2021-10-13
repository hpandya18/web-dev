import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

$("#wd-explore").append(`
        <div class="row">
        <div class="col-2 col-xxl-2 col-xl-2 col-l-2 col-md-2">
        ${NavigationSidebar()}
    
        </div>
        <div class="col-7 col-xxl-7 col-xl-7 col-l-7 col-md-6">
        ${ExploreComponent()}
        </div>
        <div
          class="col-3 col-xxl-3 col-xl-3 col-l-3 col-md-4 who-to-follow-list"
        >
        ${WhoToFollowList()}
        </div>
      </div>
    `);

// $("#wd-todo").append(`
//     <div class="container">
//         <h1>Todo example</h1>
//         ${TodoList()}
//     </div>
// `);
