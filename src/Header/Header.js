import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../image/smartdentify.png";

function Header(props) {
  const [scrollPosition, setscrollPosition] = useState(0);
  const [state, setState] = useState(false);
  function offsetPageY() {
    const position = window.scrollY;
    setscrollPosition(() => position);
    if (position >= 100) {
      setState(true);
    } else {
      setState(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", offsetPageY);
    return () => {
      window.removeEventListener("scroll", offsetPageY);
    };
  }, [scrollPosition]);
  const link = ["Home", "About Us", "Services", "Pricing", "Contact"];
  const slactic =
    "fixed top-0 left-0 w-full shadow-sm bg-[#008287] py-5 px-4 md:px-24 flex items-center justify-between space-x-14";
  const dynamic =
    "py-5 px-4 md:px-0 mt-3 flex items-center justify-between space-x-14";
  return (
    <nav onScroll={offsetPageY} className={state ? slactic : dynamic}>
      <Link to="/">
        <div className="text-white flex flex-row items-center justify-center snap-start">
          <img src={Logo} alt="" className="w-5 h-5" />
          <h3 className="font-GoshaSans uppercase text-2xl md:text:xl">
            Smart Identity
          </h3>
        </div>
      </Link>
      <ul
        className={
          state
            ? "hidden lg:flex space-x-6 md:bg-contain items-center justify-center font-Roboto text-white font-medium Primary text-sm"
            : "hidden lg:flex space-x-6 md:bg-contain items-center justify-center font-Roboto text-[#051B47]/75 font-medium Primary text-sm"
        }
      >
        {link.map((links, index) => (
          <li
            key={index}
            className="hover:bg-slate-300 p-2 rounded-full px-4 hover:ease-in-out duration-150"
          >
            <Link to={`#${links.toLocaleLowerCase()}`}>{links}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex items-center justify-center space-x-4">
        <button className="bg-[#FF743D] text-sm px-4 py-2 text-white font-Roboto rounded hover:bg-[#FF743D]/90 hover:duration-200 hover:ease-in-out">
          <Link to="/register">Start Free Trial</Link>
        </button>
        <button className="border text-sm font-Roboto border-[#FF743D] px-4 py-2 text-white rounded hover:bg-slate-200/40 hover:duration-200 hover:ease-in-out">
          <Link to="/login">Login</Link>
        </button>
      </div>
      <button
        className={
          state
            ? "h-10 w-10 lg:hidden text-white"
            : "h-10 w-10 lg:hidden text-[#008287]"
        }
        onClick={(event) =>
          props.handleClick(
            event,
            document.querySelector("#open"),
            document.querySelector("#close")
          )
        }
      >
        <svg
          id="open"
          xmlns="http://www.w3.org/2000/svg"
          width="2.5em"
          height="2.5em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M0 1h16v2H0zm0 3h16v2H0zm0 3h16v2H0zm0 3h16v2H0zm0 3h16v2H0z"
          />
        </svg>
        <svg
          id="close"
          className="hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="2.5em"
          height="2.5em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"
          />
        </svg>
      </button>
    </nav>
  );
}
export default Header;
