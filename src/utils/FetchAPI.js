import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';



export const FetchAPI = async (url) => {
  const options = {
    url: `${BASE_URL}/${url}`,
    params: {
      q: 'music',
    part: 'snippet,id',
    maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '5f6bd39a14msh5b31fdd0e061513p11279fjsnfe7c0732d64c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };


  
  console.log(`${BASE_URL}/${url}`);
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};


















