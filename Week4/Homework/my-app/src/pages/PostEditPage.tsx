import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPost, updatePost } from "../apis/post";
import type { Post } from "../types/post";
import * as styles from "../styles/PostWritePage.css";

const PostEditForm = ({ post }: { post: Post }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => updatePost(post.id, { title, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", post.id] });
      alert(`${post.author}님, 게시글이 수정되었어요.`);
      navigate(`/posts/${post.id}`);
    },
    onError: () => {
      alert("게시글 수정에 실패했어요. 본인이 작성한 글만 수정할 수 있어요.");
    },
  });

  const isEmpty = !title.trim() || !content.trim();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>게시글 수정</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          mutate();
        }}
      >
        <div className={styles.field}>
          <label className={styles.label} htmlFor="title">
            제목
          </label>
          <input
            id="title"
            className={styles.input}
            value={title}
            maxLength={50}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className={styles.counter}>{title.length} / 50</p>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="content">
            본문
          </label>
          <textarea
            id="content"
            className={styles.textarea}
            value={content}
            maxLength={1000}
            onChange={(e) => setContent(e.target.value)}
          />
          <p className={styles.counter}>{content.length} / 1000</p>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.cancelButton} onClick={() => navigate(`/posts/${post.id}`)}>
            취소
          </button>
          <button type="submit" className={styles.submitButton} disabled={isEmpty || isPending}>
            {isPending ? "수정 중..." : "수정하기"}
          </button>
        </div>
      </form>
    </div>
  );
};

const PostEditPage = () => {
  const { postId } = useParams();
  const id = Number(postId);

  const { data: post, isPending, isError } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });

  if (isPending) return <p className={styles.message}>게시글을 불러오는 중...</p>;
  if (isError) return <p className={styles.message}>게시글을 불러오지 못했어요.</p>;

  return <PostEditForm post={post} />;
};

export default PostEditPage;
