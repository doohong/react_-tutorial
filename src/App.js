import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css'; 
import Movie from './Movie';
import Main from "./container/Main";


class App extends Component {
  render(){
    return (
      <div className="App">
        <Movie />
      </div>
    );
  }
}
export default App;
