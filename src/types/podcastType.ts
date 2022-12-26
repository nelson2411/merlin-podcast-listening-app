/* 
Here is the file where we define the types of the data we get from the API.
These types are useful for the TypeScript compiler to check that we are using the data correctly.
It adds seld documentation to the code.
Thes types and interfaces are also useful for the React components to know what 
data they are getting.

*/

export type Podcast = {
  id: {
    attributes: {
      "im:id": number
    }
  }
  title: {
    label: string
  }
  // image: is an array
  "im:image": [
    {
      label: string
    }
  ]
  "im:name": {
    label: string
  }
  summary: {
    label: string
  }
  "im:artist": {
    label: string
  }
}

// OnePodcastInfo is an array of objects
export type OnePodcastInfo = {
  // results is an array of objects
  results: PodcastInfo[]
}

// PodcastInfo is an object
export type PodcastInfo = {
  artistId: number
  artistName: string
  collectionName: string
  artworkUrl100: string
  genres: string[]
  trackId: number
  trackName: string
  shortDescription: string
  artworkUrl160: string
  releaseDate: string
  trackViewUrl: string
  previewUrl: string
}

export type Results = {
  results: Episode[]
}

export interface Episode {
  wrapperType: string
  kind: string
  artistId: number
  collectionId: number
  trackId: string
  artistName: string
  collectionName: string
  trackName: string
  collectionCensoredName: string
  trackCensoredName: string
  artistViewUrl: string
  collectionViewUrl: string
  trackViewUrl: string
  previewUrl: string
  collectionPrice: number
  trackPrice: number
  releaseDate: string
  collectionExplicitness: string
  trackExplicitness: string
  discCount: number
  discNumber: number
  trackCount: number
  trackNumber: number
  trackTimeMillis: number
  country: string
  currency: string
  primaryGenreName: string
  contentAdvisoryRating: string
  genreIds: string[]
  genres: Genres[]
  description: string
  shortDescription: string
  artworkUrl60: string
  artworkUrl160: string
  artworkUrl600: string
}

type Genres = {
  id: number
  name: string
}
