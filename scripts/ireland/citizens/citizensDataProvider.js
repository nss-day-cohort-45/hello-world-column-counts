const citizenCollection = [
    {
        url:"https://en.wikipedia.org/wiki/Bono",
        name: "Bono",
    },
    {
        url:"https://en.wikipedia.org/wiki/Liam_Neeson",
        name: "Liam Neeson",
    },
    {
        url:"https://en.wikipedia.org/wiki/Oscar_Wilde",
        name: "Oscar Wilde",
    },
    {
        url:"https://en.wikipedia.org/wiki/Pierce_Brosnan",
        name: "Pierce Brosnan",
    },
    {
        url:"https://en.wikipedia.org/wiki/The_Corrs",
        name: "The Corrs",
    }
]

export const useCitizen = () => {
    return citizenCollection.slice()
}