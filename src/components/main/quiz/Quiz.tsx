"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { useAppSelector } from "@/app/hooks";
import { selectGame } from "@/features/game/gameSlice";
import { useState } from "react";
import CountDown from "../countDown/CountDown";
import Image from "./Image";

const Quiz: React.FC = () => {
  /**
   * 난이도에 대한 정보를 받아와야해
   * Redux로 가져온다.
   */
  const { isGameStart, time, category } = useAppSelector(selectGame);
  const [isCount, setIsCount] = useState(true);

  const dispatch = useDispatch();
  console.log(isGameStart);

  /**
   * 이미지를 출력해야해
   */

  /**
   * 다음 버튼을 눌러야해
   */
  return <>{isCount ? <CountDown /> : <Image />}</>;
  // return <Image />;
};

export default Quiz;
