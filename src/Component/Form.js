import SignIn from "../image/signinImage";
import { Link } from "react-router-dom";
import Logo from "../image/smart.png";
import CotinueLogin from "./thirdparty";
function Form() {
  return (
    <div className="bg-slate-100 w-full border h-screen overflow-hidden relative">
      <div className="container mx-auto my-auto xl:px-24">
        <div className="w-full my-10 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="w-full font-Roboto text-center space-y-2">
              <span className="block">
                <img src={Logo} className="w-10 h-10 mx-auto" alt="" />
              </span>
              <h2 className="text-xl text-slate-600 font-GoshaSans font-semibold">
                Sign in To SMART IDENTITY
              </h2>
            </div>
            <CotinueLogin />
            <hr className="w-3/4 mx-auto" />
            <form className="flex flex-col items-center justify-center space-y-3 w-4/5 md:w-3/4 mx-auto">
              <div className="w-full">
                <input
                  type="email"
                  className="form-input px-4 py-3 rounded-md font-Roboto w-full text-sm md:text-base border border-slate-400 placeholder:text-sm"
                  placeholder="Email or Username"
                />
              </div>
              <div className="w-full">
                <input
                  type="password"
                  className="form-input px-4 py-3 rounded-md font-Roboto w-full text-sm md:text-base border border-slate-400 placeholder:text-sm"
                  placeholder="Password"
                />
                <span className="float-right mt-2 text-slate-600 text-sm">
                  Forget password?
                </span>
              </div>
              <div className="w-full">
                <button className="px-4 py-3 mt-8 w-full text-white rounded-md bg-[#051B47] hover:bg-[#051B47]/90 duration-200">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="hidden w-2/6 space-y-10 shadow-lg md:flex flex-col items-center px-4 py-12">
            <div className="">{<SignIn />}</div>
            <div className="text-center space-y-2">
              <h3 className="font-GoshaSans text-xl text-slate-700">
                Don't Have An Account?
              </h3>
              <p className="text-slate-300 text-sm">
                Get's started by creating your New Account
              </p>
              <Link to="/register">
                <button className="px-4 py-2 text-[#051B47] rounded-md border-[#051B47] border-2 bg-slate-100 w-3/4 hover:bg-[#051B47]/80 hover:ease-in-out duration-300 hover:text-white">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
