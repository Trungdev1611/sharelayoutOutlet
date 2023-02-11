import Post from "./components/main/DataMain";
import "./styles.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Homelayout from "./Layout/HomeLayout";
import Aboutlayout from "./Layout/AboutLayout";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="App">
      <Routes>
        {/* 1 khung layout HomeLayout với Outlet bên trong HomeLayout */}
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Homelayout />}>
          <Route path="/layouthome" element={<Post />} />
          <Route path="/layouthome1" element={<div>Layouthome1</div>} />
          <Route path="/layouthome2" element={<div>Layouthome2</div>} />
        </Route>

        {/* 1 khung layout AboutLayout với Outlet bên trong HomeLayout */}

        <Route element={<Aboutlayout />}>
          <Route path="/layoutabout" element={<Post />} />
          <Route path="/layoutabout1" element={<div>Layouthome1</div>} />
          <Route path="/layoutabout2" element={<div>Layouthome2</div>} />
        </Route>
      </Routes>
      {/* <Post /> */}
    </div>
  );
}
