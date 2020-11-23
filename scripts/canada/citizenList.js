import { createHTML } from "./html.js";
import { useCitizens } from "./citizenDataProvider.js";

export const citizenList = () => {
  const htmlContainer = document.querySelector(".citizens-list");
  const citizens = useCitizens();

  for (const person of citizens) {
    htmlContainer.innerHTML += createHTML(person);
  }
};
