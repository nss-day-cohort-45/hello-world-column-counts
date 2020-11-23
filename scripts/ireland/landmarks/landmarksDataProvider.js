const landmarkCollection = [
    {
        url: "https://www.cntraveler.com/galleries/2016-03-15/the-most-beautiful-places-in-ireland",
        name: "Achill Island, Co. Mayo", 
    },
    {
        url: "https://www.cntraveler.com/galleries/2016-03-15/the-most-beautiful-places-in-ireland",
        name: "Cliffs of Moher, Co. Clare", 
    },
    {
        url: "https://www.cntraveler.com/galleries/2016-03-15/the-most-beautiful-places-in-ireland",
        name: "Killarney National Park, Co. Kerry", 
    },
    {
        url: "https://www.cntraveler.com/galleries/2016-03-15/the-most-beautiful-places-in-ireland",
        name: "Rock of Cashel, Co. Tipperary", 
    },
    {
        url: "https://www.cntraveler.com/galleries/2016-03-15/the-most-beautiful-places-in-ireland",
        name: "The Long Room, Trinity College, Co. Dublin", 
    },

]

export const useLandmark = () => {
    return landmarkCollection.slice()
}