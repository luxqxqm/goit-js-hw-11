import axios from "axios";
const API_KEY = "54634417-32a9cc2e653c0a3a9a7b25778"

const url = "https://pixabay.com/api/"
export function getImagesByQuery(query) {
    const params = new URLSearchParams( {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true    
            
        }
) 
    return axios(url,{params})
        .then(res => {
            return res.data.hits
        })
 };
