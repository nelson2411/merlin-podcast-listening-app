import React from "react"
import { useAllPodcasts } from "../../hooks/useAllPodcasts"
import { Podcast } from "../../types/podcastType"
import { Link } from "react-router-dom"

const GridData = () => {
  const { podcasts, error, loading } = useAllPodcasts()
  // destructuring the object returned by useAllPodcasts()

  return (
    <div>
      {/* The map must be done from feed.entry in order to render the data */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {podcasts && (
        <ul>
          {podcasts.map((podcast: Podcast) => (
            <li key={podcast.id.attributes["im:id"]}>
              <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
                <img src={podcast["im:image"][0]?.label} alt="" />
              </Link>
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
