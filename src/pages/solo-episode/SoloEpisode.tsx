import React from "react"
import Layout from "../../components/layout/Layout"
import OneEpisode from "../../components/one-edpisode/OneEpisode"
import { useParams } from "react-router-dom"

type Params = {
  id: string
  trackId: string
}

const SoloEpisode = () => {
  const { trackId, id } = useParams<Params>()
  return (
    <Layout>
      <OneEpisode trackId={trackId} id={id} />
    </Layout>
  )
}

export default SoloEpisode
