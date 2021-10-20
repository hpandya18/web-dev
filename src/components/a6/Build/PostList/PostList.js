import PostItem from "./PostItem.js";
import posts from "./posts";

const PostList = () => {
  return (
    <>
      <ul className="list-group">
        {posts.map((post, index) => {
          return <PostItem post={post} key={index} />;
        })}
      </ul>
    </>
  );
};

export default PostList;
