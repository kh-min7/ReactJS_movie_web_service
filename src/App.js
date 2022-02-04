import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

// useEffect
// - 두 개의 argument를 가지는 함수
// - 첫 번째 argument는 우리가 딱 한번만 실행하고 싶은 코드
// - 두 번째는 [] 배열을 넣어줌
// -> useEffect가 컴포넌트의 첫 번째 렌더 시점에 iRunOnlyOnce 함수 호출
// 그리고 상태를 변화시키면 iRunOnlyOnce는 호출되지 않음
// 즉, 한번만 렌더링 됨
// 단순화 하여 useEffect(() => {
// console.log("CALL THE API")
// },[]); 써도 됨
