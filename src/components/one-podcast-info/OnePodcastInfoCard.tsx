import React from "react"
import { useOnePodcast } from "../../hooks/useOnePodcast"
import { OnePodcastInfo, PodcastInfo } from "../../types/podcastType"

type Params = {
  id: string
}

const OnePodcastInfoCard = ({ id }: Params) => {
  const { podcast, error, loading } = useOnePodcast(id)
  console.log("img", podcast?.results[0].artworkUrl100)
  console.log("From component Info One", podcast)
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {podcast && (
          <div>
            <img src={podcast?.results[0].artworkUrl100} alt="podcast" />
            <h1>{podcast?.results[0].collectionName}</h1>
            <p>{podcast?.results[0].artistName}</p>
          </div>
        )}
      </div>
      {/* We define the list of podcasts */}
      <div>
        {podcast && (
          <div>
            <h2>Episodes: </h2>

            {podcast?.results.map((podcast: PodcastInfo) => (
              <ul key={podcast.trackId}>
                <li>{podcast.trackId} </li>
                <img src={podcast.artworkUrl160} alt="podcast" />

                <h3>Episode: {podcast.trackName}</h3>
                <p>{podcast.shortDescription}</p>
                <p>
                  Release date:{" "}
                  {podcast.releaseDate
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("/")}
                </p>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default OnePodcastInfoCard
