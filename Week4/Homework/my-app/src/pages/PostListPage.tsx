import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../apis/post";
import PostCard from "../components/PostCard";
import * as styles from "../styles/PostListPage.css";

const PostListPage = () => {
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data, isPending, isError } = useQuery({
    queryKey: ["posts", keyword],
    queryFn: () => getPosts(keyword),
  });

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.searchForm}
        onSubmit={(e) => {
          e.preventDefault();
          setKeyword(input.trim());
        }}
      >
        <input
          className={styles.searchInput}
          value={input}
          placeholder="제목으로 검색"
          onChange={(e) => {
            setInput(e.target.value);
            if (e.target.value.trim() === "") setKeyword("");
          }}
        />
        <button
          type="submit"
          className={styles.searchButton}
          disabled={input.trim().length < 2}
        >
          검색
        </button>
      </form>

      {isPending && <p className={styles.message}>게시글을 불러오는 중...</p>}
      {isError && <p className={styles.message}>게시글을 불러오지 못했어요.</p>}
      {data?.posts.length === 0 && <p className={styles.message}>게시글이 없어요.</p>}

      <ul className={styles.list}>
        {data?.posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;
