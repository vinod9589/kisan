import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { baserUrl } from "./BaseUrl";
import Header from "./Header";
import {useNavigate} from 'react-router-dom'




const Home = () => {
  useEffect(()=>{getdata()},[])
  
  
  const[list,setList]=useState([])
  const navigate=useNavigate()




  const getdata=()=>{
    axios.get(baserUrl +"category").then((res)=>setList(res.data))
  }
  
   
 


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
   
  return (
    <>
    <Header/>
      <div classNameName="container-fluid mt-222">

      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img src="https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/BannerImage/20231001002228website-story-banner-adapt.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/BannerImage/20230824143630New%20website%20Dragon%20Fruit%20Banner.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/BannerImage/20230817145437Namkeen-Story-Banner-1727x496.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        
     


      
      
       
       
      
    
        {/* secand carousel */}
      </div>
      <Carousel items={5}  className="mt-3" responsive={responsive}>
  <div>  
    <img  src="https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/BannerImage/20231002233940French-Beans%20(3).jpg" alt="" />
  </div>
  <div >
    <img  src="https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/BannerImage/20231002234327Capsicum-Green%20(7).jpg" alt="" />
  </div>
  <div >
    <img  src="https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/BannerImage/20231002234426Methi%20(7).jpg" alt="" />
  </div>
  <div >
    <img  src="https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/BannerImage/20231002234647Drumstick%20(3).jpg" alt="" />
  </div>
  <div> 
    <img  src="https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/BannerImage/20231002234647Drumstick%20(3).jpg" alt="" />
  </div>
  <div >
    <img  src="https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/BannerImage/20231002234647Drumstick%20(3).jpg" alt="" />
  </div>
  <div >
    <img  src="https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/BannerImage/20231002234647Drumstick%20(3).jpg" alt="" />
  </div>
  <div >
    <img  src="https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/BannerImage/20231002234647Drumstick%20(3).jpg" alt="" />
  </div>
</Carousel>;
  
  
  <div className="container mt-4  ">


  <div className="shadow d-none d-md-block rounded-2 bg-success-subtle">
    <div className="row  my-auto justify-content-around ">
      <div    className="col-2 text-center">
        <div  className="mt-3">
          <img src="https://www.kisankonnect.in/assets/img/1.png" alt="" />
        </div>
        <div  className="">
          <span className="fw-bold">Free Delivery*</span><br></br>
          <span>On all orders above<br></br>
</span>
<span>₹500

</span>
        </div>
      </div>
      <div    className="col-2 text-center">
        <div  className="mt-3">
          <img src="https://www.kisankonnect.in/assets/img/2.png" alt="" />
        </div>
        <div  className="">
          <span className="fw-bold">Free Delivery*</span><br></br>
          <span>On all orders above<br></br>
</span>
<span>₹500

</span>
        </div>
      </div>
      <div    className="col-2 text-center">
        <div  className="mt-3">
          <img src="https://www.kisankonnect.in/assets/img/free_shipping.png" alt="" />
        </div>
        <div  className="">
          <span className="fw-bold">Free Delivery*</span><br></br>
          <span>On all orders above<br></br>
</span>
<span>₹500

</span>
        </div>
      </div>
      <div    className="col-2 text-center">
        <div  className="mt-3">
          <img src="https://www.kisankonnect.in/assets/img/4.png" alt="" />
        </div>
        <div  className="">
          <span className="fw-bold">Free Delivery*</span><br></br>
          <span>On all orders above<br></br>
</span>
<span>₹500

</span>
        </div>
      </div>
      <div    className="col-2 text-center">
        <div  className="mt-3">
          <img src="https://www.kisankonnect.in/assets/img/5.png" alt="" />
        </div>
        <div className="">
          <span className="fw-bold">Free Delivery*</span><br></br>
          <span>On all orders above<br></br>
</span>
<span>₹500

</span>
        </div>
      </div>
    
    </div>
  </div>


  {/* catagery */}


  <div className="container-fluid text-center mt-5">
    <h2 className="">Categories</h2>

    <div className="row justify-content-evenly mt-5">
      
      
    {list.map((i,n)=>

      <div onClick={()=>{navigate("/Categrey");localStorage.setItem("localcategory",i.name)}}   className="col-4 col-md-2 mx-md-1 " >

        <div   className="shadow rounded-3 rounded-bottom-3">
        <img className="img-fluid mt-2 rounded-3" src={i.image} alt="" />
        </div>
        <h4 htmlFor="Fruits">{i.name}</h4>
        
        
      </div>)}
      
    
    
     
     
     
      
      
      
      
    </div>
  </div>



  {/* Today's Bumper Bounty */}

  <div className="container text-center mt-5">
    <h2 className="">Today's Bumper Bounty</h2>

    <div className="row justify-content-evenly mt-5">
     <div  className="col-6 col-md-3  text-center shadow card ">
        <div  className=" text-start">
          <label htmlFor="">Get 28% Off</label>
        </div>
        <div className="">
          <img className="img-fluid w-50 " src="https://api.kisankonnect.com/kisankonnect/Images/ProductImage/20220907151852capsicumgreen-min.png" alt="" />
        </div>
        <div  className="">
          <h6>Capsicum Green</h6>
        </div>
        <div className="mt-3">
          <div className=" text-danger">
            <label className="border border-danger-subtle" htmlFor="">250g</label>
          </div>
        </div>
          <div className="row border border-dark-subtle bg-dark-subtle text-center my-auto justify-content-center mt-4">
            <div className="col-6 my-auto text-center">
              <label htmlFor=""><i class="fa fa-inr" aria-hidden="true"></i>40</label>
              <label htmlFor="" className="fs-3" >
              <i  class="fa fa-inr fs-3" aria-hidden="true"></i>40

              </label>
            </div>
            <div className="col-6 text-center justify-content-center my-auto small">
              <div className="text-center border border-danger-subtle ">
              <button className="border-0 bg-transparent" htmlFor="">-</button>
              <span className="" htmlFor="">Add</span>
              <button className="border-0 bg-transparent" htmlFor="">+</button>
              </div>

          </div>
        </div>
      </div>
     <div  className="col-6 col-md-3  text-center shadow card">
        <div  className=" text-start">
          <label htmlFor="">Get 28% Off</label>
        </div>
        <div className="">
          <img className="img-fluid w-50 " src="https://api.kisankonnect.com/kisankonnect/Images/ProductImage/20220907151852capsicumgreen-min.png" alt="" />
        </div>
        <div  className="">
          <h6>Capsicum Green</h6>
        </div>
        <div className="mt-3">
          <div className=" text-danger">
            <label className="border border-danger-subtle" htmlFor="">250g</label>
          </div>
        </div>
          <div className="row border border-dark-subtle bg-dark-subtle text-center my-auto justify-content-center mt-4">
            <div className="col-6 my-auto text-center">
              <label htmlFor=""><i class="fa fa-inr" aria-hidden="true"></i>40</label>
              <label htmlFor="" className="fs-3" >
              <i  class="fa fa-inr fs-3" aria-hidden="true"></i>40

              </label>
            </div>
            <div className="col-6 text-center justify-content-center my-auto small">
              <div className="text-center border border-danger-subtle ">
              <button className="border-0 bg-transparent" htmlFor="">-</button>
              <span className="" htmlFor="">Add</span>
              <button className="border-0 bg-transparent" htmlFor="">+</button>
              </div>

          </div>
        </div>
      </div>
     <div  className="col-6 col-md-3  text-center shadow card">
        <div  className=" text-start">
          <label htmlFor="">Get 28% Off</label>
        </div>
        <div className="">
          <img className="img-fluid w-50 " src="https://api.kisankonnect.com/kisankonnect/Images/ProductImage/20220907151852capsicumgreen-min.png" alt="" />
        </div>
        <div  className="">
          <h6>Capsicum Green</h6>
        </div>
        <div className="mt-3">
          <div className=" text-danger">
            <label className="border border-danger-subtle" htmlFor="">250g</label>
          </div>
        </div>
          <div className="row border border-dark-subtle bg-dark-subtle text-center my-auto justify-content-center mt-4 mb-5">
            <div className="col-6 my-auto text-center">
              <label htmlFor=""><i class="fa fa-inr" aria-hidden="true"></i>40</label>
              <label htmlFor="" className="fs-3" >
              <i  class="fa fa-inr fs-3" aria-hidden="true"></i>40

              </label>
            </div>
            <div className="col-6 text-center justify-content-center my-auto small">
              <div className="text-center border border-danger-subtle ">
              <button className="border-0 bg-transparent" htmlFor="">-</button>
              <span className="" htmlFor="">Add</span>
              <button className="border-0 bg-transparent" htmlFor="">+</button>
              </div>

          </div>
        </div>
      </div>
     
     </div>
      
    
    
     
     
     
      
      
      
      
    </div>
  </div>


  
   <Footer/>
    </>
  );
};
export default Home;
