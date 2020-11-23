import { useKaiju } from "./kaijuDataProvider.js"
import { htmlMaker } from "./html.js"

export const kaijuList = () => {

    const contentElement = document.querySelector(".citizens-list")
    const kaiju = useKaiju()

    for (const monster of kaiju) {
        const kaijuHTML = htmlMaker(monster)
        contentElement.innerHTML += kaijuHTML
    }
}