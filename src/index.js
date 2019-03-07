import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';


import Header from './components/header';
import Menunav from './components/menuNav';
import Home from './components/home';
import Footer from './components/footer';

const App = () =>{
    return (
        <div>
            <Header/>
            <Menunav/>
            <Home/>
            <Footer/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
