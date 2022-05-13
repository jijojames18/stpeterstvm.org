import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Events from './views/Events/Events';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Events" component={Events} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
