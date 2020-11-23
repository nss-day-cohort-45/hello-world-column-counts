import { useLandmarks } from "./landmarkDataProvider.js"
import { htmlMaker } from "./html.js"

export const landmarkList = () => {

    const contentElement = document.querySelector(".landmarks-list")
    const landmarks = useLandmarks()

    for (const place of landmarks) {
        const placeHTML = htmlMaker(place)
        contentElement.innerHTML += placeHTML
    }
}