import '../src/styles/App.css'
import Footer from './components/Footer'
import Context from './contexts/Context'
import Landing from './pages/Landing'
import Cookie from 'js-cookie'
function App() {

  // const cookie = Cookie.get('token')
  // console.log(cookie)
  // const logout = () => {
  //   document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Set the expiration date to a past date
  //   setLogin(null)
  //   // window.location.href = "/login";
  // }
  // const [login, setLogin] = useState(null)
  // const data = {login, setLogin, logout}
  return (
    <>
      {/* <Context.Provider value={data}> */}
        <Landing />
        <Footer />
      {/* </Context.Provider> */}
    </>
  )
}

export default App
