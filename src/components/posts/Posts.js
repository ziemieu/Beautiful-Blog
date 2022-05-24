import Post from "../post/Post";
import "./posts.css";


export default function Posts ({posts}) {
  return (
    <div className="post">
      {posts.map((p)=> (
       <Post post={p}/>
      ))}
    </div>
  );
}
