import "./styles.css";

export const PostCard = ({ post }) => (
  // OR
  // const post = props.post;
  // const { post } = props;

  <div className="post">
    <img src={post.cover} alt={post.title} />
    <div className="post-content">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  </div>
);
