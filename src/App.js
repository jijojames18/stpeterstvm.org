import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
