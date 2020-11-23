import { citizen } from "./citizen.js";
import { useCitizen} from "./citizenProvider.js";

export const citizenList = () => {
  const contentElement = document.querySelector(".citizen__list")
  const citizens = useCitizen()
  for (const citizenObject of citizens){
    const citizenHTML = citizen(citizenObject)
    contentElement.innerHTML += citizenHTML
  }
}