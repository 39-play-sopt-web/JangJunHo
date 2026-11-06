import { Link } from "react-router";
import type { Post } from "../types/post";
import { FormatDate } from "../utils/FormatDate";
import * as styles from "../styles/PostCard.css";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <li>
      <Link to={`/posts/${post.id}`} className={styles.card}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.content}>{post.content}</p>
        <div className={styles.meta}>
          <span className={styles.author}>{post.author}</span>
          <span>{FormatDate(post.createdAt)}</span>
        </div>
      </Link>
    </li>
  );
};

export default PostCard;
