import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { issueAuthCode } from "../apis/auth";                
import { getAuthCode, setAuthCode, setPart } from "../constants/storage";
import * as styles from "../styles/CodePage.css";

const PARTS = ["WEB", "IOS", "ANDROID"];

const CodePage = () => {
  const [selectedPart, setSelectedPart] = useState("");
  const navigate = useNavigate();

  // 코드 발급 요청
  const { mutate, isPending } = useMutation({
    mutationFn: issueAuthCode,
    onSuccess: (data) => {
      setAuthCode(data.authorizationCode);
      setPart(selectedPart);
      navigate("/posts");
    },
    onError: () => {
      alert("코드 발급에 실패했어요. 다시 시도해 주세요.");
    },
  });

    return (
    <div className={styles.wrapper}>
      <h1>PLAY SOPT 게시판</h1>
      <h2>파트를 선택하면 코드가 발급됩니다.</h2>
      {/* 파트 선택, 발급 버튼 */}
      <div className={styles.form}>
        <select
          className={styles.select}
          value={selectedPart}
          onChange={(e) => setSelectedPart(e.target.value)}
        >
          <option value="">파트를 선택하세요.</option>
          {PARTS.map((part) => (
            <option key={part} value={part}>
              {part}
            </option>
          ))}
        </select>
        <button
          type="button"
          className={styles.issueButton}
          onClick={() => mutate(selectedPart)}
          disabled={!selectedPart || isPending} // 파트 미선택, 요청 중이면 비활성화
        >
          {isPending ? "발급 중..." : "코드 발급받기"}
        </button>
      </div>

      <Link
        to="/posts"
        className={styles.listLink}
        onClick={(e) => {
          // 발급받은 코드가 없으면 이동 막기
          if (!getAuthCode()) {
            e.preventDefault();
            alert("먼저 파트를 선택하고 코드를 발급받아 주세요.");
          }
        }}
      >
        게시판 목록 보기
      </Link>
    </div>
  );
};

export default CodePage;