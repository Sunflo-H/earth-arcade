"use client";

type propsType = {
  //   isGameStart: number;
  //   onSubmit: () => void;
  setIsGameStart: (param: number) => void;
};

const GameSetting: React.FC<propsType> = ({ setIsGameStart }) => {
  const onSubmit = (event: any): void => {
    setIsGameStart(1);
  };
  return (
    <form onSubmit={onSubmit}>
      <p>
        제한시간은
        <select name="limitTime">
          <option value="3">3초</option>
          <option value="5">5초</option>
          <option value="7">7초</option>
          <option value="0">무한</option>
        </select>
      </p>
      <select name="category">
        <option value="young">요즘 가수</option>
        <option value="old">옛날 가수</option>
        <option value="mix">모두</option>
      </select>
      <input type="submit" value="퀴즈 시작"></input>
    </form>
  );
};

export default GameSetting;
