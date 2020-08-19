import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import './App.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <main>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Detail" component={Detail} />
        </Switch>
      </div>
    </main>
  );
}

export default App;
