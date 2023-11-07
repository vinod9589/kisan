import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Productview = () => {
  const view=localStorage.getItem("Productdisplay")
  const ParseData= JSON.parse(view)


  const [plus,setPlus]=useState(0)
  return <>

  <Header/>
  <div className="container-fluid mt-5">
    <div className="row">
    <div className="d-flex">
            <span className="catwords">Home▶</span>
            <span className="catwords">{ParseData.name}▶</span>
            <span className="fw-bold" >{ParseData.productname}</span>
            </div>
        <div className="col-md-4 mt-3">
        <h3>{ParseData.discount}%</h3>

            <div>

                <img className="img-fluid shadow" src={ParseData.image} alt="" />
        </div>
        </div>
        <div className="col-md-8 mt-3">
            <h4>{ParseData.productname}</h4>
            <div className="fs-1 mt-3 catwords">

            <label style={{textDecoration:"line-through"}}><i class="fa fa-inr" aria-hidden="true"></i>{ParseData.price}</label>

            </div>
            <div style={{fontSize:"70px"}} className="catwords">
            <label htmlFor=""><i class="fa fa-inr" aria-hidden="true"></i>{ParseData.price-(ParseData.price*ParseData.discount/100)}</label>

            </div>
            <div className="fw-bold">
             <span>Size/Weight:</span>
             <span className="border border-dark-subtle rounded-3 bg-info mx-2">500gm</span>
            </div>

            <div style={{width:"100px"}} className=" border border-danger-subtle text-center mt-4 ">

              <button onClick={()=>setPlus()} className="border-0 bg-transparent" htmlFor="">-</button>
              <span className="" htmlFor="">{plus}</span>
              <button onClick={()=>setPlus()} className="border-0 bg-transparent" htmlFor="">+</button>
              </div>
            
        </div>
    </div>
  </div>

  <div className="mb-5"></div>
  <Footer/>
  
  </>;
};
export default Productview;