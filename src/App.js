import React, { Component } from 'react'; 
 import './App.css'; 
import Movie from './Movie';



const movies=[
  {
    title: "스파이더맨: 파 프롬 홈",
    poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81619/81619_1000.jpg"
  },
  {
    title: "알라딘",
    poster: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/5uYQ/image/c94Iw38EZ8ECL1BlhPJI2s9kfx4.jpg"
  },
  {
    title: "토이스토리4",
    poster: "https://pbs.twimg.com/media/D2t2_k0WsAA1hdh.jpg"
  },
  {
    title: "기생충",
    poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/6/60/%EA%B8%B0%EC%83%9D%EC%B6%A9_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/250px-%EA%B8%B0%EC%83%9D%EC%B6%A9_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
  }
]



class App extends Component {
  render(){
    return (
      <div className="App">
        {movies.map(movie => {
          return<Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}
export default App;
