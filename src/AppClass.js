import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";

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

export default class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };
  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    // user === computer => tie
    // user === rock, computer === scissors => user win
    // user === rock, computer === paper => user lose
    // user === scissors computer === paper => U W
    // user === scissors computer rock => u l
    // u p c r => u w
    // u p c s => u l
    // 위 로직을 코드로 작성
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  render() {
    return (
      <>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button className="btn" onClick={() => this.play("scissors")}>
            가위
          </button>
          <button className="btn" onClick={() => this.play("rock")}>
            바위
          </button>
          <button className="btn" onClick={() => this.play("paper")}>
            보
          </button>
        </div>
      </>
    );
  }
}
