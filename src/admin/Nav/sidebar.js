import { Icon } from "@iconify/react";
import { NavLink, useParams } from "react-router-dom";
export default function SideNav(props) {
  const { name } = useParams();
  return (
    <div
      className={
        props.display
          ? "md:w-1/4 font-Roboto bg-[#008287] px-4 py-6 h-screen md:ml-0 -ml-44 relative"
          : "admin"
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
      <div className="mt-8">
        <p className="text-2xl text-slate-50 text-center uppercase font-GoshaSans font-extrabold"></p>
      </div>
      <nav className="">
        <ul className="font-Roboto space-y-6 text-sm px-6 py-6 font-bold text-slate-50">
          {name && (
            <li>
              <NavLink to="/admin" className={name ? "current" : ""}>
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
              to="/admin"
              className={({ isActive }) => (isActive ? "currentAdmin" : "")}
            >
              <span className="inline-block mr-2 align-middle text-lg">
                <Icon icon="entypo:home" />
              </span>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "currentAdmin" : "")}
            >
              <span className="inline-block mr-2 align-middle text-lg">
                <Icon icon="ant-design:team-outlined" />
              </span>
              Customer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "currentAdmin" : "")}
            >
              <span className="inline-block mr-2 align-middle text-lg">
                <Icon icon="clarity:hard-disk-line" />
              </span>
              Documents
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "currentAdmin" : "")}
            >
              <span className="inline-block mr-2 align-middle text-lg">
                <Icon icon="uil:transaction" />
              </span>
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "currentAdmin" : "")}
            >
              <span className="inline-block mr-2 align-middle text-lg">
                <Icon icon="iconoir:report-columns" />
              </span>
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink>
              <span className="inline-block mr-2 align-middle text-lg">
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
