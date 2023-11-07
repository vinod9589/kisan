import axios from "axios";
import { baserUrl } from "./BaseUrl";
import { useEffect, useState } from "react";
const Purchase = () => {
    useEffect(()=>{getdata();getPartyData();getBrokerData()},[])
    const [partyList,setPartyList]=useState([])


    const [brokerList,setBrokerList]=useState([])

    const getBrokerData=()=>{
        axios.get(baserUrl+ "broker").then((res)=>setBrokerList(res.data))
    }
      

  

    const getPartyData = ()=>{
        axios.get(baserUrl +"party").then((res)=>setPartyList(res.data))
    }
    const [list,setList]=useState([])

    const getdata=()=>{
        axios.get(baserUrl + "purchase").then((res)=>setList(res.data))
    }
    const getPartyName = (x)=>{

        const name = partyList.filter((i)=>i.id===x)[0]?.partyName

        return name
    }

    const getBrokerName=(x)=>{
    

        const name=brokerList.filter((i)=>i.id===x)[0]?.partyName
        return name
    }


    const totalqlt=()=>{
        const vinod=list.map((i)=>+i.quantity).reduce((a,b)=>a+b,0)
        return vinod
    }
    

    const abhi=()=>{
        const op=list.map((i)=>+i.rate*i.quantity).reduce((a,b)=>a+b,0)
        return op
    }

   const [fromDate,setFromDate]=useState("")
   const [toDate,setToDate]=useState("")

const list1 = fromDate!==""?list.filter((i)=>i.saudaDate>=fromDate):list
const list2 = toDate!==""?list1.filter((i)=>i.saudaDate<=toDate):x

 
 
 return <>
 <button>{totalqlt().toFixed(2)} plus</button>
 <button>{abhi().toFixed(2)} rate*qt</button>
<input onChange={(e)=>setFromDate(e.target.value)} type="date" className="form-control w-25" />
<input onChange={(e)=>setToDate(e.target.value)} type="date" className="form-control w-25" />
  <table className="table">
    <thead>
        <th>S.no</th>
        <th>Date</th>

        <th>PartyName</th>
        <th>BrokerName</th>
        <th>Rate</th>
        <th>Quantity</th>
    </thead>
    
    <tbody>
        {list2.map((i,n)=>
        <tr>
            <td>{n+1}</td>
            <td>{i.saudaDate.split("-").reverse().join("-")}</td>
            <td>{getPartyName(i.partyName)}</td>
            <td>{getBrokerName(i.brokerName)}</td>
            <td>{i.rate}</td>
            <td>{i.quantity}</td>
        </tr>)}
    </tbody>
    
  </table>

  
  
  
  
  </>;
};
export default Purchase;