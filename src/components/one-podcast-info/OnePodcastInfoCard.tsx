import React from "react"
import { useOnePodcast } from "../../hooks/useOnePodcast"
import { OnePodcastInfo, PodcastInfo } from "../../types/podcastType"
import { Link, useHistory } from "react-router-dom"
// @ts-ignore
import { Bars } from "svg-loaders-react"

import {
  OnePodcastInfoCardContainer,
  PodcastCreatorContainer,
  PodcastEpisodesContainer,
  PodcastEpisodeSoloContainer,
  Button,
  BarsContainer,
} from "./OnePodcastInfoCard.styles"

type Params = {
  id: string
}

const OnePodcastInfoCard = ({ id }: Params) => {
  const { podcast, error, loading } = useOnePodcast(id)
  const history = useHistory()
  console.log("img", podcast?.results[0].artworkUrl100)
  console.log("From component Info One", podcast)
  console.log("trackId", podcast?.results[0].trackId)

  const calculateLenghtItems = (podcast: OnePodcastInfo) => {
    const length = podcast.results.length
    console.log("length", length)
    return length
  }

  // Only one audio can be played at a time

  const handlePlay = (e: React.MouseEvent<HTMLAudioElement, MouseEvent>) => {
    const audioElements = document.querySelectorAll("audio")
    audioElements.forEach((audio) => {
      if (audio !== e.currentTarget) {
        audio.pause()
      }
    })
  }

  return (
    <>
      <Button onClick={() => history.goBack()}>Go back</Button>
      <OnePodcastInfoCardContainer>
        {loading && (
          <BarsContainer>
            <Bars fill="#000" />
          </BarsContainer>
        )}
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
        <PodcastEpisodesContainer>
          {loading && (
            <BarsContainer>
              <Bars fill="#000" />
            </BarsContainer>
          )}
          {podcast && (
            <div>
              <h2>Episodes: {calculateLenghtItems(podcast)}</h2>

              {podcast?.results.slice(1).map((podcast: PodcastInfo) => (
                <PodcastEpisodeSoloContainer key={podcast.trackId}>
                  <Link to={`/podcast/${id}/episode/${podcast.trackId}`}>
                    <h3>Episode: {podcast.trackName}</h3>
                  </Link>
                  <p>{podcast.shortDescription}</p>
                  <p>
                    Release date:{" "}
                    {podcast.releaseDate
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("/")}
                  </p>
                  <audio
                    controls
                    src={podcast.previewUrl}
                    onPlay={handlePlay}
                  ></audio>
                </PodcastEpisodeSoloContainer>
              ))}
            </div>
          )}
        </PodcastEpisodesContainer>
      </OnePodcastInfoCardContainer>
    </>
  )
}

export default OnePodcastInfoCard
