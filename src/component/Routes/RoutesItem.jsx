import { Link } from "react-router-dom"


const RoutesItem = () => {
  return (
    <>
        <div className="nav border border-1px border-[#cdcdcd] py-2">
            <ul className="flex justify-evenly">
                <li className="text-base font-bold text-green-500">
                    <Link to="/">Income</Link>
                </li>
                <li className="text-base font-bold text-red-500">
                    <Link to="/expense">Expense</Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default RoutesItem