import './styles.css'

import { PostCard } from "../PostCard";

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        key={post.id}
        post={post}
        // OR
        // id={post.id}
        // title={post.title}
        // body={post.body}
        // cover={post.cover}
      />
    ))}
  </div>
);
