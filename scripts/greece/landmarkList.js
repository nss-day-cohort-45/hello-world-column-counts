import { useLandmarks } from './landmarkDataProvider.js'
import { landmark } from './landmark.js'

export const landmarkList = () => {
  const contentElement = document.querySelector(".lists_landmarksLinks")
  const landmarks = useLandmarks()

  for (const landmarkObject of landmarks) {
    const landmarkHTML = landmark(landmarkObject)
    contentElement.innerHTML += landmarkHTML
  }
}