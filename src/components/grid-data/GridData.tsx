import React from "react"
import { useAllPodcasts } from "../../hooks/useAllPodcasts"
import { Podcast } from "../../types/podcastType"
import { Link } from "react-router-dom"
import {
  Grid,
  PodcastCard,
  ComponentContainer,
  BarsSVG,
  SearchBarBox,
} from "./GridData.styles"
// @ts-ignore
import { Bars } from "svg-loaders-react"
import SearchBar from "../search-bar/SearchBar"
const GridData = () => {
  const { podcasts, error, loading } = useAllPodcasts()
  // destructuring the object returned by useAllPodcasts()

  const [searchTerm, setSearchTerm] = React.useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <ComponentContainer>
      <SearchBar handleChange={handleChange} onSubmit={searchTerm} />

      {loading && (
        <BarsSVG>
          <Bars fill="#000" />
        </BarsSVG>
      )}
      {error && <p>Error: {error}</p>}
      {podcasts && (
        <Grid>
          {podcasts
            .filter((podcast: Podcast) => {
              if (searchTerm === "") {
                return podcast
              } else if (
                podcast["im:name"].label &&
                podcast["im:artist"].label
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return podcast
              }
            })
            .map((podcast: Podcast) => (
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
    </ComponentContainer>
  )
}

export default GridData
