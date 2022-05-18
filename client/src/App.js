import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import CondoHome from "./pages/CondoHome/CondoHome"
import './App.scss';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact component={CondoHome} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
