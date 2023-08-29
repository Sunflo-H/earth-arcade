"use client";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useAppSelector } from "@/app/hooks";
import { selectGame } from "@/features/game/gameSlice";

const GameScreen: React.FC = () => {
  /**
   * 난이도에 대한 정보를 받아와야해
   * Redux로 가져온다.
   */
  // const { isGameStart, time, category } = useAppSelector(selectGame);
  const isGameStart = useSelector(selectGame);
  // const isGameStart = useAppSelector(selectGame);
  const dispatch = useDispatch();
  console.log(isGameStart);
  // console.log(time);
  // console.log(category);

  /**
   * 이미지를 출력해야해
   */

  /**
   * 다음 버튼을 눌러야해
   */
  return (
    <>
      {/* <img src=""></img> */}
      리덕스 게임 스크린
    </>
  );
};

export default GameScreen;
