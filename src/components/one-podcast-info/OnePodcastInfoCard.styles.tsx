import styled from "styled-components"

export const OnePodcastInfoCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  justify-items: center;
  min-height: 80vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const PodcastCreatorContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 30px 20px;
  height: 500px;
  background-color: white;

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

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const PodcastEpisodesContainer = styled.div`
  width: 70%;
  border-radius: 7px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: white;

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const PodcastEpisodeSoloContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 20px 10px;
  background-color: white;

  @media (max-width: 768px) {
    padding: 10px 5px;

    & > audio {
      width: 100%;
      border-radius: 5px;
    }
  }
`

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  padding: 0.9rem 1.9rem;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    background-color: lightgray;
    color: white;
    font-weight: bold;
  }
`

export const BarsContainer = styled.div`
  position: relative;
  margin: 0 auto;
`
