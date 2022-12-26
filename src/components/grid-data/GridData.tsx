import React from "react"
import { useMemo, useCallback } from "react"
import { useAllPodcasts } from "../../hooks/useAllPodcasts"
import { Podcast } from "../../types/podcastType"
import { Link } from "react-router-dom"
import {
  Grid,
  PodcastCard,
  ComponentContainer,
  BarsSVG,
} from "./GridData.styles"
// @ts-ignore
import { Bars } from "svg-loaders-react"
import SearchBar from "../search-bar/SearchBar"
const GridData = () => {
  const memoizedUseAllPodcasts = useCallback(useAllPodcasts, [])

  const { loading, error, podcasts } = memoizedUseAllPodcasts()

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
              if (searchTerm === "") return podcast
              else if (
                // The filter works based on the name of the podcast and the author
                podcast["im:name"].label
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                podcast["im:artist"].label
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return podcast
              }
              return false
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
