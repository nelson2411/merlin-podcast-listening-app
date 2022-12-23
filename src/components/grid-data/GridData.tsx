import React from "react"
import { useAllPodcasts } from "../../hooks/useAllPodcasts"
import { Podcast } from "../../types/podcastType"
import { Link } from "react-router-dom"
import { Grid, PodcastCard } from "./GridData.styles"

const GridData = () => {
  const { podcasts, error, loading } = useAllPodcasts()
  // destructuring the object returned by useAllPodcasts()

  return (
    <div>
      {/* The map must be done from feed.entry in order to render the data */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {podcasts && (
        <Grid>
          {podcasts.map((podcast: Podcast) => (
            <PodcastCard key={podcast.id.attributes["im:id"]}>
              <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
                <img src={podcast["im:image"][0]?.label} alt="" />
              </Link>
              <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
                <h2>{podcast["im:name"].label}</h2>
              </Link>
              <h4>Author: {podcast["im:artist"].label}</h4>
            </PodcastCard>
          ))}
        </Grid>
      )}
    </div>
  )
}

export default GridData
