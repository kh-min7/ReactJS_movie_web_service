import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => consolo.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

// Hello 컴포넌트를 hide할 때는 컴포넌트가 스크린에서 지워지고
// show를 누르면 컴포넌트가 다시 생성되므로
// useEffect도 다시 실행됨을 알 수 있다.
// -> 정해준 useEffect가 컴포넌트가 생성될 때 콘솔 로그를 하라는 것이기 때문
// function Hello() {
// useEffect(() => {
// console.log("Hi");
// }, []);

// 컴포넌트가 destroy될 때도 코드를 실행할 수 있다
// -> return으로 함수를 만들어주면 된다.
// useEffect는 함수를 받고, 이 함수는 dependency가 변화할 때 호출됨
// 현재는 dependency가 비어있으니 컴포넌트가 처음 생성될 때 함수가 호출된 후 다시
// 호출 되지 않음
// 그래서 컴포넌트가 파괴될 때도 함수를 실행하고 싶으면
// useEffect 함수가 새로운 함수를 return해야 함
// -> 왜냐면 deps가 비어있으면 자동으로 컴포넌트가 파괴될 때 cleanup함수가 실행되는데 그 과정이 리렌더링으로 useEffect함수가 실행되고 클린업하면서 이전에 있던 이펙트인 console.log(“created :) )가 삭제되고 새로운 이펙트 함수인 return함수가 실행되기 때문이다.
// 리렌더링 -> 이전 이펙트 클린업 -> 이펙트 실행
// (참고 https://simsimjae.tistory.com/401)
