import React from "react";
import { Container } from "../../components";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleBtn = () => {
    console.log("ok");
  };
  return (
    <Container>
      <div className=" mx-auto w-[50%]  flex justify-center items-center h-full ">
        <div className=" shadow-2xl flex flex-col gap-8 p-5">
          <div className="flex gap-1 items-end  ">
            <div className=" ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5714285714285716"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-mask lucide lucide-venetian-mask-icon lucide-venetian-mask"
              >
                <path d="M18 11c-1.5 0-2.5.5-3 2" />
                <path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" />
                <path d="M6 11c1.5 0 2.5.5 3 2" />
              </svg>
            </div>
            <div className=" ">
              <h1 className="text-main font-bold text-5xl">MAS</h1>
            </div>
            <div className="flex flex-col justify-end  ">
              <div className=" text-letter font-bold">
                <p className="  text-sm">Bank</p>
                <p className="text-sm ">Management System</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 flex-col">
              <label className="text-main" htmlFor="email">
                Email
              </label>
              <input
                className=" border border-main"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex gap-2  flex-col">
              <label className="text-main" htmlFor="password">
                Password
              </label>
              <input
                className=" border border-main"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Link to={""}>
              <button
                onClick={handleBtn}
                className=" border shadow-2xl font-bold flex items-center py-1 bg-white text-main  rounded-full px-4   "
              >
                Log-In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
