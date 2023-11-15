import axios from "axios";
import { async } from "q";

const URL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
const URL2 = `https://exercisedb.p.rapidapi.com/exercises`
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '73b29ef5famsh71389451a39bf08p12a937jsnb437172e39fc',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async () =>{
    const data = await axios.get(`${URL}`, options)
    return data
}

export const getAPI = async () =>{
    const {data} = await axios.get(`${URL}`, options)
    return data
}