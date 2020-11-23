import { useCities } from './citiesDataProvider.js'
import { Cities } from './cities.js'

export const citiesList = () => {
    const contentElement = document.querySelector(".lists__list--cities")
    const allTheCities = useCities()

    for (const citiesObject of allTheCities) {
        const citiesHTML = Cities(citiesObject)
        contentElement.innerHTML += citiesHTML
    }
}