import { Link } from "react-router-dom";
import Card from "./Card";
export default function CardTemplate(props) {
  return (
    <div className="w-full md:w-3/4 h-full font-Roboto px-4 py-3 flex flex-col space-y-4 overflow-auto">
      <div className={props.display ? "md:hidden mt-4" : "hidden"}>
        <Link>
          <div className="float-right flex flex-row items-center justify-items-end font-Roboto">
            <div>
              <p className="font-semibold text-right">Abdulrasheed Aliyu</p>
              <p className="text-slate-400 text-sm text-right">@rashnotech</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-slate-600"></div>
          </div>
        </Link>
      </div>
      <div className="py-4 flex flex-row justify-between items-center">
        <h2
          className={
            props.display
              ? "text-gray-700 font-Roboto text-2xl md:text-3xl font-bold text-left"
              : "text-gray-700 text-2xl font-Roboto md:text-3xl font-bold text-right"
          }
        >
          Card Templates
        </h2>
        <div className="float-right flex md:block">
          <label className="relative inline-block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
          </label>
          <select className="form-select px-3 py-2 border-slate-300 rounded-md w-auto">
            <option value="all">All</option>
            <option value="newest">Newest</option>
            <option value="trending">Trending</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3 px-4 py-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="float-right w-1/2">
        <ul className="divide-x flex flex-row rounded-md shadow-sm bg-slate-50">
          <li className="px-3 py-2">&caret;</li>
          <li className="px-3 py-2">1</li>
          <li className="px-3 py-2">2</li>
          <li className="px-3 py-2">3</li>
          <li className="px-3 py-2">4</li>
          <li className="px-3 py-2">&caret;</li>
        </ul>
      </div>
    </div>
  );
}
