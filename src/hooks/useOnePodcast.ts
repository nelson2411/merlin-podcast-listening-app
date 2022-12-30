import { OnePodcastInfo } from "../types/podcastType"
import { useState, useEffect } from "react"
import axios from "axios"

/* 
We need to create a hook that uses useEffect to fetch a single podcast from
the iTunes API.

URL fetch example: 
https://api.allorigins.win/get?url=${encodeURIComponent('https://itunes.apple.com/lookup?id=${id}&entity=podcastAuthor

id must be a number and the parameter used to fetch a single podcast is "id"


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
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=20`
          )}`,
          { headers: { "x-requested-with": "https://itunes.apple.com" } }
        )

        const podcast = JSON.parse(data.contents)
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
