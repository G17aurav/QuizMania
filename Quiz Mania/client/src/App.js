import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result'; 
import History from './components/History';
import Contactus from "./components/Contactus";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Route exact path="/" component={Main} />
        <Route path="/services" component={Home} />
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/quiz" exact component={Quiz}/>
        <Route path="/result" exact component={Result}/>
        <Route path="/history" exact component={History}/>
        <Route path="/contactus" exact component={Contactus}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
