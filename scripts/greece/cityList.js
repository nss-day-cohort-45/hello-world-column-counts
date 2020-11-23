import { useCities } from './cityDataProvider.js'
import { city } from './city.js'

export const cityList = () => {
  const contentElement = document.querySelector(".lists_cityLinks")
  const cities = useCities()
}

for (const city of cities) {
  const cityHTML = city(city)
  contentElement.innerHTML += cityHTML
}