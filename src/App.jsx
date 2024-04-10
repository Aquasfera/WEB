import '../src/styles/App.css'
import { Outlet } from'react-router-dom'
import Landing from './pages/Landing'

function App() {


  return (
    <>
    <Outlet></Outlet>
    <Landing></Landing>
    </>
  )
}

export default App
