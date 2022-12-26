import { useState, useEffect } from "react"
import { Podcast } from "../types/podcastType"
import axios from "axios"

/* 
We need to create a hook that uses useEffect to fetch all top 100 podcasts from 
the iTunes API.. 

itunes url for fetching top 100 podcasts: 
https://itunes.apple.com/us/rss/toppodcasts/limit=10/genre=1310/json
*/

export const useAllPodcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([])
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
        )
        const podcasts = data.feed.entry
        setPodcasts(podcasts)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchPodcasts()
  }, [])

  return { podcasts, error, loading }
}
