import { useState } from "react";
import Creation from "../Component/organize";
import SideNav from "../Nav/sidebar";

export default function Folder() {
  const [display, setDisplay] = useState(true);
  function Toggle() {
    setDisplay((prevState) => !prevState);
  }
  return (
    <div className="bg-slate-100 w-full h-screen fixed">
      <div className="w-full h-screen flex flex-row items-center space-between overflow-x-hidden">
        <SideNav Toggled={Toggle} display={display} />
        <Creation display={display} />
      </div>
    </div>
  );
}
