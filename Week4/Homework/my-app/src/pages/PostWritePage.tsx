import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../apis/post";
import * as styles from "../styles/PostWritePage.css";

const PostWritePage = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      alert("게시글이 등록되었어요.");
      navigate("/posts");
    },
    onError: () => {
      alert("게시글 등록에 실패했어요. 다시 시도해 주세요.");
    },
  });

  const isEmpty = !author.trim() || !title.trim() || !content.trim();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>글쓰기</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          mutate({ author, title, content });
        }}
      >
        <input
          className={styles.input}
          value={author}
          placeholder="작성자 (20자 이내)"
          maxLength={20}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className={styles.input}
          value={title}
          placeholder="제목 (50자 이내)"
          maxLength={50}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={styles.textarea}
          value={content}
          placeholder="내용 (1000자 이내)"
          maxLength={1000}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className={styles.buttons}>
          <button type="button" className={styles.cancelButton} onClick={() => navigate("/posts")}>
            목록으로
          </button>
          <button type="submit" className={styles.submitButton} disabled={isEmpty || isPending}>
            {isPending ? "등록 중..." : "등록하기"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostWritePage;
