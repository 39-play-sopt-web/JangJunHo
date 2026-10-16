import {createPortal} from "react-dom";
import { css } from "@emotion/react";

const Modal = ({ time, onClose, level }) => {
    return createPortal(
        <div css={modalStyle}>
            <div css={modalContentStyle}>
                <h2>🎉 Level {level} 클리어!</h2>
                <p>{time.toFixed(2)} 초</p>
                <button onClick={onClose}>닫기</button>
            </div>
        </div>,
        document.body
    );
};

// 모달 스타일
const modalStyle = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

// 모달 내용 스타일
const modalContentStyle = css`
    background-color: white;
    padding: 20px;
    width: 300px;
    text-align: center;
    border-radius: 10px;
    text-align: center;
    p {
        font-size: 28px;
        font-weight: bold;
    }
    h2 {
        font-size: 20px; 
    }
    button {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: aquamarine;
        font-weight: bold;
    }
`;

export default Modal;