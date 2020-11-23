import { useCelebs } from './celebDataProvider.js'
import { celeb } from './celeb.js'

export const celebList = () => {
  const contentElement = document.querySelector(".lists_celebLinks")
  const celebs = useCelebs()

  for (const celebObject of celebs) {
    const celebHTML = celeb(celebObject)
    contentElement.innerHTML += celebHTML
  }
}