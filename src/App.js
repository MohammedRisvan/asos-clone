import Otp from "./components/auth/otp";
import Register from "./components/auth/register";
import Join from "./components/auth/signup";
import Footer from "./components/Layout/footer";
import Navber from "./components/Layout/navbar";
import Home from "./components/page/home";

function App() {
  return (
    <div className="App">
      <Navber/>
      <Register/>
      <Otp/>
      
      <Join/>
      {/* <Register/> */}
      {/* <Home/> */}
      <Footer/>
    </div>
  );
}

export default App;
