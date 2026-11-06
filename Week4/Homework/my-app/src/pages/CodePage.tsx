import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { issueAuthCode } from "../apis/auth";                
import { setAuthCode, setPart } from "../constants/storage";

const PARTS = ["WEB", "IOS", "ANDROID"];

const CodePage = () => {
  const [selectedPart, setSelectedPart] = useState("");
  const navigate = useNavigate();

  // 코드 발급 요청
  const { mutate, isPending } = useMutation({
    mutationFn: issueAuthCode,
    onSuccess: (data) => {
      setAuthCode(data.authCode);
      setPart(selectedPart);
      navigate("/posts");
    },
    onError: () => {
      alert("코드 발급에 실패했어요. 다시 시도해 주세요.");
    },
  });

  return (
    <>
      <h1>PLAY SOPT 게시판</h1>
      <select value={selectedPart} onChange={(e) => setSelectedPart(e.target.value)}>
        <option value="">파트를 선택하세요.</option>
        {PARTS.map((part) => (
          <option key={part} value={part}>
            {part}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={() => mutate(selectedPart)}
        disabled={!selectedPart || isPending} // 파트 미선택, 요청 중이면 비활성화
      >
        코드 발급받기
      </button>
      <Link to="/posts">게시판 목록 보기</Link>
    </>
  );
};

export default CodePage;
