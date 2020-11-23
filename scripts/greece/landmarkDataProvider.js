const landmarkCollection = [
  {
    name: "Acropolis of Athens",
    url: "https://en.wikipedia.org/wiki/Acropolis_of_Athens"
  },
  {
    name: "The Parthenon",
    url: "https://en.wikipedia.org/wiki/Parthenon"
  },
  {
    name: "Delphi",
    url: "https://en.wikipedia.org/wiki/Delphi"
  },
  {
    name: "Monasteries of Meteora",
    url: "https://en.wikipedia.org/wiki/Meteora"
  }
]

export const useLandmarks = () => {
  return landmarkCollection.slice()
}

