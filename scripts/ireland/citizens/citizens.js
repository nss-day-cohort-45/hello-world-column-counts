export const Citizen = (citizen) => {
    return `
            <ul>
                <li><a href=${citizen.url}>${citizen.name}</a></li>
             </ul>
    `
}