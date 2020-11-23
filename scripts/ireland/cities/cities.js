export const Cities = (cities) => {
    return `
            <ul>
                <li><a href=${cities.url}>${cities.name}</a></li>
             </ul>
    `
}