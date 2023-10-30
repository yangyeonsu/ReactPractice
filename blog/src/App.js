/* eslint-disable */    // warning 메세지 지우고 싶을 때 쓰면 됨.

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';  

function App() {

  //변수
  let post = '강남 우동 맛집';      
  let [글제목, 글제목변경] = useState( ['남자 코트 추천','여자 코트 추천','리액트 독학하는중'] );
  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      <div className="blogTitle">
        <h4>연숭이의 블로그</h4>
      </div>

      <button>가나다순정렬</button>

      <div className="list">
        <h4>{ 글제목[0] }<span onClick={ () => { 좋아요변경(좋아요+1) }}> 👍 </span> {좋아요} </h4>
        <p>10월 27일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }<span onClick={()=>{
          let copy=[...글제목]; 
          copy[1]='강아지 코트 추천';
          글제목변경(copy);
        }}> 🐕</span></h4>
        <p>10월 27일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>10월 27일 발행</p>
      </div>
      
    </div>
  );
}

export default App;
