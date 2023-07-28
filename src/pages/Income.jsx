import { useState,useEffect } from "react"
import RoutesItem from "../component/Routes/RoutesItem"
import {FaTrashAlt} from "react-icons/fa"
import { db } from "../FirebaseConfig"
import {collection, getDocs, addDoc} from "firebase/firestore"

const Income = () => {
  let [allIncome, setAllIncome] = useState([])
  let [income, setIncome] = useState("")
  let [amount,setAmount] = useState("")
  let incomeData = collection(db,'income')

  let handleIncome= async ()=>{
    await addDoc(incomeData,{income: income,amount: amount})
  }


  useEffect(()=>{
    let storedData = async ()=>{
      let myIncome = await getDocs(incomeData)
      setAllIncome(myIncome.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    storedData()
  },[])


  return (
    <>
    <div className="income_part w-96 h-auto bg-zinc-50 p-4 border rounded shadow-md">
      <RoutesItem/>
      <div className="amount mt-2">
        <h1 className="text-2xl font-bold text-green-500 text-center">Balance</h1>
        <h2 className="text-2xl font-bold text-green-500 text-center">$00.0</h2>
        <p className="text-center mt-3">Last updated: 28-07-2023</p>
      </div>
      <div className="input_part mt-4">
      <span>
        <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Add name of income" onChange={(e) => setIncome(e.target.value)} value={income}/>
      </span>
      <span>
        <input type="number" className="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Add amount" onChange={(e) => setAmount(e.target.value)} value={amount}/>
      </span>
      <span>
        <button onClick={handleIncome} className="mt-4 w-full btn bg-green-600 text-white border-green-600 hover:bg-green-600 hover:border-green-600 ">
          Add transaction
        </button>
      </span>
      </div>
      <div className="history">
        <h3 className="text-md font-bold mt-3 border-b-2 border-slate-300 pb-2">Income History</h3>
        <ul className="h-64 overflow-y-scroll">
        {allIncome.map((info)=>(
          <>
          <li className="text-md font-bold text-white rounded bg-green-600 p-2 flex justify-between mt-3">{info.income} <span>${info.amount}</span> <span className="mt-1 cursor-pointer"><FaTrashAlt/></span></li>
          </>
          
        ))}
        </ul>
      </div>
    </div>
    
    </>
  )
}

export default Income