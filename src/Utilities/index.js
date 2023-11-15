import pic1 from "../Assets/pics/pic1.jpeg"
import pic2 from "../Assets/pics/pic2.jpeg"
import pic3 from "../Assets/pics/pic3.jpeg"
import pic4 from "../Assets/pics/pic5.jpeg"
import gym1 from "../Assets/pics/b1.jpeg"
import gym2 from "../Assets/pics/b6.jpeg"
import gym3 from "../Assets/pics/b7.jpeg"
import gym4 from "../Assets/pics/b3.jpeg"


import sv2 from "../Assets/SERVICES/sv2.jpeg"
import sv3 from "../Assets/SERVICES/sv3.jpeg"
import sv4 from "../Assets/SERVICES/sv4.jpeg"
import sv5 from "../Assets/SERVICES/sv5.jpeg"

export const Nav = [

    { label:"/", name:"Home"},
    { label:"about", name:"About"},
    { label:"services", name:"Services"},
    { label:"contact", name:"Contact"},
]


export const Pics = [
    {image:pic1 ,label:"Excersise"},
    {image:pic2,label:"Excersise"},
    {image:pic3,label:"Excersise"},
  
]

export const Information = [
    {label:"10+", name:"YEARS OF EXPERIENCED"},
    {label:"50+", name:"FITNESS TRAINERS"},
    {label:"200+", name:"BEST EQUIPMENTS"},
    {label:"20K", name:"SATISFIED CLIENTS"},
]
export const gymLocation = [
    {label:"Dar Es Salaam", image:gym1, AccessHours: "Mon-FRI:5AM-10PM", Place:"MLIMANI CITY MALL"},
    {label:"Nairobi", image:gym2, AccessHours: "Mon-FRI:5AM-10PM", Place:"UTALI MALL"},
    {label:"Mwanza", image:gym3,AccessHours: "Mon-FRI:5AM-10PM", Place:"VILLAGE MARKET "},
    {label:"Arusha", image:gym4,AccessHours: "Mon-FRI:5AM-10PM", Place:"21 AVENUE "}
]
export const Us = [
    {label:"about" ,name:"About Us"},
    {label:"services" ,name:"Services"},
    {label:"Trainers" ,name:"Trainers Team"},
    {label:"Prices" ,name:"Prices"}
]

export const serviceSection = [
    {image:sv2,name:"REEFER A FRIEND" ,label:"Refer A Friend and get Up to $20 Free", btn:"Refeer A Friend"},
    {image:sv3, name: "DISCOUNT" ,label:"Get us To 30% off if you are a member", btn:"Sing Up"},
  
]
const p = [  
{image:sv5, name: "BLOG",  label: "Gel ALl The fitness Related News Now", btn: "Get News"}]