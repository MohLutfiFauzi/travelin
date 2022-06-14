const axios = require("axios");

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Key': '65eaf5d3bamsh589d48e44428e82p11bdaajsnc35a7a6f8b14',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, options)

        return data;
    } catch (error) {
        console.log(error);
    }
}