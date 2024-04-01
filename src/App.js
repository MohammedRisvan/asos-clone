import { Route, Routes } from "react-router-dom";
import Otp from "./components/auth/otp";
import Register from "./components/Layout/registerlayout";
import Join from "./components/auth/signup";
import Footer from "./components/Layout/footer";
import Navber from "./components/Layout/navbar";
import Home from "./components/page/home";
import Login from "./components/auth/login";
import { Toaster } from "react-hot-toast";
import Updatepassword from "./components/auth/password";
import Profile from "./components/page/profile";
 

function App() {
  return (<>
  <Toaster/>
 <Routes>
<Route path="/" element={<Register/>}>
  <Route path="/signup" element={<Join/>}/>
  <Route path="/registerotp" element={<Otp/>}/>
  <Route path="/signin" element={<Login/>}/>
<Route path="/password"element={<Updatepassword/>}/>
<Route path="/profile" element={<Profile/>} />
</Route>
 </Routes>
      </>
  );
}

export default App;
