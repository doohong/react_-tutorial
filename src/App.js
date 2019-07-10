import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css'; 
import Movie from './Movie';
import Main from "./container/Main";
const movieTitles=[
  "스파이더맨: 파 프롬 홈",
  "알라딘",
  "토이스토리4",
  "기생충"
]
const movieImages=[
"http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81619/81619_1000.jpg",
"https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5uYQ/image/c94Iw38EZ8ECL1BlhPJI2s9kfx4.jpg",
"https://pbs.twimg.com/media/D2t2_k0WsAA1hdh.jpg",
"https://upload.wikimedia.org/wikipedia/ko/thumb/6/60/%EA%B8%B0%EC%83%9D%EC%B6%A9_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/250px-%EA%B8%B0%EC%83%9D%EC%B6%A9_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
];


class App extends Component {
  render(){
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}
export default App;
