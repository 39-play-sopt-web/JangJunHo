import { useNavigate, useParams } from "react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, getPost } from "../apis/post";
import { FormatDate } from "../utils/FormatDate";
import * as styles from "../styles/PostDetailPage.css";

const PostDetailPage = () => {
  const { postId } = useParams();
  const id = Number(postId);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: post, isPending, isError } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });

  const { mutate: removePost, isPending: isDeleting } = useMutation({
    mutationFn: () => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      alert("삭제되었어요.");
      navigate("/posts", { replace: true });
    },
    onError: () => {
      alert("게시글 삭제에 실패했어요. 본인이 작성한 글만 삭제할 수 있어요.");
    },
  });

  const handleDelete = () => {
    if (confirm("정말 삭제할까요?")) removePost();
  };

  if (isPending) return <p className={styles.message}>게시글을 불러오는 중...</p>;
  if (isError) return <p className={styles.message}>게시글을 불러오지 못했어요.</p>;

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.backButton} onClick={() => navigate("/posts")}>
        👈 목록으로
      </button>
      <article className={styles.card}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span className={styles.author}>{post.author}</span>
          <span>{FormatDate(post.createdAt)}</span>
        </div>
        <p className={styles.content}>{post.content}</p>
        <div className={styles.buttons}>
          <button type="button" className={styles.subButton} onClick={() => navigate(`/posts/${id}/edit`)}>
            수정
          </button>
          <button type="button" className={styles.mainButton} onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? "삭제 중..." : "삭제"}
          </button>
        </div>
      </article>
    </div>
  );
};

export default PostDetailPage;
