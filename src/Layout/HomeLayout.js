import Header from "./../components/Header";
import Sidebar from "./../components/Sidebar";
import Footer from "./../components/Footer";
import { Outlet } from "react-router-dom";
import Rightbar from "./../components/Rightbar";
function Homelayout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex heightfix">
        <Sidebar />
        <div className="body">
          <div className="redcolor">
            {" "}
            Khung layout với Header, Sidebar, Rightbar, footer
          </div>
          <Outlet />
        </div>
        <Rightbar />
      </div>
      <Footer />
    </div>
  );
}

export default Homelayout;
