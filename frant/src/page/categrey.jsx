import axios from "axios";
import { useEffect, useState } from "react";
import { baserUrl } from "./BaseUrl";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Categrey = () => {
  useEffect(() => {
    getdata(), getproduct();
  }, []);
  const localcarlist = localStorage.getItem("cart");
  const parselocalcarlist = localcarlist ? JSON.parse(localcarlist) : [];
  const cartListId = parselocalcarlist?.map((i) => i.productId);
  const [cartlist, setcartlist] = useState(parselocalcarlist);



  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const [listproduct, setListproduct] = useState([]);
  
  const getdata = () => {
    axios.get(baserUrl + "category").then((res) => setList(res.data));
  };

  const getproduct = () => {
    axios.get(baserUrl + "productapi").then((res) => setListproduct(res.data));
  };

  const localcategory = localStorage.getItem("localcategory");

  const [localcategory1, setLocalcategory1] = useState(localcategory);

  

  const postData = (x) => {
    const item = {
      productId: x,
      quantity: "1",
    };
    const item1 = [...cartlist, item];
    setcartlist(item1);
    localStorage.setItem("cart",JSON.stringify(item1) );
  };
  
 


  const[search,setSearch]=useState("")

  const list1=search!==""?listproduct.filter((i)=>i.productname .includes(search)):listproduct



 
  const[color,setColor]=useState(localcategory1)

  const getQuantity =(x)=>{
    const quantity = cartlist?.filter((i)=>i.productId===x)
    return quantity[0].quantity
  }

 
  const incqty =(x)=>{
   
    const quantity = cartlist.map((i)=>i.productId===x?{...i,quantity:+i.quantity+1}:i);
    setcartlist(quantity)
    localStorage.setItem("cart",JSON.stringify(quantity))
  }
  const decqty=(x)=>{
    const vinod=cartlist.map((i)=>i.productId===x?{...i,quantity:+i.quantity-1}:i)
    setcartlist(vinod)
    localStorage.setItem("card",JSON.stringify(quantity))
  }

  return (
    <>
      <Header setSearch ={setSearch} />
      {/* {JSON.stringify(cartlist)} */}
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex">
            <span className="catwords">Home▶</span>
            <span className="fw-bold">{localcategory1}</span>
          </div>
          <div  className="col-md-3 my-auto fs-6 catwords mt-2  ">
            <div
              style={{ borderStartStartRadius: "40px" }}
              className="py-3 catborder"
            >
              <span className="mx-3 text-black fw-bold">Filter</span>
            </div>
            { list.map((i, n) => (
              <div  style={{backgroundColor:color===i.name?"beige	":"transparent"}}
                onClick={() =>{setLocalcategory1(i.name);setColor(i.name)}}
                className="py-3 catborder catwords"
              >
                <span  className="mx-3 ">{i.name}</span>
              </div>
            ))}
          </div>
          <div className="col-md-9 mt-2 ">
            <img
              className="img-fluid"
              src="https://diz7l2x0sn587.cloudfront.net/kisankonnect/Images/ProductGroupImage/20230930234118category-banner-1.jpg"
              alt=""
            />

            <div className="row justify-content-evenly mt-5  ">
              {list1
                .filter((a, b) => a.name === localcategory1)
                .map((i, n) => (
                  <div
                    onClick={() =>
                      localStorage.setItem("Productdisplay", JSON.stringify(i))
                    }
                    className="col-5 col-md-3 md-mx-3 mt-3 mx-2  text-center shadow card "
                    style={{minHeight:300, position:"relative"}}
                  >
                    <div className=" text-start">
                      <label htmlFor="">Get {i.discount}% Off</label>
                    </div>
                    <div className="">
                      <img style={{height:"95px"}}
                        onClick={() => navigate("/Productview")}
                        className="img-fluid  "
                        src={i.image}
                        alt=""
                      />
                    </div>
                    <div  className="">
                      <h5>{i.productname}</h5>
                    </div>
                    <div className="mt-3">
                      <div className=" text-danger">
                        <label
                          className="border border-danger-subtle"
                          htmlFor=""
                        >
                          500gm
                        </label>
                      </div>
                    </div>
                    <div style={{position:"absolute", bottom:0}}  className="w-100 row border border-dark-subtle bg-dark-subtle text-center my-auto justify-content-center mt-4  ">
                      <div className="col-5 my-auto text-center">
                        <label
                          style={{ textDecoration: "line-through" }}
                          htmlFor=""
                        >
                          <i class="fa fa-inr" aria-hidden="true"></i>40
                        </label>
                        <label htmlFor="" className="">
                          <i class="fa fa-inr fs-3" aria-hidden="true"></i>
                          {Math.ceil(i.price -(i.price * i.discount) / 100)}
                        </label>
                      </div>
                      <div className="col-md-7 text-center justify-content-center my-auto small">
                        {!cartListId.includes(i.id)?
                        <div
                          className="text-center "
                        >
                          <button
                            onClick={() => postData(i.id)}
                            
                            className="btn btn-outline-secondary"
                          >
                            <span className="" htmlFor="">
                              ADD
                            </span>
                          </button>
                        </div>:

                        <div className="text-center ">
                          <button onClick={()=>decqty(i.id)}
                            className="btn btn-primary"
                            htmlFor=""
                          >
                           - 

                          </button>
                          <span className="btn btn-success" htmlFor="">{getQuantity(i.id)}
                          </span>
                          <button className="btn btn-primary"onClick={()=>incqty(i.id)} > +</button>
                        </div>}
                        
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <  Footer/>
    </>
  );
};
export default Categrey;
