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
      {podcasts &&
        podcasts.feed.entry.map((podcast: Podcast) => (
          <div key={podcast?.id.attributes["im:id"]}>
            <h2>{podcast?.title.label}</h2>
            <img src={podcast?.images[0].label} alt={podcast.title.label} />
          </div>
        ))}
    </div>
  )
}

export default GridData
