import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. box 2EA, (title, picture, result) V
// 2. rock, scissors, paper buttons V
// 3. 버튼 클릭 시 클릭한 값이 박스에 보임 V
// 4. 컴퓨터는 램덤하게 아이템 선택 가능
// 5. 3,4번 결과를 통해 누가 이겼는지 승패 측정
// 6. 테두리 color -> 승패 결과에 따라 테두리색 변경, 승: 초록 / 패: 빨강 / 비김: 검정

const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88tsMxUxoy3ZuLnRXZsgWzGemAnIoTILuGZHdoOwpOrILCiBIjd13edydKgeiC27nTD0&usqp=CAU",
  },
  scissors: {
    name: "Scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxxnRVcWY9UQWdlJRQhiEayb3PDAYqcAVp5i71bUZ6g&s",
  },
  paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/HcCJo/btqXD4Lybq6/kcrH6skAoOD9oAq2QYfBx1/paper.png?attach=1&knm=img.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };
  return (
    <>
      <div className="main">
        <Box title="you" item={userSelect} />
        {/* <Box title="Computer" /> */}
      </div>
      <div className="main">
        <button onClick={() => play("rock")}>Rock</button>
        <button onClick={() => play("scissors")}>Scissors</button>
        <button onClick={() => play("paper")}>Paper</button>
      </div>
    </>
  );
}
export default App;
