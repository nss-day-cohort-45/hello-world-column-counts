const citiesCollection = [
    {
        url:"https://www.irishtourism.com/belfast",
        name: "Belfast",
    },
    {
        url:"https://www.irishtourism.com/cork",
        name: "Cork",
    },
    {
        url:"https://www.irishtourism.com/dublin",
        name: "Dublin",
    },
    {
        url:"https://www.irishtourism.com/galway",
        name: "Galway",
    },
    {
        url:"https://www.irishtourism.com/limerick",
        name: "Limerick",
    }
]

export const useCities = () => {
    return citiesCollection.slice()
}