import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useRouter } from "next/router";

const signup = () => {
  const apiUrl=process.env.NEXT_PUBLIC_API_URL;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push('/')
    }
  },[])

  const handleChange=(e)=>{
    if(e.target.name=='name'){
      setName(e.target.value)
    }
    else if(e.target.name=='email'){
      setEmail(e.target.value)
    }
    else if(e.target.name=='password'){
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const data = { name, email, password };

    const res = await fetch(`${apiUrl}/api/signup`, {
      method: "POST", 
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    
    setEmail("");
    setName("");
    setPassword("");
    toast.success('Your account has been created successfully!', { position: "top-center", autoClose: 1300, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined});

  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-5 lg:px-8">
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
      <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className=" mx-auto h-auto w-auto"
          src="/logo.png"
          alt="Your Company"
        />
        <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up for an account
        </h2>
      </div>

      <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6" method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
              placeholder="  Aman Singh"
              value={name}
                onChange={handleChange}
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
              placeholder="  aman45@gmail.com"
              value={email}
                onChange={handleChange}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input placeholder="  ********"
              value={password}
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-7 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            href={"/login"}
            className="font-semibold leading-6 text-purple-600 hover:text-purple-500"
          >
            {" "}
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default signup;
