import axios from "axios";
import { useEffect, useState } from "react";
import { baserUrl } from "./BaseUrl";

const Rahultask = () => {
    useEffect(()=>{getdata(),getpartyData(),getBrokerData()},[])



    const [list,setList]=useState([])
    const [brokerlist,setbrokerList]=useState([])
    const [partyList,setPartyList]=useState([])

    const getpartyData=()=>{
        axios.get(baserUrl +"party").then((res)=>setPartyList(res.data))
    }

    const partyName=(x)=>{
        const name=partyList.filter((i)=>i.id===x)[0]?.partyName
        return name
    }

    const getdata=()=>{
        axios.get(baserUrl +"purchase").then((res)=>setList(res.data))
    }
    const getBrokerData =()=>{
        axios.get(baserUrl+"broker").then((res)=>setbrokerList(res.data))
    }

    const brokerName=(x)=>{
        const name=brokerlist.filter((i)=>i.id===x)[0]?.partyName
        return name
    }


    const plus=()=>{
        const total=list.map((i)=>+i.quantity).reduce((a,b)=>a+b,0)
        return total
    }
   


    const into=()=>{
        const to=list.map((i)=>i.quantity*i.rate).reduce((a,b)=>a+b,0)
        return to
    }

   const[fromDate,setFromDate]=useState("")
    const[toDate,setToDate]=useState("")
    const [search,setSearch]=useState("")




    const list1 = fromDate!==""?list.filter((a)=>a.saudaDate>=fromDate):list
    const list2 = toDate!==""?list1.filter((a)=>a.saudaDate<=toDate):list1

    const list3 = search!==""?list2.filter((a)=>brokerName(a.brokerName).includes(search)||a.quantity.includes(search)):list2



    



  return <>
  <button>{plus().toFixed(2)}</button>
  <button>{into().toFixed(2)}</button>


  <input type="date" onChange={(e)=>setFromDate(e,target.value)} className="" />
  <input type="date" onChange={(e)=>setToDate(e.target.value)} className="" />
  <input onChange={(e)=>setSearch(e.target.value)} placeholder="search" type="text" />







  <table className="table">
    <thead>
        <th>S.no</th>
        <th>Date</th>
        <th>Partyname</th>
        <th>Brokername</th>
        <th>Rate</th>
        <th>Quantity</th>
    </thead>
    <tbody>
        {list3.map((i,n)=>
        <tr>
            <td>{n+1}</td>
            <td>{i.saudaDate.split("-").reverse().join("-")}</td>
            <td>{partyName(i.partyName)}</td>
            <td>{brokerName(i.brokerName)}</td>
            <td>{i.quantity}</td>
            <td>{i.rate}</td>
        </tr>)}
    </tbody>
  </table>



  
  
  
  
  
  </>;
};
export default Rahultask;