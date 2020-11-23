const cities = [
{
    name: "Kyoto",
    url: "https://www.google.com/maps/place/Kyoto,+Japan/"
},
{
    name: "Tokyo",
    url: "https://www.google.com/maps/place/Tokyo,+Japan"

},
{
    name: "Sapporo",
    url: "https://www.google.com/maps/place/Sapporo,+Hokkaido,+Japan"
},
{
    name: "Osaka",
    url: "https://www.google.com/maps/place/Osaka,+Japan"
},
{
    name: "Okinawa",
    url: "https://www.google.com/maps/place/Okinawa,+Japan"
},
{
    name: "Hiroshima",
    url: "https://www.google.com/maps/place/Hiroshima,+Japan"
}
]

export const useCities = () => {
    return cities.slice()
}