import { useCities } from "./cityDataProvider.js"
import { htmlMaker } from "./html.js"

export const cityList = () => {

    const contentElement = document.querySelector(".city-list")
    const cities = useCities()

    for (const city of cities) {
        const cityHTML = htmlMaker(city)
        contentElement.innerHTML += cityHTML
    }
}