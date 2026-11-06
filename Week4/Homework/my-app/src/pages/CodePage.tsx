import { useState } from "react";
import { Link } from "react-router";

const PARTS = ["WEB", "IOS", "ANDROID"];

const CodePage = () => {
    const [selectedPart, setSelectedPart] = useState("");    
    
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
        <button type="button">코드 발급받기</button>
        <Link to="/posts">게시판 목록 보기</Link>
        </>
    )
}
export default CodePage;