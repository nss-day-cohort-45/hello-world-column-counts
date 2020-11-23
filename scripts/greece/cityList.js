import { useCities } from './cityDataProvider.js'
import { city } from './city.js'

export const cityList = () => {
  const contentElement = document.querySelector(".lists_cityLinks")
  const cities = useCities()

  for (const cityObject of cities) {
    const cityHTML = city(cityObject)
    contentElement.innerHTML += cityHTML
  }
}