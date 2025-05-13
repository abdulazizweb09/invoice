import React, { useState } from "react";
import logo from "../imgs/logo.png";
import moon from "../imgs/moon.svg";
import user from "../imgs/user.svg";
import son from "../imgs/sun.svg";
import User from "./User";

function Navbar({ children }) {
  let [them, setThem] = useState(localStorage.getItem("them") || "light");
  function light() {
    setThem("dark");
    localStorage.setItem("them", "dark");
  }
  function dark() {
    setThem("light");
    localStorage.setItem("them", "light");
  }
  return (
    <div
      className={`flex max-md:block ${
        them == "light" ? "bg-hom" : "bg-dark dark text-white"
      }`}
    >
      <div
        className={`w-[103px] h-screen z-[999] max-md:hidden fixed rounded-br-3xl rounded-tr-3xl flex justify-between flex-col bg-navbar ${
          them == "light" ? "bg-navbar" : "bg-dark-navbar"
        }`}
      >
        <img src={logo} alt="" />
        <div>
          {them == "light" && (
            <img
              onClick={light}
              className="cursor-pointer mx-auto"
              src={moon}
              alt=""
            />
          )}
          {them == "dark" && (
            <img
              onClick={dark}
              className="cursor-pointer mx-auto"
              src={son}
              alt=""
            />
          )}
          <div className="w-full mt-8 mb-6 bg-[#494E6E] h-[1px]"></div>
          {/* <img className="cursor-pointer mx-auto mb-6" src={user} alt="" /> */}
          <User className="-mt-10" /> 
          {/* <UserBtn/> */}
        </div>
      </div>
      <div className="w-[103px] h-screen max-md:hidden"></div>

      <div
        className={`w-full  h-[80px] md:hidden flex justify-between bg-navbar ${
          them == "light" ? "bg-navbar" : "bg-dark-navbar"
        }`}
      >
        <img src={logo} alt="" />
        <div className="flex items-center">
          {them == "light" && (
            <img
              onClick={light}
              className="cursor-pointer mx-auto"
              src={moon}
              alt=""
            />
          )}
          {them == "dark" && (
            <img
              onClick={dark}
              className="cursor-pointer mx-auto"
              src={son}
              alt=""
            />
          )}
          <div className="w-[1px] ml-8 mr-8 bg-[#494E6E] h-full"></div>
          <img className="cursor-pointer mx-auto mr-6" src={user} alt="" />
        </div>
      </div>

      <div className="container max-lg:max-w-xl mx-auto max-w-[730px]">
        {/* <Test /> */}

        {children}
      </div>
    </div>
  );
}

export default Navbar;
