const landmarkData = [
  {
    name: "CN Tower",
    url: "https://en.wikipedia.org/wiki/CN_Tower"
  },
  {
    name: "Banff National Park",
    url: "https://en.wikipedia.org/wiki/Banff_National_Park"
  },
  {
    name: "Hockey Hall of Fame",
    url: "https://en.wikipedia.org/wiki/Hockey_Hall_of_Fame"
  },
  {
    name: "Niagara Falls",
    url: "https://en.wikipedia.org/wiki/Niagara_Falls"
  },
  {
    name: "The World's Largest Easter Egg",
    url: "https://www.travelalberta.com/ca/listings/vegreville-pysanka-5217/"
  }
]

export const useLandmarks = () => {
  return landmarkData.slice();
}