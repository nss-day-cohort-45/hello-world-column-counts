const celebCollection = [
  {
    name: "Tommy Lee",
    url: "https://en.wikipedia.org/wiki/Tommy_Lee"
  },
  {
    name: "Aristotle Onassis",
    url: "https://en.wikipedia.org/wiki/Aristotle_Onassis"
  },
  {
    name: "The O.P. (original philosopher) Aristotle",
    url: "https://en.wikipedia.org/wiki/Aristotle" 
  },
  {
    name: "Homer",
    url: "https://en.wikipedia.org/wiki/Homer"
  },
  {
    name: "Yanni",
    url: "https://en.wikipedia.org/wiki/Yanni"
  }
]

export const useCelebs = () => {
  return celebCollection.slice()
}
