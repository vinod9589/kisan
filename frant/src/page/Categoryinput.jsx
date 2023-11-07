import { useState } from "react";
import axios from 'axios';
import { baserUrl } from "./BaseUrl";

const Categoryinput = () => {
  const [postData,setPostData]=useState({})
  const postData1=()=>{
    axios.post(baserUrl +"category",postData)
  }

  return <>

  <input onChange={(e)=>setPostData({...postData,name:e.target.value})} placeholder="category" className="form-control" type="text" />
  <input onChange={(e)=>setPostData({...postData,image:e.target.value})} placeholder="image" className="form-control" type="text" />
  <button  onClick={()=>postData1()} className="btn btn-outline-primary">submit</button>
  
  
  </>;
};
export default Categoryinput;