import { useCitizen } from './citizensDataProvider.js'
import { Citizen } from './citizens.js'

export const citizenList = () => {
    const contentElement = document.querySelector(".lists__list--citizens")
    const allTheCitizens = useCitizen()

    for (const citizensObject of allTheCitizens) {
        const citizensHTML = Citizen(citizensObject)
        contentElement.innerHTML += citizensHTML
    }
}