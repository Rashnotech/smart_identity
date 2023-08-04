import { Link } from "react-router-dom";
import LogImage from "../image/LoginImage";
import Logo from "../image/smart.png";
function Register() {
  return (
    <div className="bg-slate-100 w-full border h-screen overflow-x-hidden relative">
      <span className="absolute md:left-32 left-3 top-4">
        <Link to="/">
          <h3 className="uppercase text-[#008287] font-GoshaSans text-xl">
            <span className="inline-block">
              <img src={Logo} className="w-5 h-5 mr-2" alt="" />
            </span>
            Smart Identity
          </h3>
        </Link>
      </span>
      <div className="container mx-auto my-auto xl:px-24">
        <div className="w-full my-12 md:my-4 flex flex-col-reverse md:flex-row-reverse items-center justify-between">
          <div className="w-full md:w-1/2 space-y-4">
            <div className="w-full font-Roboto text-center space-y-2">
              <h2 className="text-3xl text-slate-500 font-medium font-GoshaSans">
                Create Account
              </h2>
              <p className="font-medium text-slate-700">
                Get's started by creating your New Account
              </p>
            </div>
            <form className="flex flex-col items-center justify-center space-y-3 w-4/5 md:w-3/4 mx-auto">
              <div className="w-full">
                <input
                  type="fullname"
                  className="form-input px-4 py-3 rounded-md font-Roboto border-none w-full text-sm md:text-base"
                  placeholder="Full Name"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  className="form-input px-4 py-3 rounded-md font-Roboto border-none w-full text-sm md:text-base"
                  placeholder="Email Address"
                />
              </div>
              <div className="w-full">
                <input
                  type="number"
                  className="form-input px-4 py-3 rounded-md font-Roboto border-none w-full text-sm md:text-base"
                  placeholder="Phone Number"
                />
              </div>
              <div className="w-full">
                <input
                  type="password"
                  className="form-input px-4 py-3 rounded-md font-Roboto border-none w-full text-sm md:text-base"
                  placeholder="Password"
                />
              </div>
              <div className="w-full">
                <label htmlFor="referral" className="text-sm text-[#051B47]">
                  (Optional)
                </label>
                <input
                  type="text"
                  className="form-input px-4 py-3 rounded-md font-Roboto border-none w-full text-sm md:text-base"
                  placeholder="Referral Code"
                />
              </div>
              <div className="w-full">
                <label htmlFor="referral" className="text-sm text-[#051B47]">
                  Membership Plan
                </label>
                <select className="form-select px-4 py-3 rounded-md font-Roboto border-none w-full text-sm md:text-base">
                  <option value="">Choose membership plan</option>
                  <option value="">Free</option>
                  <option value="">Basic</option>
                  <option value="">Pro</option>
                  <option value="">Premium</option>
                </select>
              </div>
              <div className="w-full">
                <input
                  type="checkbox"
                  className="form-checkbox rounded-sm border-[#051B47]"
                />
                <span className="text-sm ml-2">
                  By clicking, you agree to the Smart Identity's Terms and
                  Conditions
                </span>
              </div>
              <div className="w-3/4">
                <button className="px-4 py-3 mt-4 text-white rounded-md bg-[#051B47] w-full hover:bg-[#051B47]/90 duration-200">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="hidden w-2/6 space-y-10 shadow-lg md:flex flex-col items-center px-4 py-12">
            <div className="">{<LogImage />}</div>
            <div className="text-center space-y-2">
              <h3 className="font-GoshaSans text-xl text-slate-700">
                Already Have an Account?
              </h3>
              <p className="text-slate-300 text-sm">
                We are Happy to have you Back
              </p>
              <Link to="/login">
                <button className="px-4 py-2 text-[#051B47] rounded-md border-[#051B47] border-2 bg-slate-100 w-3/4 hover:bg-[#051B47]/80 hover:ease-in-out duration-300 hover:text-white">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
