import { createHTML } from "./html.js";
import { useCities } from "./cityDataProvider.js";

export const cityList = () => {
  const htmlContainer = document.querySelector(".city-list");
  const cities = useCities();

  for (const place of cities) {
    htmlContainer.innerHTML += createHTML(place);
  }
};
