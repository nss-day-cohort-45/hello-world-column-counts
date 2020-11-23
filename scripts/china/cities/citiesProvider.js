export const cityCollection = [
  
  {
    name:"Macao",
    link:"https://www.travelchinaguide.com/cityguides/macau/"
  
  },
  {
    name: "Lijiang",
    link: "https://www.travelchinaguide.com/cityguides/lijiang.html"
  
  },
  {
    name:"Chengdu",
    link:"https://www.travelchinaguide.com/cityguides/chengdu.html"
  
  },
  {
    name:"Qing Dao",
    link:"https://en.wikipedia.org/wiki/Qingdao"
  
  }
  
]

export const useCity = () => {
  return cityCollection.slice()
  
}