import { Icon } from "@iconify/react";
import StatComponent from "./Statcomponent";
import TableComponent from "./Table";

export default function AdminBoard(props) {
  return (
    <div className="w-full md:w-3/4 h-full font-Roboto py-3 flex flex-col space-y-4 overflow-auto">
      <div className="mt-4 shadow-sm w-full flex items-center justify-between px-4 pb-3">
        <div>search</div>
        <div className="flex flex-row items-center justify-items-end space-x-4 font-Roboto">
          <div className="text-2xl text-slate-500">
            <Icon icon="mingcute:notification-line" />
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-400"></div>
        </div>
      </div>
      <div className="py-2 pl-4 font-Roboto">
        <h2
          className={
            props.display
              ? "text-gray-700 text-2xl md:text-2xl font-bold text-left"
              : "text-gray-700 text-2xl md:text-2xl font-bold text-right"
          }
        >
          Dashboard
        </h2>
      </div>
      <div className="px-4 py-4 font-Roboto flex md:flex-row flex-col items-center md:space-x-4 space-y-4 space-between">
        <StatComponent />
        <StatComponent />
        <StatComponent />
      </div>
      <div className="px-4 py-4">
        <TableComponent />
      </div>
    </div>
  );
}
