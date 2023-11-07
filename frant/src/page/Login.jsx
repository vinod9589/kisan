import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // useEffect(()=>{getData()},[])

  const [postData, setPostData] = useState({});

  const [list, setList] = useState([]);

  const navigate = useNavigate();

  // const getData=()=>{
  //     axios.get("http://localhost:5000/signup").then((res)=>setList(res.data))
  // }
  const checkUser = () => {
    axios
      .post("http://localhost:5000/signup/signup", postData)

      .then((res) => {
        if (res.data.message === "ok") {
          const user = res.data.data
          localStorage.setItem("logincheck", user.name);
          navigate("/");
        } else {
          alert(res.data.message);
        }
      });
  };

  // const loginCheck=()=>{
  //     const newlist= list.filter((i)=>i.email===postData.email)
  //     // alert(JSON.stringify(newlist))
  //     if(newlist.length>0){
  //       if(newlist[0].password===postData.password){
  //         localStorage.setItem("check","okk")
  //         localStorage.setItem("useremail", newlist[0].email)

  //       }else{
  //         alert("Passwrod incorrect")
  //       }
  //     }else{
  //       alert("email incorrect")
  //     }
  //   }

  return (
    <>
      <Header />

      <div className="container-fluid ">
        <div className="row text-center justify-content-center align-items-center mt-5 mb-5 ">
          <div className="col-md-4 shadow">
            <h3 className="mt-3">Login in to KissanKonnect</h3>

            {/* {JSON.stringify(list)} */}
            {/* {JSON.stringify(postData)} */}

            <div className="mt-4">
              <input
                onChange={(e) =>
                  setPostData({ ...postData, email: e.target.value })
                }
                placeholder="Email"
                className="form-control"
                type="text"
              />
            </div>
            <div className="mt-4">
              <input
                onChange={(e) =>
                  setPostData({ ...postData, password: e.target.value })
                }
                placeholder="Password"
                className="form-control"
                type="text"
              />
            </div>

            <button
              onClick={() => {
                checkUser();
                
              }}
              className="btn btn-outline-primary mt-5"
            >
              Submit
            </button>
            <button
              onClick={() => {
                navigate("/Signup");
              }}
              className="btn btn-outline-primary mt-5"
            >
              NewLogin
            </button>
          </div>
          <div className="col-md-4 mx-3 shadow  ">
            <img
              style={{ height: "256px" }}
              className="img-fluid object-fit-contain img"
              src="https://www.kisankonnect.in/assets/img/footer-img.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Login;
