import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import OnePodcastInfo from "./pages/solo-podcast/OnePodcastInfo"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/podcast/:id" component={OnePodcastInfo} />
      </Switch>
    </div>
  )
}

export default App
