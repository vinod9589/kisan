import { useState } from "react";

import axios from "axios";
import { baserUrl } from "./BaseUrl";
const Productinput = () => {
    const [postData,setPostData]=useState({})
  const postData1=()=>{
    axios.post(baserUrl +"productapi",postData)
  }

  return <>
   
   <select onChange={(e)=>setPostData({...postData,name:e.target.value})} name="" id="">
    <option >Fruits</option>
    <option >Vegetables</option>
    <option >Navratri Special</option>
    <option >Village Staples</option>
    <option >Exotic Vegetables</option>
    <option >Moms Kitchen</option>
  </select> 
  
  <input onChange={(e)=>setPostData({...postData,image:e.target.value})} placeholder="image" className="form-control" type="text" />
  <input onChange={(e)=>setPostData({...postData,productname:e.target.value})} placeholder="name" className="form-control" type="text" />
  <input onChange={(e)=>setPostData({...postData,price:e.target.value})} placeholder="price" className="form-control" type="text" />
  <input onChange={(e)=>setPostData({...postData,discount:e.target.value})} placeholder="discount" className="form-control" type="text" />
    <select onChange={(e)=>setPostData({...postData,qty:e.target.value})} name="" id="">
    <option >500g</option>
    <option >1kg</option>
  </select> 
  
  <button  onClick={()=>postData1()} className="btn btn-outline-primary">submit</button>
  
  
  
  </>;
};
export default Productinput;