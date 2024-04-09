import Footer from "./footer";
import Navber from "./navbar";
import {Outlet} from  'react-router-dom';
function HomeLayout(){
return(
<div>
<Navber/>
<Outlet/>
<Footer/>
</div>)
}
export default  HomeLayout;