import { useLandmark } from './landmarksDataProvider.js'
import { Landmark } from './landmarks.js'

export const landmarkList = () => {
    const contentElement = document.querySelector(".lists__list--locations")
    const allTheLandmarks = useLandmark()

    for (const landmarkObject of allTheLandmarks) {
        const landmarkHTML = Landmark(landmarkObject)
        contentElement.innerHTML += landmarkHTML
    }
}