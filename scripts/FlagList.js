import { FlagHTML } from "./Flag.js";
import { useCountries } from "./FlagDataProvider.js";

export const FlagList = () => {
  const htmlContainer = document.querySelector(".welcome");
  const countries = useCountries();

  for (const country of countries) {
    htmlContainer.innerHTML += FlagHTML(country);
  }
}