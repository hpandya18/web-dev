const NavigationSidebar = (active) => {
  return `
  <div class="list-group">
    <a
      href="https://en.wikipedia.org/wiki/Dune_(novel)"
      class="list-group-item list-group-item-action "
      aria-current="true"
    >
      <i class="fab fa-twitter"></i>
    </a>
    <a
      href="../HomeScreen/index.html"
      class="${
        active === "home" ? "active" : ""
      } list-group-item list-group-item-action"
      aria-current="true"
      ><i class="fas fa-home"></i>
      <span class="list-group-item-text">Home</span>
    </a>
    <a
      href="../ExploreScreen/index.html"
      class="${
        active === "explore" ? "active" : ""
      } list-group-item list-group-item-action"
      aria-current="true"
      ><i class="far fa-hashtag active"></i>
      <span class="list-group-item-text">Explore</span>
    </a>
    <a
      href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
      class="list-group-item list-group-item-action"
    >
      <i class="far fa-bell"></i>
      <span class="list-group-item-text">Notifications</span></a
    >
    <a
      href="https://en.wikipedia.org/wiki/The_Forever_War"
      class="list-group-item list-group-item-action"
      ><i class="far fa-envelope"></i>
      <span class="list-group-item-text">Messages</span></a
    >
    <a
      href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
      class="list-group-item list-group-item-action"
      ><i class="far fa-bookmark"></i>
      <span class="list-group-item-text">Bookmarks</span></a
    >

    <a
      href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
      class="list-group-item list-group-item-action"
      ><i class="fas fa-list"></i>
      <span class="list-group-item-text">List</span></a
    >
    <a
      href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
      class="list-group-item list-group-item-action"
      ><i class="far fa-user"></i>
      <span class="list-group-item-text">Profile</span></a
    >
    <a
      href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
      class="list-group-item list-group-item-action"
      ><i class="fas fa-minus-circle"></i>
      <span class="list-group-item-text">More</span></a
    >
  </div>
  <div class="d-grid gap-2 mt-2">
    <button class="btn btn-primary" type="button">Tweet</button>
  </div>
  <!-- <button type="button" class="btn btn-primary w-100 mt-2">Tweet</button> -->
    `;
};
export default NavigationSidebar;
