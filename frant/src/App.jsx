import{BrowserRouter,Route,Routes} from "react-router-dom"
import Header from './page/Header'
import Home from './page/Home'
import Footer from "./page/Footer"
import Categrey from "./page/categrey"
import Productview from "./page/Productview"
import Mycard from "./page/Mycard"
import Checkout from "./page/Checkout"
import Signup from "./page/Signup"
import Login from "./page/Login"
import Categoryinput from "./page/Categoryinput"
import Purchase from "./page/Purchase"
import Ronak from "./page/Ronak"
import Rahultask from "./page/Rahultask"
import Productinput from "./page/Productinput"
import Vinoddemo from "./page/Vinoddemo"
import Preamdemo from "./page/Preamdemo"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/Header" element={<Header/>}></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Footer" element={<Footer/>}></Route>
    <Route path="/Categrey" element={<Categrey/>}></Route>
    <Route path="/Productview" element={<Productview/>}></Route>
    <Route path="/Mycard" element={<Mycard/>}></Route>
    <Route path="/Checkout" element={<Checkout/>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Categoryinput" element={<Categoryinput/>}></Route>
    <Route path="/Purchase" element={<Purchase/>}></Route>
    <Route path="/Ronak" element={<Ronak/>}></Route>
    <Route path="/Rahultask" element={<Rahultask/>}></Route>
    <Route path="/Productinput" element={<Productinput/>}></Route>
    <Route path="/Vinoddemo" element={<Vinoddemo/>}></Route>
    <Route path="/Preamdemo" element={<Preamdemo/>}></Route>
    </Routes>
    </BrowserRouter>
    
    
    
    </>
  )
}

export default App