import React, { Component } from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Gnb from "../component/Gnb";
class Main extends Component{ 
    render(){ 
        return (
            <div>
                <Header/>
                <Gnb/>
                Main
                <Footer/>
            </div> 
        ) 
    } 
} 
export default Main;
