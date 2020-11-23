const citizenData = [
  {
    name: "Alex Trebek",
    url: "https://en.wikipedia.org/wiki/Alex_Trebek"
  },
  {
    name: "Wayne Gretzky",
    url: "https://en.wikipedia.org/wiki/Wayne_Gretzky"
  },
  {
    name: "Pierre Trudeau",
    url: "https://en.wikipedia.org/wiki/Pierre_Trudeau"
  },
  {
    name: "Martin Short",
    url: "https://en.wikipedia.org/wiki/Martin_Short"
  },
  {
    name: "Seth Rogen",
    url: "https://en.wikipedia.org/wiki/Seth_Rogen"
  },
  {
    name: "Neil Young",
    url: "https://en.wikipedia.org/wiki/Neil_Young"
  }
]

export const useCitizens = () => {
  return citizenData.slice();
}