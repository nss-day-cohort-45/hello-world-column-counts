export const landmarkCollection = [
  
  {
    name:"The Forbidden City (故宫)",
    link:"https://www.chinahighlights.com/beijing/forbidden-city/"
  
  },
  {
    name: "Terracotta Army",
    link: "https://www.chinaeducationaltours.com/guide/topic-terracotta-army.htm"
  
  },
  {
    name:"Panda Valley",
    link:"https://www.chinaeducationaltours.com/guide/topic-giant-panda.htm"
  
  },
  {
    name:"Potala Palace (布达拉宫)",
    link:"https://www.chinaeducationaltours.com/guide/tibet-potala-palace.htm"
  
  },
  {
    name:"Leshan Giant Buddha (樂山大佛)",
    link:"https://en.wikipedia.org/wiki/Leshan_Giant_Buddha"
  
  }
  
]

export const useLandmark = () => {
  return landmarkCollection.slice()
  
}