import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

// const [counter, setValue] = useState(0);
// -> 리액트 앱으로 하는 중이라 앞에 React 안붙여도됨

// state를 변경할 때 ‘모든’ code 들을 항상 다시 실행됨
// 첫 번째 render에만 코드가 실행되고 다른 state변화에는 실행되지 않도록 만들자
// 예) API를 통해 데이터를 가져올 때 컴포넌트 렌더에서 API를 부르고
// 이후 상태가 변화할 때 그 API에서 데이터를 다시 가져오지 않게 만들 수 있다.
