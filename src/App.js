import "./App.css";
import Box from "./component/Box";

// 1. box2EA, (title, picture, result)
// 2. rock, scissors, paper buttons
// 3. 버튼 클릭 시 클릭한 값이 박스에 보임
// 4. 컴퓨터는 램덤하게 아이템 선택 가능
// 5. 3,4번 결과를 통해 누가 이겼는지 승패 측정
// 6. 테두리 color -> 승패 결과에 따라 테두리색 변경, 승: 초록 / 패: 빨강 / 비김: 검정

function App() {
  return (
    <>
      <div className="main">
        <Box title="you" />
        <Box title="computer" />
      </div>
      <div className="main">
        <button>Rock</button>
        <button>Scissors</button>
        <button>Paper</button>
      </div>
    </>
  );
}
export default App;
