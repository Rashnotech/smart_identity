import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Customize from "./customize";
export default function Project(props) {
  const [toggler, setToggler] = useState(true);
  function handleToggle() {
    setToggler((prev) => !prev);
  }
  return (
    <dialog
      className="p-6 w-full md:w-2/5 divide-y space-y-3 backdrop:bg-slate-700/50 backdrop-blur-lg rounded-md font-Roboto bg-white translate-y-2/5"
      id="createProject"
    >
      <span className="flex justify-between items-center">
        <h1 className="font-Roboto text-xl font-medium text-slate-700">
          Start a new canvas
        </h1>
        <Icon
          onClick={props.handleClose}
          icon="eva:close-fill"
          className="text-2xl text-slate-700 hover:text-slate-300 duration-150 hover:ease-in-out"
        />
      </span>
      {toggler ? (
        <div className="flex justify-between items-center pt-4">
          <div className="bg-slate-50 flex flex-col cursor-pointer group space-y-2 justify-center hover:border-slate-300 items-center w-48 h-32 rounded text-center text-slate-600 border-2 border-dashed border-slate-200">
            <Link to="/editor">
              <span>
                <Icon
                  icon="fa6-regular:address-card"
                  className="text-4xl group-hover:text-slate-400 duration-150 group-hover:ease-in-out "
                />
              </span>
              <span className="text-sm group-hover:text-slate-400 duration-150 group-hover:ease-in-out">
                Create New
              </span>
            </Link>
          </div>
          <div
            onClick={handleToggle}
            className="group bg-slate-50 rounded cursor-pointer hover:border-slate-300 w-48 flex space-y-2 flex-col justify-center items-center h-32 border-2 text-slate-600 border-dashed border-slate-200"
          >
            <span>
              <Icon
                icon="bxs:customize"
                className="text-4xl group-hover:text-slate-400 duration-150 group-hover:ease-in-out"
              />
            </span>
            <span className="text-sm group-hover:text-slate-400 duration-150 group-hover:ease-in-out">
              Customize
            </span>
          </div>
        </div>
      ) : (
        <Customize handleClick={handleToggle} />
      )}
    </dialog>
  );
}
