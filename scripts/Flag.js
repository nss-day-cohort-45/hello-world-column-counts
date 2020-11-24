export const FlagHTML = (input) => {
  return `<section class="welcome__country"><a href="/pages/${input.name}.html"><img src="/images/${input.name}Flag.png" alt="${input.name} flag" class="flag flag-${input.name}"></a></section>`
}