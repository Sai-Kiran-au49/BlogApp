import Home from "./pages/homepage/Homepage";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/About/about";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      < TopBar/>
      <Routes>
        <Route element={<Home />} exact path="/"/>
        <Route element={user ? <Home /> : <Register />} path="/register"/>
        <Route path="/login"element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />}/>
        <Route path="/settings" element={user ? <Settings /> : <Register />}/>
        <Route path="/post/:postId" element={<Single />}/>
        <Route path = "/about" element = {<About/>}/> 
      </Routes>
    </Router>
  );
}

export default App;