import { Link } from "react-router-dom"


const RoutesItem = () => {
  return (
    <>
        <div className="nav">
            <ul>
                <li>
                    <Link to="/income">Income</Link>
                </li>
                <li>
                    <Link to="/expense">Expense</Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default RoutesItem