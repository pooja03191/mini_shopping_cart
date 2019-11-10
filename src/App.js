import React from 'react'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import rootReducer from './reducers/rootReducer'
import Layout from './Containers/Layout'
import './App.css';

function App() {
  const store = createStore(rootReducer)
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
