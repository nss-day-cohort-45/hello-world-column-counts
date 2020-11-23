const landmarkList = [
{
    name: "Tokyo Imperial Palace",
    url: "https://en.wikipedia.org/wiki/Tokyo_Imperial_Palace"
},
{
    name: "Akihabara, Tokyo",
    url: "https://en.wikipedia.org/wiki/Akihabara"
},
{
    name: "Golden Gai, Shinjuku, Tokyo",
    url: "https://en.wikipedia.org/wiki/Shinjuku_Golden_Gai"
},
{
    name: "Kyoto Imperial Palace",
    url: "https://en.wikipedia.org/wiki/Kyoto_Imperial_Palace"
},
{
    name: "Sapporo Ramen Street",
    url: "https://www.tripadvisor.com/Attraction_Review-g298560-d3723729-Reviews-Ganso_Sapporo_Ramen_Street-Sapporo_Hokkaido.html"

},
{
    name: "Dōtonbori, Osaka",
    url: "https://en.wikipedia.org/wiki/D%C5%8Dtonbori"
},
{
    name: "Hiroshima Peace Memorial",
    url: "https://en.wikipedia.org/wiki/Hiroshima_Peace_Memorial"
}
]

export const useLandmarks = () => {
    return landmarkList.slice()
}