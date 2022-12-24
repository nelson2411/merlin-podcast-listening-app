import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import OnePodcastInfo from "./pages/solo-podcast/OnePodcastInfo"
import SoloEpisode from "./pages/solo-episode/SoloEpisode"
import GlobalStyle from "./components/GlobalStyle"

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/podcast/:id" component={OnePodcastInfo} />
        <Route
          exact
          path="/podcast/:id/episode/:trackId"
          component={SoloEpisode}
        />
      </Switch>
    </div>
  )
}

export default App
