import ReactDOM from 'react-dom/client'
import Expense from './pages/Expense.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Income from './pages/Income.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Income/>,
  },
  {
    path: "/expense",
    element: <Expense/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
