import { createHTML } from "./html.js";
import { useLandmarks } from "./landmarkDataProvider.js";

export const landmarkList = () => {
  const htmlContainer = document.querySelector(".landmarks-list");
  const landmarks = useLandmarks();

  for (const place of landmarks) {
    htmlContainer.innerHTML += createHTML(place);
  }
};
