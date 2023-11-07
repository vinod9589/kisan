import axios from "axios";
import { baserUrl } from "./BaseUrl";
import { lazy, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Header = (props) => {
  useEffect(() => {
    getdata(), getproductapi();
  }, []);
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);

  const getdata = () => {
    axios.get(baserUrl + "category").then((res) => setList(res.data));
  };

  const localcarlist = localStorage.getItem("cart");
  const parselocal = localcarlist ? JSON.parse(localcarlist) : [];
  const cartListId = parselocal?.map((i) => i.productId);
  // const [cartlist, setcartlist] = useState(parselocal);
  const [dt, setdt] = useState();

  // LOGINCHECK KA FANCTION

  const Name = localStorage.getItem("logincheck");

  // const parselocallog=log?JSON.parse(log):[];

  const remove = () => {
    const remove1 = localStorage.removeItem("cart");
    return remove1;
  };

  const khali = (n) => {
    const data = parselocal.filter((a) => a.productId !== n);
    localStorage.setItem("cart", JSON.stringify(data));
  };

  // const [parselocal1, setParselocal1] = useState(parselocal);

  const [productapilist, setProductapilist] = useState([]);

  const getproductapi = () => {
    axios
      .get(baserUrl + "productapi")
      .then((res) => setProductapilist(res.data));
  };

  const getname = (x) => {
    const name = productapilist.filter((i) => i.id === x)[0];
    const name1 = name?.productname;
    return name1;
  };

  const getimage = (x) => {
    const image1 = productapilist.filter((i) => i.id === x)[0];
    const image2 = image1?.image;
    return image2;
  };

  const getrate = (x) => {
    const rate1 = productapilist.filter((i) => i.id === x)[0];
    const rate2 = rate1?.price;
    return rate2;
  };

  const total = (x) => {
    const sum = productapilist.filter((i) => i.id === x)[0]?.price;
    return sum;
  };

  const total1 = () => {
    const ttl = parselocal
      ?.map((i) => total(i.productId))
      .reduce((a, b) => +a + +b, 0);
    return ttl;
  };

  // const decqty=(x)=>{
  //   const vinod=productapilist.map((i)=>i.productId===x?{...i,quantity:+i.quantity-1}:i)
  //   return vinod

  // }

  const [plus, setPlus] = useState();
  const incqty = (x) => {
    const quantity = parselocal.map((i) =>
      i.productId === x ? { ...i, quantity: +i.quantity + 1 } : i
    );
    setPlus(quantity);
  };

  const getCartItem = (x) => {
    const item = productapilist.filter((a, b) => a.productId === x)[0];
    return item;
  };

  const [log, setLog] = useState(false);

  const logremove = () => {
    localStorage.removeItem("logincheck");
    navigate("/");
  };

  // const itemlength=()=>{
  //   const item=parselocal?length>0
  // }

  return (
    <>
      {/* {JSON.stringify(Name)} */}

      <div style={{ position: "" }} className="container-fluid">
        <div className="card py-3   bg-secondary-subtle rounded-bottom-5    ">
          <div className="row my-auto">
            <div
              onClick={() => navigate("/")}
              className=" d-md-flex col-md-2 d-none justify-content-end  text-center my-auto"
            >
              <img
                className="test"
                src="https://www.kisankonnect.in/assets/images/kisankonnect_logo.png"
                alt=""
              />
            </div>
            <div className="col-md-10 my-auto ">
              <div className="row my-auto ">
                <div className="col-md-1 d-none d-md-flex my-auto text-center justify-content-center">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className=" col-11 col-md-4   ">
                  <input
                    onChange={(e) => props.setSearch(e.target.value)}
                    onFocus={() => {
                      navigate("/categrey");
                    }}
                    placeholder="Search for Product "
                    className="form-control  "
                    type="text"
                  />
                </div>
                <div className="col-md-2 col-4 ">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1">Harda</option>
                    <option value="2">Indore</option>
                    <option value="3">Khandwa</option>
                  </select>
                </div>
                <div className="col-md-2 col-5 my-auto ">
                  <div className="row my-auto align-items-center justify-content-center  text-center">
                    {Name ? (
                      <div
                        style={{ backgroundColor: "rgb(246,224,86)" }}
                        className="col-10  rounded-4  "
                      >
                        <i
                          // onClick={() => navigate("/Login")}
                          style={{ fontSize: "30px" }}
                          className="fa fa-user"
                          aria-hidden="true"
                        ></i>
                        <span className="m-3 text-center my-auto text-uppercase">
                          {Name}
                        </span>
                        <span onClick={() => setLog(!log)}>▼</span>
                      </div>
                    ) : (
                      <div>
                        {" "}
                        <i
                          onClick={() => navigate("/Login")}
                          style={{ fontSize: "30px" }}
                          className="fa fa-user"
                          aria-hidden="true"
                        ></i>
                      </div>
                    )}
                  </div>
                  {/* logout div */}
                  {log === true ? (
                    <div
                      style={{
                        backgroundColor: "#581845 ",
                        position: "absolute",
                        marginLeft: "20px",
                        color: "white",
                        borderRadius: "10%",
                      }}
                    >
                      <h5>Profile</h5>
                      {Name && <h5 onClick={() => logremove()}>Logout</h5>}
                    </div>
                  ) : null}
                </div>

                <div className="col-2 d-none d-md-block   my-auto text-center rounded-5">
                  <div className="row  my-auto text-center  bg-light-subtle rounded-5">
                    <div
                      onClick={() => setShow(!show)}
                      className="col-md-3 col-12  "
                    >
                      <i
                        style={{ fontSize: "35px" }}
                        className="fa fa-shopping-basket"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className=" col-10 justify-content-center   col-md-6 my-auto text-center">
                      <p className="text-center my-auto ">
                        My Cart                        {parselocal.length !== 0 ? (
                          <span className="">{parselocal.length}</span>
                        ) : null}
                      </p>
                    </div>
                  </div>

                  {/* Mycard */}
                </div>

                {/* -------secand my card---------- */}
                <div className="d-md-none col-3 justify-content-center   my-auto text-center rounded-5 m-0 p-0">
                  <div className="row  my-auto text-center">
                    <div className="col-3">
                      <i
                        onClick={() => setShow(!show)}
                        style={{ fontSize: "35px" }}
                        className="fa fa-shopping-basket"
                        aria-hidden="true"
                      >
                        {parselocal.length !== 0 ? (
                          <span className="">{parselocal.length}</span>
                        ) : null}
                      </i>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" d-md-flex d-none row mt-4 text-center m-0 p-0">
                {list
                  .filter((a, b) => b < 6)
                  .map((i, n) => (
                    <span
                      onClick={() => {
                        navigate("/Categrey");
                        localStorage.setItem("localcategory", i.name);
                      }}
                      className="col-1 text-center my-auto me-4"
                      style={{ width: "135px" }}
                    >
                      {i.name}
                    </span>
                  ))}

                <div className="col-2 text-center my-auto p-0 m-0">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>More</option>
                    {list
                      .filter((a, b) => b > 3)
                      .map((i, n) => (
                        <option value="1">{i.name}</option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {show === true ? (
        <div
          style={{ position: "fixed", zIndex: "5", top: 0, left: 0 }}
          className="container-fluid"
        >
          <div className="row justify-content-end">
            <div className="col-md-3 bg-white ">
              <div className="row">
                <div className="col-8 fs-3">
                  <span className="fw-bold">My Cart</span>
                  <span>({parselocal?.length}item)</span>
                </div>
                <div onClick={() => setShow(!show)} className="col-4 text-end">
                  <i class="fa fa-times-circle-o fs-1" aria-hidden="true"></i>
                  <h6
                    onClick={() => remove()}
                    className="text-decoration-underline"
                  >
                    ClearCart
                  </h6>
                </div>
              </div>
              {/* {JSON.stringify(cartlist)}   */}
              <div
                style={{ height: "500px" }}
                className="row overflow-y-scroll"
              >
                <div className="container-fluid">
                  {parselocal?.map((i, n) => (
                    <div className="row">
                      <div className="col-5 mt-3">
                        <div>
                          <img
                            className="img-fluid shadow"
                            src={getimage(i.productId)}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-7 mt-3">
                        <h6>{getname(i.productId)}</h6>
                        <div className="fw-bold">
                          <span className="border border-dark-subtle rounded-3 bg-info mx-2">
                            500gm
                          </span>
                        </div>

                        <div style={{ fontSize: "30px" }} className="catwords">
                          <label htmlFor="">
                            <i class="fa fa-inr" aria-hidden="true"></i>
                            {getrate(i.productId)}
                          </label>
                        </div>

                        <div
                          style={{ width: "100px" }}
                          className=" border border-danger-subtle text-center mt-2 "
                        >
                          <button
                            className="border-0 bg-transparent"
                            htmlFor=""
                          >
                            -
                          </button>
                          <span className="" htmlFor="">
                            {" "}
                            {i.quantity}
                          </span>
                          <button
                            onClick={() => incqty(i.qty)}
                            className="border-0 bg-transparent"
                            htmlFor=""
                          >
                            +
                          </button>
                        </div>

                        <butto
                          onClick={() => khali(i.productId)}
                          className="btn btn-dark"
                        >
                          remove
                        </butto>
                        {/* onClick={()=>setParselocal1(parselocal1.filter((a,b)=>b!==n))} */}
                      </div>
                    </div>
                  ))}
                </div>

                {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              </div>

              <div className="text-center mt-4">
                <i class="fa fa-star" aria-hidden="true"></i>

                <span> Safe and Secure Payments.</span>
              </div>
              {/* last wark */}

              <div
                style={{ backgroundColor: "#27a84a" }}
                className="row text-center my-auto mt-4 shadow"
              >
                <div className="col-4 text-center my-auto">
                  <button
                    onClick={() => navigate("/checkout")}
                    type="button"
                    class="btn btn-outline-dark"
                  >
                    ChekOut
                  </button>
                </div>
                <div className="col-4 text-center my-auto">
                  <span>{parselocal?.length}</span>
                  <div>Items</div>
                </div>
                <div className="col-4 text-center my-auto ">
                  <label className="fs-5" htmlFor="">
                    <i class="fa fa-inr" aria-hidden="true"></i>

                    <span>{total1()}</span>
                  </label>
                  <div>
                    (save <i class="fa fa-inr" aria-hidden="true"></i>40)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Header;
