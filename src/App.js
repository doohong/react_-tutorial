import React, { Component } from 'react'; 
 import './App.css'; 
import Movie from './Movie';

class App extends Component {
  state={}
  componentDidMount(){
    this._getMovies()
  }
  _renderMovies = () => {
    const movies =  this.state.movies.map((movie,index) => { 
      return <Movie 
      title={movie.title_english} 
      poster={movie.small_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
    })
    return movies
  }
   _getMovies = async () => {
    try{
    const movies = await this._callApi()
    this.setState({
      movies
    })
    }catch(er){ 
      console.log(er)
    }
  }
  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    //.then(movies => console.log(movies)) 
    .catch(err => console.log(err))
  }
  render(){
    const {movies} = this.state;
    return (
      <div className={movies? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Lodding"}
      </div>
    );
  }
}
export default App;
