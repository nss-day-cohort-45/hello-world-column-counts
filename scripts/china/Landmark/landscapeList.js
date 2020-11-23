import { landmark } from "./landmark.js";
import { useLandmark } from "./landmarkProvider.js";

export const landmarkList = () => {
  const contentElement = document.querySelector(".landmark__list")
  const landmarks = useLandmark()
  for (const landmarkObject of landmarks){
    const landmarkHTML = landmark(landmarkObject)
    contentElement.innerHTML += landmarkHTML
  }
}