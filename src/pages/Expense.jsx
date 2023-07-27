import RoutesItem from "../component/Routes/RoutesItem"
import {FaTrashAlt} from "react-icons/fa"

const Expense = () => {
  return (
    <>
    <div className="income_part w-96 h-auto bg-zinc-50 p-4 border rounded shadow-md">
      <RoutesItem/>
      <div className="amount mt-2">
        <h1 className="text-2xl font-bold text-red-500 text-center">Balance</h1>
        <h2 className="text-2xl font-bold text-red-500 text-center">$00.0</h2>
        <p className="text-center mt-3">Last updated: 28-07-2023</p>
      </div>
      <div className="input_part mt-4">
      <span>
        <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Add name of Expense" />
      </span>
      <span>
        <input type="number" className="mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Add amount" />
      </span>
      <span>
        <button className="mt-4 w-full btn bg-red-500 text-white border-red-500 hover:bg-red-500 hover:border-red-500 ">
          Add Expense
        </button>
      </span>
      </div>
      <div className="history">
        <h3 className="text-md font-bold mt-3 border-b-2 border-slate-300 pb-2">Expense History</h3>
        <ul className="h-64 overflow-y-scroll">
          <li className="text-md font-bold rounded text-white bg-red-600 p-2 flex justify-between mt-3">Shopping <span>$100.0</span> <span className="mt-1 cursor-pointer hover:text-green-500"><FaTrashAlt/></span></li>
          <li className="text-md font-bold rounded text-white bg-red-600 p-2 flex justify-between mt-3">Shopping <span>$100.0</span> <span className="mt-1 cursor-pointer hover:text-green-500"><FaTrashAlt/></span></li>
          <li className="text-md font-bold rounded text-white bg-red-600 p-2 flex justify-between mt-3">Shopping <span>$100.0</span> <span className="mt-1 cursor-pointer hover:text-green-500"><FaTrashAlt/></span></li>
          <li className="text-md font-bold rounded text-white bg-red-600 p-2 flex justify-between mt-3">Shopping <span>$100.0</span> <span className="mt-1 cursor-pointer hover:text-green-500"><FaTrashAlt/></span></li>
          <li className="text-md font-bold rounded text-white bg-red-600 p-2 flex justify-between mt-3">Shopping <span>$100.0</span> <span className="mt-1 cursor-pointer hover:text-green-500"><FaTrashAlt/></span></li>
          <li className="text-md font-bold rounded text-white bg-red-600 p-2 flex justify-between mt-3">Shopping <span>$100.0</span> <span className="mt-1 cursor-pointer hover:text-green-500"><FaTrashAlt/></span></li>
          <li className="text-md font-bold rounded text-white bg-red-600 p-2 flex justify-between mt-3">Shopping <span>$100.0</span> <span className="mt-1 cursor-pointer hover:text-green-500"><FaTrashAlt/></span></li>
          <li className="text-md font-bold rounded text-white bg-red-600 p-2 flex justify-between mt-3">Shopping <span>$100.0</span> <span className="mt-1 cursor-pointer hover:text-green-500"><FaTrashAlt/></span></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Expense