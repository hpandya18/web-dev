import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import HomeComponent from "./HomeComponent.js";

$("#wd-home").append(`
        <div class="row">
        <div class="col-2 col-xxl-2 col-xl-2 col-l-2 col-md-2">
        ${NavigationSidebar("home")}
    
        </div>
        <div class="col-7 col-xxl-7 col-xl-7 col-l-7 col-md-6">
        ${HomeComponent()}
        </div>
        <div
          class="col-3 col-xxl-3 col-xl-3 col-l-3 col-md-4 post-summary-list"
        >
        ${PostSummaryList()}
        </div>
      </div>
    `);

// $("#wd-todo").append(`
//     <div class="container">
//         <h1>Todo example</h1>
//         ${TodoList()}
//     </div>
// `);
