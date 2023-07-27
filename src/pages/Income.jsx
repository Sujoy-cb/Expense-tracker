import { Link } from "react-router-dom"


const Income = () => {
  return (
    <>
    <div className="nav_item">
        <Link to="/"><button className="btn btn-primary">Income</button></Link>
        <Link to="/expense"><button className="btn btn-secondary">Expense</button></Link>
    </div>
    <h1>Income</h1>
    </>
  )
}

export default Income