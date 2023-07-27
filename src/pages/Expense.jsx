import { Link } from "react-router-dom"

const Expense = () => {
  return (
    <>
      <div className="nav_item">
        <Link to="/"><button className="btn btn-primary">Income</button></Link>
        <Link to="/expense"><button className="btn btn-secondary">Expense</button></Link>
        </div>
    <div>Expense</div>
    </>
  )
}

export default Expense