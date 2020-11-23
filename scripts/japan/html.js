import { useCities } from "./cityDataProvider.js"
import { useLandmarks } from "./landmarkDataProvider.js"
import { useKaiju } from "./kaijuDataProvider.js"

export const htmlMaker = (listItem) => {
    return `
    <li><a href=${listItem.url}>${listItem.name}</a></li>
    `
}