
import { Outlet } from "react-router-dom";
 import Nav from "../components/UI/sections/Nav"
/* import Footer from "../components/UI/sections/Footer"; */
 
const Layout: React.FC = () => {
  return (
    <>
      <div>
        <Nav />
        <Outlet />
 
      </div>
    </>
  );
};

export default Layout;
