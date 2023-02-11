import Header from "./../components/Header";
import Sidebar from "./../components/Sidebar";
import Footer from "./../components/Footer";
import { Outlet } from "react-router-dom";

function Aboutlayout() {
  return (
    <div>
      <Header />
      <div className="flex heightfix">
        <Sidebar />
        {/* {children} */}
        <div className="body">
          <div className="redcolor">Chỉ có 3 cái header, sidebar, footer</div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutlayout;
