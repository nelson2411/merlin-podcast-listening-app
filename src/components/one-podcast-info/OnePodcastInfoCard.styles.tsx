import styled from "styled-components"

export const OnePodcastInfoCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  justify-items: center;
`

export const PodcastCreatorContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
  height: 500px;

  & > img {
    margin: 0 auto;
    width: 30%;
    border-radius: 50%;
  }

  & > h1 {
    font-size: 2rem;
    text-align: center;
  }

  & > ul {
    list-style: none;
    margin: 5px 0;
  }

  & > ul > li {
    margin: 5px 0;
  }
`

export const PodcastEpisodesContainer = styled.div`
  width: 70%;
  border-radius: 7px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  margin-bottom: 20px;
`

export const PodcastEpisodeSoloContainer = styled.div`
  border-bottom: 1px solid #ccc;
`
