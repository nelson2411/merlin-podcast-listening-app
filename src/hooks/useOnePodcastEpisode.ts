import { useEffect, useState } from "react"
import axios from "axios"
import { Podcast } from "../types/podcastType"
import { version } from "punycode"

/*
Create a hook that uses useEffect to fetch a single podcast episode from the iTunes API.
url to be used: 
`https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/lookup?=id=${id}&media=podcast&entity=podcastEpisode')}`


*/

export const useOnePodcastEpisode = (id: number) => {
  const [podcast, setPodcast] = useState<Podcast>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            `https://itunes.apple.com/lookup?id=${id}&entity=podcast`
          )}`
        )
        const podcast = data.feed.entry.map((entry: any) => {
          return {
            id: entry.id.attributes["im:id"],
            title: entry.title.label,
            image: entry["im:image"][2].label,
            summary: entry.summary.label,
            country: entry["im:country"].label,
            genres: entry.category.attributes.label.split(", "),
          }
        })
        setPodcast(podcast)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchPodcast()
  }, [id])

  return { podcast, error, loading }
}
