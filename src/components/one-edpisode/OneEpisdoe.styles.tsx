import styled from "styled-components"

export const ComponentContainer = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 2rem;
  margin: 50px auto;
`

export const PodcasterInfo = styled.div`
  width: 70%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  & > ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  & > ul > li {
    margin-right: 1rem;
  }
`

export const EpisodeInfo = styled.div`
  width: 90%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  & > audio {
    width: 100%;
    border-radius: 7px;
  }
`
export const Button = styled.button`
  border-radius: 5px;
  border: none;
  padding: 0.9rem 1.9rem;
  position: relative;
  top: 30px;
  left: 30px;
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
