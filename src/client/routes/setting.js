import Content from "../Component/Content";
import SideNav from "../Nav/sidebar";
import { useState } from "react";

export default function Setting() {
  const [display, setDisplay] = useState(true);
  function Toggle() {
    setDisplay((prevState) => !prevState);
  }
  return (
    <div className="bg-slate-100 w-full h-screen fixed">
      <div className="w-full h-screen flex flex-row items-center space-between overflow-x-hidden">
        <SideNav Toggled={Toggle} display={display} />
        <Content display={display} />
      </div>
    </div>
  );
}
