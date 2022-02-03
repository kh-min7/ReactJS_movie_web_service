import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;

// css 코드를 자바스크립트 객체로 변환시켜줌
// import styles from "./~";

// styles가 css 코드를 가지고 있는 객체로 넘어옴
// 따라서 해당 css코드에 작성된 class name(여기서는 btn)을 프로퍼티 접근 연산자(.)를 사용해서 이용가능해짐.

// < Button style={styles.btn} / >
// 위와 같이 작성해서 해당 css 스타일링을 사용할 수 있음.

// 브라우저를 통해 html 코드를 확인해보면 해당 컴포넌트에 무작위의 class name이 붙음.
// 요소가 각각의 클래스네임을 가지게 돼서 일일이 class name을 기억해서 스타일링 할 필요가 없음
