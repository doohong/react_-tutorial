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
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
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
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Lodding"}
      </div>
    );
  }
}
export default App;
