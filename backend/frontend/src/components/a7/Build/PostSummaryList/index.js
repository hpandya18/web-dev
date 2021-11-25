import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts";

const PostSummaryList = () => {
  return (
    <>
      <ul className="list-group">
        {posts.map((post, index) => {
          return <PostSummaryItem post={post} key={index} />;
        })}
      </ul>
    </>
  );
};

export default PostSummaryList;
