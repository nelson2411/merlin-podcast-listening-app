import React from "react"
import { useAllPodcasts } from "../../hooks/useAllPodcasts"
import { Podcast } from "../../types/podcastType"

const GridData = () => {
  const { podcasts, error, loading } = useAllPodcasts()
  console.log("From component", podcasts)
  // destructuring the object returned by useAllPodcasts()

  return (
    <div>
      <h1>Hello World</h1>
      {/* The map must be done from feed.entry in order to render the data */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {podcasts && (
        <ul>
          {podcasts.map((podcast: Podcast) => (
            <li key={podcast.id.attributes["im:id"]}>
              <img src={podcast["im:image"][0]?.label} alt="" />
              <h2>{podcast["im:name"].label}</h2>
              <h4>Author: {podcast["im:artist"].label}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GridData
