import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../imgs/googlwebp.webp";
import { useRegister } from "../store/useRegister";
import useLogin from "../store/useLogin";
// import Modal from "./Modal";

function Login() {
  let [email, setEmail] = useState("");
  let [pasword, setPasword] = useState();
  let { loginWithEmail } = useLogin();
  let { registerWithGoogle } = useRegister();
  let navigate = useNavigate();
  function to() {
    navigate("/register");
  }
  let obj = {
    email,
    pasword,
  };
  function submit(e) {
    e.preventDefault();
    if (obj) {
      loginWithEmail(obj.email, obj.pasword);
    }
  }
  return (
    <>
      {/* <Modal /> */}
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/CiurescuP/LogIn-Form/main/bg.jpg')",
        }}
      >
        <form className="w-[450px] p-5 bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl rounded-lg">
          <h3 className="text-center text-white text-3xl font-bold mb-5">
            Login Here
          </h3>
          <label htmlFor="email" className="text-white text-lg font-semibold">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Email or Phone"
            className="w-full mt-2 mb-4 p-3 bg-black/20 border border-gray-700 rounded text-white focus:ring-2 focus:ring-gray-500 focus:bg-gray-800 transition"
          />

          <label
            htmlFor="password"
            className="text-white text-lg font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={pasword}
            onChange={(e) => setPasword(e.target.value)}
            placeholder="Password"
            className="w-full mt-2 mb-4 p-3 bg-black/20 border border-gray-700 rounded text-white focus:ring-2 focus:ring-gray-500 focus:bg-gray-800 transition"
          />

          <div className="flex gap-5">
            <button
              onClick={submit}
              className="w-full mt-5 p-3 cursor-pointer bg-blue-600  text-white text-lg font-bold rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
            <button
              onClick={(e) => {
                e.preventDefault(), registerWithGoogle();
              }}
              className="w-full mt-5 p-3 flex justify-center gap-3 items-center cursor-pointer bg-green-600 text-white text-lg font-bold rounded hover:bg-green-700 transition"
            >
              <p>Google</p>
              <img className="w-10" src={google} alt="" />
            </button>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl hover:shadow-lg transition">
              <i className="fa-brands fa-facebook"></i>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white text-xl hover:shadow-lg transition">
              <i className="fa-brands fa-twitter"></i>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-600 text-white text-xl hover:shadow-lg transition">
              <i className="fa-brands fa-instagram"></i>
            </button>
          </div>
          <p className="text-center flex justify-center gap-2 text-white mt-4">
            Don’t have an account?{" "}
            <span className="cursor-pointer underline" onClick={to}>
              create
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
