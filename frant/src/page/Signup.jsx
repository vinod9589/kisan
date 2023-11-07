
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Signup = () => {

    const [postData,setPostData]=useState()
    const navigate=useNavigate()

    
    const postData1=()=>{
        if(postData.name!==""&&postData.gmail!==""&&postData.number!==""&&postData.password!==""&&postData.address!==""){

        axios.post("http://localhost:5000/signup",postData)

    }
    }

    
  return <>

  <Header/>
  


  <div className="container-fluid ">
    <div  className="row text-center justify-content-center align-items-center mt-5 mb-5 ">
        <div className="col-md-4 shadow">
            <h3 className="mt-3">Sign in to KissanKonnect</h3>

            <div  className="mt-5">
                <input onChange={(e)=>setPostData({...postData,name:e.target.value})}  placeholder="Name" className="form-control" type="text" />
            </div>
            <div  className="mt-4">
                <input onChange={(e)=>setPostData({...postData,number:e.target.value})}   placeholder="Number" className="form-control" type="text" />
            </div>
            <div  className="mt-4">
                <input onChange={(e)=>setPostData({...postData,email:e.target.value})}  placeholder="Email" className="form-control" type="text" />
            </div>
            <div  className="mt-4">
                <input onChange={(e)=>setPostData({...postData,password:e.target.value})}  placeholder="Password" className="form-control" type="text" />
            </div>
            <div  className="mt-4">
                <input onChange={(e)=>setPostData({...postData,address:e.target.value})}  placeholder="Address" className="form-control" type="text" />
            </div>

            <button onClick={()=>{postData1();navigate("/Login")}} className="btn btn-outline-primary mt-5">Submit</button>
            <button onClick={()=>{navigate("/Login")}} className="btn btn-outline-primary mt-5">Cancel</button>
        </div>
        <div  className="col-md-4 mx-3 shadow  ">

            <img style={{height:"467px"}}  className="img-fluid img" src="https://www.kisankonnect.in/assets/img/footer-img.png" alt="" />
           
        </div>
    </div>
  </div>

  <Footer/>
  
  
  
  </>;
};
export default Signup;