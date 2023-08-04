import "../index.css";
import Book from "../image/appointment.png";
import Header from "../Header/Header";
import background from "../image/screenbg.png";
import Hero from "../Component/Hero";
import Price from "../Component/Pricing";
import Footer from "../Footer/Footer";
import About from "../Component/about";
import Appointment from "../Component/book";
import MinifiedNav from "../Header/Minav";
import { useState } from "react";

function LandingPage() {
  const [toggled, setToggled] = useState(false);
  function dateHandler() {
    const dt = new Date();
    return dt.getFullYear();
  }
  function toggler(event, open, close) {
    if (event.target.id === "close") {
      close.classList.toggle("hidden");
      open.setAttribute("class", "block");
      setToggled(false);
    } else {
      open.classList.toggle("hidden");
      close.setAttribute("class", "block");
      setToggled(true);
    }
  }
  return (
    <div
      id="page"
      className="overflow-x-hidden bg-slate-100 snap-y scroll-smooth"
    >
      <div
        style={{
          background: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto xl:px-24 pb-14">
          <Header handleClick={toggler} />
          {toggled && <MinifiedNav />}
          <Hero />
        </div>
      </div>
      <div className="container mx-auto xl:px-24 pb-14">
        <About />
        <Price />
      </div>
      <div
        style={{
          backgroundImage: `url(${Book})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container px-4 md:mx-auto mt-4 xl:px-24 mb-8">
          <Appointment />
        </div>
      </div>
      <div className="container mx-auto mt-4 xl:px-24 mb-8">
        <Footer />
      </div>

      <div className="bg-[#008287] p-4 text-center font-Roboto text-sm text-white">
        <p>{dateHandler()} &copy; Smart Identity All Rights Reserved</p>
      </div>
    </div>
  );
}
export default LandingPage;
