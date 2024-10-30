
import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { CirclesWithBar } from 'react-loader-spinner'

function App() {

  const navigation = useNavigation()
  console.log(navigation)
  return (
    <>
      <NavBar></NavBar>
      {
        navigation.state==="loading"? <div 
        className="flex justify-center">
          <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        /> 
        </div>:
        <Outlet></Outlet>
      }
       
      <Footer></Footer>
    </>
  )
}

export default App
