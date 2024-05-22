import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import NavBar from "../pages/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  // console.log(location);

  const signUpHeaderFooter = location.pathname.includes("signup");
  const loginHeaderFooter = location.pathname.includes("login");

  // console.log(loginHeaderFooter);
  // console.log(signUpHeaderFooter);

  return (
    <div>
      {loginHeaderFooter || signUpHeaderFooter || <NavBar></NavBar>}
      {/* {signUpHeaderFooter || <NavBar></NavBar>} */}
      <Outlet></Outlet>
      {loginHeaderFooter || signUpHeaderFooter || <Footer></Footer>}
      {/* {signUpHeaderFooter || <Footer></Footer>} */}
    </div>
  );
};

export default Main;
