import React, { Component } from 'react';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './views/appHome';
import Gallery from './views/appGallery';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <header className="App-header">
            <Route path="/" exact component={Home} />
            <Route path="/gallery" exact component={Gallery} />
            </header>
        </div>
      </Router>
    );
  }
}

export default App;
