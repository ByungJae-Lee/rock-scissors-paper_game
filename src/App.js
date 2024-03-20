import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. box 2EA, (title, picture, result) V
// 2. rock, scissors, paper buttons V
// 3. 버튼 클릭 시 클릭한 값이 박스에 보임 V
// 4. 컴퓨터는 램덤하게 아이템 선택 가능 V
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
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // user === computer => tie
    // user === rock, computer === scissors => user win
    // user === rock, computer === paper => user lose
    // user === scissors computer === paper => U W
    // user === scissors computer rock => u l
    // u p c r => u w
    // u p c s => u l
    // 위 로직을 코드로 작성하기
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };
  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 배열로 만들어 주는 함수
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem);
    let final = itemArray[randomItem];
    console.log("final", final);
    return choice[final];
  };

  return (
    <>
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
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
