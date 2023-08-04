import { Icon } from "@iconify/react";
import { NavLink, useParams } from "react-router-dom";
export default function SideNav(props) {
  const { name } = useParams();
  return (
    <div
      className={
        props.display
          ? "md:w-1/4 font-Roboto bg-slate-50 px-4 py-6 h-screen md:ml-0 -ml-44 relative"
          : "show"
      }
    >
      <div
        className="absolute top-5 -right-10 h-4 w-8 space-y-1 bg-slate-50 md:hidden"
        onClick={props.Toggled}
      >
        <p className="w-full bg-slate-400 h-0.5"></p>
        <p className="w-full bg-slate-400 h-0.5"></p>
        <p className="w-full bg-slate-400 h-0.5"></p>
        <p className="w-full bg-slate-400 h-0.5"></p>
        <p className="w-full bg-slate-400 h-0.5"></p>
      </div>

      <NavLink>
        <div className="flex flex-col items-center justify-center my-5">
          <div className="rounded-full w-20 h-20 bg-slate-300"></div>
          <div className="font-Roboto">
            <p className="font-semibold">Abdulrasheed Aliyu</p>
            <p className="text-slate-400 text-sm text-center">@rashnotech</p>
          </div>
        </div>
      </NavLink>

      <nav className=" border-b-2 border-t-2 border-dotted">
        <ul className="space-y-6 text-sm px-6 py-6 font-bold text-gray-700">
          {name && (
            <li>
              <NavLink to="/dashboard" className={name ? "current" : ""}>
                <span className="inline-block mr-2 align-middle text-lg"></span>
                <Icon
                  icon="entypo:chevron-left"
                  className="inline-block text-xl"
                />{" "}
                Back to Main
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "current" : "")}
            >
              <span className="inline-block mr-2 align-middle text-lg">
                <Icon icon="entypo:home" />
              </span>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/templates"
              className={({ isActive }) => (isActive ? "current" : "")}
            >
              <span className="inline-block mr-2 align-middle text-lg">
                <Icon icon="ic:round-window" />
              </span>
              Templates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transaction"
              className={({ isActive }) => (isActive ? "current" : "")}
            >
              <span className="inline-block mr-2 align-middle text-lg">
                <Icon icon="uil:transaction" />
              </span>
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) => (isActive ? "current" : "")}
            >
              <span className="inline-block mr-2 align-middle text-lg">
                <Icon icon="ci:settings-filled" />
              </span>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="px-6 py-6 text-sm font-bold text-gray-700 dark:text-gray-600">
          <li>
            <NavLink>
              <span className="inline-block mr-2 align-middle text-slate-400 text-lg">
                <Icon icon="tabler:logout" />
              </span>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
