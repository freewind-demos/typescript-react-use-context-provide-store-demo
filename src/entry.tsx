import React from 'react'
import ReactDOM from 'react-dom'
import Outer from "./Outer";
import {createStore} from "./Store";
import StoreContext from './StoreContext';

function App() {
  return <StoreContext.Provider value={createStore({message: 'default-message'})}>
    <Outer/>
  </StoreContext.Provider>
}

ReactDOM.render(
  <App/>,
  document.body
)
