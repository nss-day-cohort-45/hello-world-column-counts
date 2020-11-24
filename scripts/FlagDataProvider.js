const countries = [
  {
    name: "canada"
  },
  {
    name: "china"
  },
  {
    name: "greece"
  },
  {
    name: "ireland"
  },
  {
    name: "japan"
  }
]

export const useCountries = () => {
  return countries.slice();
}