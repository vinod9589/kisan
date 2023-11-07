const Mycard = () => {const view=localStorage.getItem("Productdisplay")
const ParseData= JSON.parse(view)


  return (

    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 ">
            <div className="row">
              <div className="col-8 fs-3">
                <span className="fw-bold">My Cart</span>
                <span>(1item)</span>
              </div>
              <div
                className="col-4 text-end"
              >
                <i class="fa fa-times-circle-o fs-1" aria-hidden="true"></i>
                <h6 className="text-decoration-underline">ClearCart</h6>
              </div>
            </div>

            <div style={{height:'500px'}} className="row overflow-y-scroll">
              <div className="col-5 mt-3">
                <div>
                  <img
                    className="img-fluid shadow"
                    src={ParseData.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-7 mt-3">
                <h6>{ParseData.productname}</h6>
                <div className="fw-bold">
                  <span className="border border-dark-subtle rounded-3 bg-info mx-2">
                    {ParseData.qty}
                  </span>
                </div>

                <div style={{ fontSize: "30px" }} className="catwords">
                  <label htmlFor="">
                    <i class="fa fa-inr" aria-hidden="true"></i>{ParseData.price}</label>
                </div>

                <div
                  style={{ width: "100px" }}
                  className=" border border-danger-subtle text-center mt-2 "
                >
                  <button className="border-0 bg-transparent" htmlFor="">
                    -
                  </button>
                  <span className="" htmlFor="">
                    Add
                  </span>
                  <button className="border-0 bg-transparent" htmlFor="">
                    +
                  </button>
                </div>

                <span className="">remove</span>
              </div>
              <div className="col-5 mt-3">
                <div>
                  <img
                    className="img-fluid shadow"
                    src="https://api.kisankonnect.com/kisankonnect/Images/ProductImage/2022090714264320220405123931Untitled%20design%20(57)-min.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-7 mt-3">
                <h6>Banana Golden 500g</h6>
                <div className="fw-bold">
                  <span className="border border-dark-subtle rounded-3 bg-info mx-2">
                    500g
                  </span>
                </div>

                <div style={{ fontSize: "30px" }} className="catwords">
                  <label htmlFor="">
                    <i class="fa fa-inr" aria-hidden="true"></i>40
                  </label>
                </div>

                <div
                  style={{ width: "100px" }}
                  className=" border border-danger-subtle text-center mt-2 "
                >
                  <button className="border-0 bg-transparent" htmlFor="">
                    -
                  </button>
                  <span className="" htmlFor="">
                    Add
                  </span>
                  <button className="border-0 bg-transparent" htmlFor="">
                    +
                  </button>
                </div>

                <span className="">remove</span>
              </div>
              <div className="col-5 mt-3">
                <div>
                  <img
                    className="img-fluid shadow"
                    src="https://api.kisankonnect.com/kisankonnect/Images/ProductImage/2022090714264320220405123931Untitled%20design%20(57)-min.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-7 mt-3">
                <h6>Banana Golden 500g</h6>
                <div className="fw-bold">
                  <span className="border border-dark-subtle rounded-3 bg-info mx-2">
                    500g
                  </span>
                </div>

                <div style={{ fontSize: "30px" }} className="catwords">
                  <label htmlFor="">
                    <i class="fa fa-inr" aria-hidden="true"></i>40
                  </label>
                </div>

                <div
                  style={{ width: "100px" }}
                  className=" border border-danger-subtle text-center mt-2 "
                >
                  <button className="border-0 bg-transparent" htmlFor="">
                    -
                  </button>
                  <span className="" htmlFor="">
                    Add
                  </span>
                  <button className="border-0 bg-transparent" htmlFor="">
                    +
                  </button>
                </div>

                <span className="">remove</span>
              </div>
              <div className="col-5 mt-3">
                <div>
                  <img
                    className="img-fluid shadow"
                    src="https://api.kisankonnect.com/kisankonnect/Images/ProductImage/2022090714264320220405123931Untitled%20design%20(57)-min.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-7 mt-3">
                <h6>Banana Golden 500g</h6>
                <div className="fw-bold">
                  <span className="border border-dark-subtle rounded-3 bg-info mx-2">
                    500g
                  </span>
                </div>

                <div style={{ fontSize: "30px" }} className="catwords">
                  <label htmlFor="">
                    <i class="fa fa-inr" aria-hidden="true"></i>40
                  </label>
                </div>

                <div
                  style={{ width: "100px" }}
                  className=" border border-danger-subtle text-center mt-2 "
                >
                  <button className="border-0 bg-transparent" htmlFor="">
                    -
                  </button>
                  <span className="" htmlFor="">
                    Add
                  </span>
                  <button className="border-0 bg-transparent" htmlFor="">
                    +
                  </button>
                </div>

                <span className="">remove</span>
              </div>
            </div>
           
           <div className="text-center mt-4">
           <i class="fa fa-star" aria-hidden="true"></i>

            <span> Safe and Secure Payments.</span>
           </div>
           {/* last wark */}





           <div style={{backgroundColor:"#27a84a"}} className="row text-center my-auto mt-4 shadow">
            <div className="col-4 text-center my-auto">
            <button type="button" class="btn btn-outline-dark">ChekOut</button>
            </div>
            <div className="col-4 text-center my-auto">
                <span>1</span>
                <div>Items</div>
            </div>
            <div className="col-4 text-center my-auto ">
            <label className="fs-5" htmlFor=""><i class="fa fa-inr" aria-hidden="true"></i>40</label>
            <div>(save <i class="fa fa-inr" aria-hidden="true"></i>40)</div>

            </div>
           </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Mycard;
