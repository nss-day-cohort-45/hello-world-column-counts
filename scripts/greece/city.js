export const city = (city) => {
  return `
    <section class="city">
    <li><a href="${city.url}" target="_blank">${city.name}</a></li>
    </section>
    `
}