const cityCollection = [
  {
    name: "Santorini",
    url: "https://en.wikipedia.org/wiki/Santorini"
  },
  {
    name: "Athens",
    url: "https://en.wikipedia.org/wiki/Athens"
  },
  {
    name: "Mykonos",
    url: "https://en.wikipedia.org/wiki/Mykonos"
  },
  {
    name: "Rhodes",
    url: "https://en.wikipedia.org/wiki/Rhodes"
  }

]

export const useCities = () => {
  return cityCollection.slice()
}