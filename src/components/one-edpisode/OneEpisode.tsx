import React from "react"
import { useOnePodcastEpisode } from "../../hooks/useOnePodcastEpisode"
import { Episode } from "../../types/podcastType"

type Params = {
  id: string
  trackId: string
}

const OneEpisode = ({ trackId, id }: Params) => {
  const { episode, loading, error } = useOnePodcastEpisode(id, trackId)
  console.log(episode)
  console.log("trackId-episode", episode[0]?.trackId)
  console.log("trackId-params", episode[1]?.trackName)
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}

      <div>
        {/* Here we define the episode info */}
        <h1>{episode[1]?.trackName}</h1>
        <p>{episode[1]?.description}</p>
      </div>

      <div></div>
    </div>
  )
}

export default OneEpisode
