import React from 'react'
import PageKeep from './Pages/Home/PageKeep'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={PageKeep}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
