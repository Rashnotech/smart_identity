import { Link } from "react-router-dom";
export default function Content(props) {
  return (
    <div
      className="md:w-3/4 h-full font-Roboto px-4 py-3 flex flex-col space-y-4 overflow-auto w-full"
      id="setting"
    >
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
              ? "text-left text-gray-700 text-2xl md:text-3xl font-bold"
              : "text-right text-gray-700 text-2xl md:text-3xl font-bold"
          }
        >
          Edit Profile
        </h2>
      </div>
      <div className="bg-white rounded-md px-4 py-8">
        <form>
          <div className="flex flex-col justify-center items-center space-y-5">
            <div className="h-32 w-32 bg-slate-400 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstname" className="text-sm">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                className="form-input rounded-md w-full text-sm border-slate-400 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="text-sm">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className="form-input rounded-md w-full text-sm border-slate-400 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="form-input rounded-md w-full text-sm border-slate-400 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="text-sm">
                Mobile
              </label>
              <input
                type="number"
                placeholder="Enter mobile"
                className="form-input rounded-md w-full text-sm border-slate-400 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                className="form-input rounded-md w-full text-sm border-slate-400 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="postal" className="text-sm">
                Postal Code
              </label>
              <input
                type="number"
                placeholder="Enter postal code"
                className="form-input rounded-md w-full text-sm border-slate-400 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="country" className="text-sm">
                Country
              </label>
              <select className="form-select rounded-md border-slate-400 px-4 py-3 w-full text-sm">
                <option>Choose country</option>
              </select>
            </div>
            <div>
              <label htmlFor="membership" className="text-sm">
                Membership Plan
              </label>
              <select className="form-select rounded-md border-slate-400 px-4 py-3 w-full text-sm">
                <option>Choose membership plan</option>
                <option>Free</option>
                <option>Basic</option>
                <option>Pro</option>
                <option>Premium</option>
              </select>
            </div>
            <div className="col-span-2 mx-auto">
              <button className="rounded-md border-none text-sm text-white font-semibold bg-gradient-to-br from-blue-500 to-blue-700 px-2 py-2">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-white rounded-md px-4 py-8">
        <form>
          <h2 className="text-xl font-semibold text-gray-600">
            Security Settings
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label htmlFor="current" className="text-sm">
                Current Password
              </label>
              <input
                type="password"
                placeholder="Enter current password"
                className="form-input rounded-md w-full text-sm border-slate-400 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="newpassword" className="text-sm">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter New password"
                className="form-input rounded-md w-full text-sm border-slate-400 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="repeat" className="text-sm">
                Repeat New Password
              </label>
              <input
                type="password"
                placeholder="Repeat New password"
                className="form-input rounded-md w-full text-sm border-slate-400 px-4 py-3"
              />
            </div>

            <div className="col-span-2 mx-auto">
              <button className="rounded-md border-none text-sm text-white font-semibold bg-gradient-to-br from-blue-500 to-blue-700 px-2 py-2">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
