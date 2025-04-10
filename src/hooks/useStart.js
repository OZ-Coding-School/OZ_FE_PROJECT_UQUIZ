import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouteName } from "../routes";

export const useStart = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();
  const handleNext = () => {
    if (!nickname) {
      alert("닉네임을 입력해주세요.");
      return;
    }
    navigate(RouteName.quiz(nickname));
  };

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  return { nickname, handleNext, handleNickname };
};
