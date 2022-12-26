import { useEffect, useState } from "react"
import axios from "axios"
import { Episode } from "../types/podcastType"

/*
Here we create a hook that uses useEffect to fetch a single podcast episode from the iTunes API.
url to be used: 

https://itunes.apple.com/lookup?id=1460157002&limit=1&entity=podcastEpisode&trackId=1000590564956&attribute=episodeTerm

The hook must take two parameters: the podcast id and the episode id.
Episode is an array of objects. The object we need is the first one in the array.

*/

export const useOnePodcastEpisode = (podcastId: string, episodeId: string) => {
  const [episode, setEpisode] = useState<Episode[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const response = await axios.get(
          `https://itunes.apple.com/lookup?id=${podcastId}&limit=1&entity=podcastEpisode&trackId=${episodeId}&attribute=episodeTerm`
        )
        setEpisode(response.data.results)
        console.log("Hook", response.data.results)

        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }
    fetchEpisode()
  }, [podcastId, episodeId])

  return { episode, loading, error }
}
