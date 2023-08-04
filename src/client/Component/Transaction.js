import { Link } from "react-router-dom";

export default function Transaction(props) {
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
      <div className="py-4">
        <h2
          className={
            props.display
              ? "text-gray-700 text-2xl md:text-3xl font-bold text-left"
              : "text-right text-gray-700 text-2xl md:text-3xl font-bold"
          }
        >
          Transaction
        </h2>
      </div>
      <div className="bg-white rounded-md px-4 py-8">
        <div className="flex flex-col space-y-6">
          <div className="h-1/2 w-full border-b border-slate-300 border-dotted">
            Chart
          </div>
          <div className="overflow-auto">
            <div className="flex flex-row items-center justify-between p-2">
              <p className="text-lg font-Roboto font-semibold text-slate-600">
                All Transactions
              </p>
              <div className="grid grid-flow-col gap-2">
                <span className="w-auto">
                  <input
                    type="search"
                    placeholder="Search"
                    className="form-input px-2 py-2 rounded-lg border border-slate-400"
                  />
                </span>
                <span className="w-1/2">
                  <select className="form-select px-2 py-2 border border-slate-300 rounded-lg">
                    <option value="all">All</option>
                    <option value="success">Success</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </span>
              </div>
            </div>
            <table className="border-collapse border border-slate-300 w-full dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
              <thead className="bg-slate-50 dark:slate-700">
                <tr>
                  <th className="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                    #
                  </th>
                  <th className="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                    Description
                  </th>
                  <th className="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                    Date
                  </th>
                  <th className="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                    Amount
                  </th>
                  <th className="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-data">1</td>
                  <td className="table-data">Cooperate Template Card</td>
                  <td className="table-data">12-04-2022</td>
                  <td className="table-data">2,500</td>
                  <td className="table-status">
                    <span className="border-yellow-400 border p-2 rounded-md">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
