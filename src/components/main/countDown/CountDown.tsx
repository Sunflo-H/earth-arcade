import { useState } from "react";
const CountDown: React.FC = () => {
  const [count, setCount] = useState(3);
  const timeout = setTimeout(() => {
    console.log("카운트다운~");
    setCount((prev) => --prev);
  }, 1000);
  if (count === 0) clearTimeout(timeout);
  return (
    <>
      {count === 0 ? (
        <p>Start!</p>
      ) : (
        <>
          <h1>퀴즈가 시작됩니다.</h1>
          {count}
        </>
      )}
    </>
  );
};

export default CountDown;
