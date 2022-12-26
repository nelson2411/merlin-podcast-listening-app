import React from "react"
import Layout from "../../components/layout/Layout"
import OnePodcastInfoCard from "../../components/one-podcast-info/OnePodcastInfoCard"
import { useParams } from "react-router-dom"
import { Podcast } from "../../types/podcastType"

type Params = {
  id: string
}

const OnePodcastInfo = () => {
  const { id } = useParams<Params>()
  return (
    <Layout>
      <OnePodcastInfoCard id={id} />
    </Layout>
  )
}

export default OnePodcastInfo
