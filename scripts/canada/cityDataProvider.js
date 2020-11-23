const cityData = [
  {
    name: "Toronto (Ontario)",
    url: "https://www.google.com/maps/place/Toronto,+ON,+Canada/"
  },
  {
    name: "Vancouver (British Columbia)",
    url: "https://www.google.com/maps/place/Vancouver,+BC,+Canada/"
  },
  {
    name: "Montreal (Quebec)",
    url: "https://www.google.com/maps/place/Montreal,+QC,+Canada/"
  },
  {
    name: "Winnipeg (Manitoba)",
    url: "https://www.google.com/maps/place/Winnipeg,+MB,+Canada/"
  },
  {
    name: "Edmonton (Alberta)",
    url: "https://www.google.com/maps/place/Edmonton,+AB,+Canada/"
  },
  {
    name: "Halifax (Nova Scotia)",
    url: "https://www.google.com/maps/place/Halifax,+NS,+Canada/"
  },
]

export const useCities = () => {
  return cityData.slice();
}