import { useState } from "react";
import CardTemplate from "../Component/cardtemplates";
import SideNav from "../Nav/sidebar";

export default function Templates() {
  const [display, setDisplay] = useState(true);
  function Toggle() {
    setDisplay((prevState) => !prevState);
  }
  return (
    <div className="bg-slate-100 w-full h-screen fixed">
      <div className="w-full h-screen flex flex-row items-center space-between overflow-x-hidden">
        <SideNav Toggled={Toggle} display={display} />
        <CardTemplate display={display} />
      </div>
    </div>
  );
}
