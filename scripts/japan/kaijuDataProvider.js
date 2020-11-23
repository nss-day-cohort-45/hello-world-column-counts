const kaijuList = [
{
    name: "Godzilla, ゴジラ",
    url: "https://en.wikipedia.org/wiki/Godzilla_(1954_film)"
},
{
    name: "Mothra, モスラ",
    url: "https://en.wikipedia.org/wiki/Mothra"
},
{
    name: "King Ghidorah, キングギドラ",
    url: "https://en.wikipedia.org/wiki/King_Ghidorah"
},
{
    name: "Ultraman, ウルトラマン",
    url: "https://en.wikipedia.org/wiki/Ultraman_(character)"
},
{
    name: "Takeshi Kitano, 北野 武",
    url: "https://en.wikipedia.org/wiki/Takeshi_Kitano"
},
{
    name: "Segata Sanshiro",
    url: "https://en.wikipedia.org/wiki/Segata_Sanshiro"
}
]

export const useKaiju = () => {
    return kaijuList.slice()
}