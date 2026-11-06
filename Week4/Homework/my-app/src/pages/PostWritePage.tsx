import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../apis/post";
import * as styles from "../styles/PostWritePage.css";

const LIMITS = [50, 1000, 20];

const PostWritePage = () => {
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      alert(`${author}님, 게시글이 등록되었어요!`);
      navigate("/posts");
    },
    onError: () => {
      alert("게시글 등록에 실패했어요. 다시 시도해 주세요.");
    },
  });

  const value = [title, content, author][step];
  const limit = LIMITS[step];
  const isOver = value.length > limit;
  const isLastStep = step === 2;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>글쓰기</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          if (isLastStep) mutate({ title, content, author });
          else setStep(step + 1);
        }}
      >
        {step === 0 && (
          <div className={styles.field}>
            <label className={styles.label} htmlFor="title">
              제목
            </label>
            <input
              id="title"
              className={styles.input}
              value={title}
              placeholder="제목을 입력하세요"
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </div>
        )}
        {step === 1 && (
          <div className={styles.field}>
            <label className={styles.label} htmlFor="content">
              본문
            </label>
            <textarea
              id="content"
              className={styles.textarea}
              value={content}
              placeholder="본문을 입력하세요"
              onChange={(e) => setContent(e.target.value)}
              autoFocus
            />
          </div>
        )}
        {step === 2 && (
          <div className={styles.field}>
            <label className={styles.label} htmlFor="author">
              작성자
            </label>
            <input
              id="author"
              className={styles.input}
              value={author}
              placeholder="이름을 입력하세요"
              onChange={(e) => setAuthor(e.target.value)}
              autoFocus
            />
          </div>
        )}

        <div className={styles.info}>
          {isOver && <p className={styles.error}>{limit}자 이내로 입력해 주세요.</p>}
          <p className={styles.counter}>
            {value.length} / {limit}
          </p>
        </div>

        <div className={styles.buttons}>
          <button type="button" className={styles.cancelButton} onClick={() => navigate("/posts")}>
            목록으로
          </button>
          <button type="submit" className={styles.submitButton} disabled={!value.trim() || isOver || isPending}>
            {isLastStep ? (isPending ? "작성 중..." : "작성") : "다음"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostWritePage;