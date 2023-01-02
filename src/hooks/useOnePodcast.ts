import { OnePodcastInfo } from "../types/podcastType"
import { useState, useEffect } from "react"
import axios from "axios"

/* 
We need to create a hook that uses useEffect to fetch a single podcast from
the iTunes API.

URL fetch example: 
https://itunes.apple.com/lookup?id=1633466636&entity=podcastAuthor
id must be a number and the parameter used to fetch a single podcast is "id"
https://itunes.apple.com/lookup?id=1633466636&entity=podcastEpisode&attribute=podcastAuthor



*/

export const useOnePodcast = (id: string) => {
  const [podcast, setPodcast] = useState<OnePodcastInfo>()
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&attribute=podcastAuthor`
        )

        const podcast = data
        console.log("One podcast info", podcast)
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
