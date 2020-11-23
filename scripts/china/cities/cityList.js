import { city } from "./city.js";
import { useCity } from "./citiesProvider.js";

export const cityList = () => {
  const contentElement = document.querySelector(".city__list")
  const cities = useCity()
  for (const cityObject of cities){
    const cityHTML = city(cityObject)
    contentElement.innerHTML += cityHTML
  }
}