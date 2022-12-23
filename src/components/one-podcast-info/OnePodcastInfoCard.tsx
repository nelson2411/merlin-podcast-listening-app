import React from "react"
import { useOnePodcast } from "../../hooks/useOnePodcast"
import { OnePodcastInfo, PodcastInfo } from "../../types/podcastType"
import {
  OnePodcastInfoCardContainer,
  PodcastCreatorContainer,
} from "./OnePodcastInfoCard.styles"

type Params = {
  id: string
}

const OnePodcastInfoCard = ({ id }: Params) => {
  const { podcast, error, loading } = useOnePodcast(id)
  console.log("img", podcast?.results[0].artworkUrl100)
  console.log("From component Info One", podcast)

  const calculateLenghtItems = (podcast: OnePodcastInfo) => {
    const length = podcast.results.length
    console.log("length", length)
    return length
  }

  return (
    <OnePodcastInfoCardContainer>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {podcast && (
        <PodcastCreatorContainer>
          <img src={podcast?.results[0].artworkUrl100} alt="podcast" />
          <h1>{podcast?.results[0].collectionName}</h1>
          <ul>
            {podcast?.results[0].genres.map((genre: string) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </PodcastCreatorContainer>
      )}

      {/* We define the list of podcasts */}
      <div>
        {podcast && (
          <div>
            <h2>Episodes: </h2>
            <p>Number of episodes: {calculateLenghtItems(podcast)}</p>

            {podcast?.results.slice(1).map((podcast: PodcastInfo) => (
              <div key={podcast.trackId}>
                <p>{podcast.trackId} </p>
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
              </div>
            ))}
          </div>
        )}
      </div>
    </OnePodcastInfoCardContainer>
  )
}

export default OnePodcastInfoCard
