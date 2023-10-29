//import logo from './logo.svg';
//import './App.css';
import { useState } from "react";

var timeCount = 20;

const TimerCompo = () => {

  const [inputText, setInputText ] = useState(" ")
  const [dispTime, setDispTime] = useState("");
  const [dispTimeUp, setDispTimeUP] = useState("");

  const parseTime2Count = (strSec) => {
    var count = parseInt(strSec);
    return count;
  }

  const parseCount2Time = (intCount) => {
    var strSec = intCount.toString();
    return strSec;
  }

  //入力 
  const handleChange = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  }

  //時間設定
  const handleClick = () => {
    console.log("Setting");
    setDispTime(inputText);
    timeCount = parseTime2Count(inputText);
    setDispTimeUP(" ");
  }

  const handleTimer = () => {
    timeCount = timeCount - 1;
    console.log(timeCount);
    setDispTime(parseCount2Time(timeCount));
    const timerID = setTimeout(handleTimer, 1000);

    if(timeCount <= 0){
      clearTimeout(timerID);
      setDispTimeUP("Time UP!!")
    }
  }

  const handleStartClick = () => {
    console.log("Start");
    handleTimer();
  }

  const handleResetClick = () => {
    console.log("Reset");
    setDispTime(inputText);
    timeCount = parseTime2Count(inputText);
    setDispTimeUP(" ");
  }

  return (
    <>
      <h2>Web Timer</h2>
      <input type="text" onChange={handleChange} ></input>秒
      <button onClick={handleClick} >設定</button>
      <p>残り時間：<span>{dispTime}</span>秒</p>
      <button onClick={ handleStartClick  } >Start</button>
      <button onClick={ handleResetClick } >Reset</button>
      <h2>{dispTimeUp}</h2>
    </>
  );
}

function App() {
  return (
    <>
      <TimerCompo />
    </>
  );
}

export default App;
