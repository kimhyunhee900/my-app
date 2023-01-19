// import { useState } from "react";  // state 사용할려면 추가 필요!
// import "./App.css";

// function App() {
//   //let title = "CRA로 리액트 시작하기";
//   let [title, setTitle] = useState("CRA로 리액트 시작하기")
//   // let counter = 0; 일반변수, 상태가 바뀌어도 UI를 재랜더링 해주지않음.
//   let [counter,setCounter] = useState(0);  // 자주 바뀌는 변수, 상태가 바뀌면 자동으로 재랜더링 초기값은 0
//   // counter: state 변수, setCounter: state 변수값을 변경하는 함수

//   function textPrint(){
//     //console.log("무언가를 출력합니다!");
//     // counter = counter + 1;
//     // document.querySelector("#span").innerText = '방문자 : ${counter}';
//     // console.log("변경된 카운트 수 :" + counter);
//     setCounter(counter + 1);
//   }
//   // const textPrint = () => setCounter(conter + 1); // arrow funtion 화살표함수로 위를 한줄로 할수있음
  

//   return (
//     <div className="App">
//       <h1 className="site-header">{title}<button onClick={()=> setTitle("새로운 타이틀")}>타이틀변경</button></h1>
//       <span id='span'>방문자 : {counter}</span>
//       <button onClick={textPrint}>플러스</button> 
//     </div>
//   );
// }

// export default App;



// import React from "react";
// // React가 UI의 상태를 변경해주는
// import { useState } from "react";
// // 또는 import React,{useState} from "react"; 로 한줄로..
// import "./App.css";

// // 아래 App() 내부코드가 HTML로 렌더링
// function App(){
//   let title = "사이트제목";

//   let [isNight, setIsNight] = useState(false);
//   return(
//     <div className={isNight ? "day" : "night"}>
//       <h1>{title}</h1>
      
//       <p>배경이 변경됩니다</p>
//       <button onClick={() => setIsNight(curr=>!curr)}>상태변경</button>

//     </div>
//   )
// }

// export default App;  // index.js 에서 App.js 를 호출할 수 있도록 하는 구문


import React, { useState } from "react";
import"./App.css";

function App(){
  //일반함수
  const convert = () => console.log("단위를 min에서 hours로 변경합니다")
  const [amount, setAmont] = useState("0")

  function onChange(e){
    setAmont(e.target.value);
  }
  
  const resetInput = () => setAmont("0")
  const handleSubmit = (e) => e.preventDefault();

  return(
    <div class="main">
      <h1 className="site-header">단위 환산 앱</h1>
      <div class="unit-converter">
        <div className="ad">
          구글광고나 네이버 광고이미지!
        </div>
        <div className="converter">
          <form onSubmit={handleSubmit}>
            <ul>
              <li><input type="text" value={amount} onChange={onChange} placeholder="값을 입력하세요"/>minutes</li>
              <li><input type="text" value={amount / 60} placeholder="값을 입력하세요"/>hours</li>
              <li><button onClick={resetInput}>리셋</button></li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}


export default App;