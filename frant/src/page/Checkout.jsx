import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { baserUrl } from "./BaseUrl";

const Checkout = () => {
  useEffect(() => {
    getproductapi();
  }, []);
  const [back, setBack] = useState(1);

  const localcarlist = localStorage.getItem("cart");
  const parselocal =  JSON.parse(localcarlist);     

  const [list, setList] = useState([]);

  const getproductapi = () => {
    axios.get(baserUrl + "productapi").then((res) => setList(res.data));
  };

  const getname = (x) => {
    const t = list.filter((i) => i.id === x)[0];
    const t1 = t?.productname;
    return t1;
  };
  const getimage=(x)=>{
    const i=list.filter((i)=>i.id===x)[0]
    const i1=i?.image
    return i1
  }
  const getprice=(x)=>{
    const p=list.filter((i)=>i.id===x)[0]
    const p1=p?.price
    return p1

  }

  const total=(x)=>{
    const sum=list.filter((i)=>i.id===x)[0]?.price
    return sum
  }

  const total1=()=>{
    const ttl = parselocal?.map((i)=>
   total(i.productId)).reduce((a,b)=>+a+ +b,0)
    return ttl
  }
  return (
    <>
{/* {JSON.stringify(parselocal)} */}
      <Header />

      <div
        style={{ height: 100, backgroundColor: "#f6faec" }}
        className="container-fluid d-flex justify-content-center align-items-center location mt-5"
      >
        <div
          style={{
            height: "1px",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "50%",
          }}
          className=""
        >
          <div          
                               

            style={{
              height: 50,
              width: 50,
              borderRadius: "50%",
              backgroundColor:back===1?"aqua":"white" 

              
            }}
            className="text-center fs-3"
          >
            <i              
 class="fa fa-shopping-cart" aria-hidden="true"></i>
          </div>
          <div
            style={{
              height: 50,
              width: 50,
              borderRadius: "50%",
              backgroundColor: back===2? "#DAF7A6":"white"

            }}
            className="text-center fs-3"
          >
            <i  class="fa fa-map-marker" aria-hidden="true"></i>
          </div>
          <div
            style={{
              height: 50,
              width: 50,
              backgroundColor: "white",
              borderRadius: "50%",
            }}
            className="text-center fs-3"
          >
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
          </div>
          <div
            style={{
              height: 50,
              width: 50,
              backgroundColor: "white",
              borderRadius: "50%",
            }}
            className="text-center fs-3"
          >
            <i class="fa fa-address-card" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="row m-0 justify-content-evenly">
          <div
            style={{ border: "1px solid green" }}
            className="col-md-7 rounded-4"
          >
            <div
              style={{ border: "1px solid green" }}
              className="row mx-3 mt-3 rounded-4"
            >
              <div className="col-md-1 py-3 ">
                <div className="">
                  <span
                    style={{ border: "1px solid green" }}
                    className="fs-5 rounded-5 bg-info-subtle "
                  >
                    1
                  </span>
                </div>
              </div>
              <div className="col-md-11">
                <h1>Profile Detail</h1>
                <p>We need your profile detail.</p>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Full Name"
                />
                <i class="fa fa-user" aria-hidden="true"></i>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email Id"
                />
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <br />
                <button type="button" class="btn btn-outline-primary">
                  Primary
                </button>
              </div>
            </div>

            <div
              style={{ display: back === 1 ? "flex" : "none" }}
              className="row text-center my-auto fs-5 align-items-center"
            >
              <div className="row text-center mt-3">
                <div className="col-6">
                  <h3>Items in your cart</h3>
                </div>
                <div className="col-6 text-center text-end">
                  <button
                    onClick={() => setBack(2)}
                    className="btn btn-outline-primary"
                  >
                    Next
                  </button>
                </div>
              </div>
              {/* {list.filter((a)=>a._id===parselocal.productId).map((i,n)=> */}
             {parselocal?.map((a)=>
                <div className="row text-center justify-content-center align-items-center">
                  <div className="col-3  ">
                    <img
                      className="img-fluid object-fit-contain"
                      src={getimage(a.productId)}
                      alt=""
                    />
                  </div>
                  <div className="col-3">
                    <span>{getname(a.productId)}</span>
                    <br />
                    <span>500g</span>
                  </div>
                  <div className="col-3">
                    <button className="border-0 bg-transparent" htmlFor="">
                      -
                    </button>
                    <span className="" htmlFor="">
                      1
                    </span>
                    <button className="border-0 bg-transparent" htmlFor="">
                      +
                    </button>

                    <i className="fa fa-trash mx-2" aria-hidden="true"></i>
                  </div>
                  <div className="col-3 fs-2">
                    <label htmlFor="">
                      <i class="fa fa-inr" aria-hidden="true"></i>{getprice(a.productId)}
                    </label>
                  </div>
                </div>
               )} 
            </div>
            <hr />

            <div
              style={{ display: back === 2 ? "flex" : "none" }}
              className="col-md-12 "
            >
              <div className="row">
                <div className="col-9">
                  <h3>Add New Delivery Address</h3>
                </div>
                <div className="col-3">
                  <button
                    onClick={() => setBack(1)}
                    className="btn btn-outline-primary"
                  >
                    Back
                  </button>
                </div>

                <h5>Search Society, City & Area</h5>
                <input className="form-control" type="text" />

                <div className="row">
                  <div className="col-md-4">
                    <h5>Flat No.*</h5>
                    <input className="form-control" type="text" />
                    <h6>Please enter flat no.</h6>
                  </div>
                  <div className="col-md-4">
                    <h5>Wing</h5>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="col-md-4">
                    <h5>Floor & Building/Society Name*</h5>

                    <input className="form-control" type="text" />
                    <h6>Please enter Building/Society name.</h6>
                  </div>
                  <h5>Alternative No.</h5>
                  <input className="form-control" type="text" />
                  <h5>Complete Address *</h5>
                  <input className="form-control" type="text" />

                  <h6>Complete Address *</h6>
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <label for="floatingTextarea">Comments</label>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <h5>Flat No.*</h5>
                      <input className="form-control" type="text" />
                      <h6>Please enter flat no.</h6>
                    </div>
                    <div className="col-md-4">
                      <h5>Wing</h5>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="col-md-4">
                      <h5>Floor & Building/Society Name*</h5>

                      <input className="form-control" type="text" />
                      <h6>Please enter Building/Society name.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ border: "1px solid green" }}
            className="col-md-4  rounded-4 h-100"
          >
            <div className="row  text-center align-items-center">
              <h1>Billing Details</h1>

              <input
                placeholder="Coupon"
                className="form-control mt-5"
                type="text"
              />
              <input
                placeholder="Coupon"
                className="form-control mt-5"
                type="text"
              />
              <hr className="mt-5" />
            </div>
            <div className="row">
              <div className="col-6">Cart Amount</div>
              <div className="col-6 text-end fs-5 ">
                <i class="fa fa-inr" aria-hidden="true"></i>40
              </div>
              <div className="col-6 mt-3">Packaging Charges</div>
              <div className="col-6 text-end mt-3">
                <span>+</span>
                <i class="fa fa-inr" aria-hidden="true"></i>40
              </div>
              <div className="col-6 mt-3">Delivery Charges</div>
              <div className="col-6 text-end mt-3 ">
                <span>+</span>
                <i class="fa fa-inr" aria-hidden="true"></i>40
              </div>
              <hr className="mt-3" />

              <div
                style={{ backgroundColor: "#27a84a" }}
                className="row mx-auto mt-4 shadow  rounded-3 text-white"
              >
                <div className="col-4 text-center my-auto">
                  <h4>Total</h4>
                </div>
                <div className="col-4 text-center my-auto">
                  <span>1</span>
                  <div>Items</div>
                </div>
                <div className="col-4 text-center my-auto ">
                  <label className="fs-5" htmlFor="">
                    <i class="fa fa-inr" aria-hidden="true"></i>{total1()}
                  </label>
                  <div>
                    (save <i class="fa fa-inr" aria-hidden="true"></i>40)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
