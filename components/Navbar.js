import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import NavLogo from "../public/nav.png";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusSquare,
  AiFillMinusSquare,
  AiFillShopping,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();

  return (
    <div className="flex flex-col md:flex-row sticky top-0 bg-white z-10 justify-center md:justify-start items-center py-2 shadow-lg">
      <div className="logo md:mx-5 mr-auto">
        <Link href={"/"}>
          <Image style={{ width: "auto", height: "auto" }} src={NavLogo} width={200} height={40} alt="" />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 md:space-x-8 font-bold md:font-normal md:text-md">
          <li className="hover:text-purple-600">
            <Link href={"/tshirts"}>T-shirts</Link>
          </li>
          <li className="hover:text-purple-600">
            <Link href={"/hoodies"}>Hoodies</Link>
          </li>
          <li className="hover:text-purple-600">
            <Link href={"/stickers"}>Stickers</Link>
          </li>
          <li className="hover:text-purple-600">
            <Link href={"/mugs"}>Mugs</Link>
          </li>
        </ul>
      </div>
      {/* Cart and Account section */}
      <div className="flex items-center space-x-2 absolute right-0 top-2 mb-2 md:top-auto md:bottom-0 text-3xl md:text-3xl mx-4 text-purple-600 cursor-pointer">
        {/* Account dropdown */}
        <div className="relative">
          <div onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            {dropdown && (
              <div className="absolute top-6 py-4 rounded-md px-5 w-32 border right-7 bg-white">
                <ul>
                  <li className="py-1 text-sm hover:text-purple-500 hover:font-bold">
                    <Link href={'/'}>My Account</Link>
                  </li>
                  <li className="py-1 text-sm hover:text-purple-500 hover:font-bold">
                    <Link href={'/'}>Orders</Link>
                  </li>
                  <li onClick={logout} className="py-1 text-sm hover:text-purple-500 hover:font-bold cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
            {user.value && <MdAccountCircle className="hover:text-purple-800 mx-2" />}
          </div>
        </div>

        {/* Login button */}
        {!user.value && (
          <Link href={'/login'}>
            <button className="bg-purple-600 px-2 py-1 rounded-md text-sm text-white mx-2 mb-1">Login</button>
          </Link>
        )}
        
        {/* Cart icon */}
        <span className="mb-0.5 md:mt-1 relative inline-flex" onClick={toggleCart}>
          <AiOutlineShoppingCart className="hover:text-purple-800" />
        </span>
      </div>

      {/* Cart sidebar */}
      <div
        ref={ref}
        className={`h-screen sidebar absolute right-0 top-0 p-10 bg-purple-200 z-10 backdrop-filter backdrop-blur-lg shadow-xl ring-1 ring-gray-900/5 transform transition-transform ${Object.keys(cart).length === 0 ? 'translate-x-full' : 'translate-x-0'} z-10`}
      >
        <h2 className="text-xl font-bold text-center">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-purple-600 text-2xl">
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal">
          {Object.keys(cart).length == 0 && (
            <div className="m-1 text-center">No Items in Cart.</div>
          )}
          {Object.keys(cart).map((k) => (
            <li key={k} className="hover:text-black">
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold text-sm">
                  {cart[k].name}({cart[k].size}/{cart[k].variant})
                </div>
                <div className="w-1/3 flex font-semibold text-center justify-center items-center text-lg">
                  <AiFillMinusSquare
                    onClick={() => removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}
                    className="text-purple-600"
                  />
                  <span className="mx-2">{cart[k].qty}</span>
                  <AiFillPlusSquare
                    onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}
                    className="text-purple-600"
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
        <span className='font-bold py-2'>SubTotal: ₹{subTotal}</span>
        <div className="flex mt-5">
          <Link href={'/checkout'}>
            <button type="button" className="text-white bg-purple-600 hover:bg-purple-950 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center mr-2 mb-2">
              <AiFillShopping className="text-lg mx-1" />
              Proceed
            </button>
          </Link>
          <button
            onClick={clearCart}
            type="button"
            className="text-white bg-purple-600 hover:bg-purple-950 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center mr-2 mb-2">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
