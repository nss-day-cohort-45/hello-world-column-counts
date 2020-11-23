export const Landmark = (landmark) => {
    return `
            <ul>
                <li><a href=${landmark.url}>${landmark.name}</a></li>
             </ul>
    `
}