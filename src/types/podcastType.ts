/* 
Create all the type definitions for the data that will be returned from the
iTunes API.

Example of the data that will be returned from the iTunes API:
 {
        "im:name": {
          "label": "The Joe Budden Podcast"
        },
        "im:image": [
          {
            "label": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/55x55bb.png",
            "attributes": {
              "height": "55"
            }
          },
          {
            "label": "https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/60x60bb.png",
            "attributes": {
              "height": "60"
            }
          },
          {
            "label": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/170x170bb.png",
            "attributes": {
              "height": "170"
            }
          }
        ],
        "summary": {
          "label": "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends."
        },
        "im:price": {
          "label": "Get",
          "attributes": {
            "amount": "0",
            "currency": "USD"
          }
        },
        "im:contentType": {
          "attributes": {
            "term": "Podcast",
            "label": "Podcast"
          }
        },
        "rights": {
          "label": "© All rights reserved"
        },
        "title": {
          "label": "The Joe Budden Podcast - The Joe Budden Network"
        },
        "link": {
          "attributes": {
            "rel": "alternate",
            "type": "text/html",
            "href": "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2"
          }
        },
        "id": {
          "label": "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
          "attributes": {
            "im:id": "1535809341"
          }
        },
        "im:artist": {
          "label": "The Joe Budden Network",
          "attributes": {
            "href": "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2"
          }
        },
        "category": {
          "attributes": {
            "im:id": "1310",
            "term": "Music",
            "scheme": "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
            "label": "Music"
          }
        },
        "im:releaseDate": {
          "label": "2022-12-17T00:00:00-07:00",
          "attributes": {
            "label": "December 17, 2022"
          }
        }
      },

from the data above, we need to create a type definition for the data that will 
be returned from the iTunes API. The data needed is the id, title, and image.
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
