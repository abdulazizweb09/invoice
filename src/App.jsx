import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { add, remuv, setloading } from "./store/setUser";
import { toast } from "sonner";
function App() {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let auth = getAuth();
  let { user } = useSelector((state) => state.user);
  console.log(user);
  
  useEffect(() => {
    dispatch(setloading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(add(user));
        navigate('/')
      } else {
        dispatch(remuv());
        toast.error("User Already Sign Out");
        navigate("/login");
      }
      dispatch(setloading(false));
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar>
              <Home />
            </Navbar>
          }
        />
        <Route
          path="/details/:id"
          element={
            <Navbar>
              <Details />
            </Navbar>
          }
        />
        <Route
          path="/login"
          element={
              <Login />
          }
        />
        <Route
          path="/register"
          element={
              <Register />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
