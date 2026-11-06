import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "../apis/post";
import { FormatDate } from "../utils/FormatDate";
import * as styles from "../styles/PostDetailPage.css";

const PostDetailPage = () => {
  const { postId } = useParams();
  const id = Number(postId);
  const navigate = useNavigate();

  const { data: post, isPending, isError } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });

  if (isPending) return <p className={styles.message}>게시글을 불러오는 중...</p>;
  if (isError) return <p className={styles.message}>게시글을 불러오지 못했어요.</p>;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.meta}>
        <span className={styles.author}>{post.author}</span>
        <span>{FormatDate(post.createdAt)}</span>
      </div>
      <p className={styles.content}>{post.content}</p>
      <div className={styles.buttons}>
        <button type="button" className={styles.subButton} onClick={() => navigate("/posts")}>
          목록으로
        </button>
        <button type="button" className={styles.mainButton} onClick={() => navigate(`/posts/${id}/edit`)}>
          수정하기
        </button>
      </div>
    </div>
  );
};

export default PostDetailPage;
