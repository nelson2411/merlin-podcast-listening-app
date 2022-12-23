import styled from "styled-components"

export const OnePodcastInfoCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const PodcastCreatorContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > img {
    margin: 0 auto;
    width: 40%;
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
