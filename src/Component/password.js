import ForgetImage from "../image/ForgetImage";
import Logo from "../image/smart.png";
function ForgetPassword() {
  return (
    <div className="bg-slate-100 w-full border h-screen overflow-x-hidden relative">
      <span className="absolute md:left-32 left-3 top-4">
        <h3 className="uppercase text-[#008287] font-GoshaSans text-xl">
          <span className="inline-block">
            <img src={Logo} className="w-5 h-5 mr-2" alt="" />
          </span>
          Smart Identity
        </h3>
      </span>
      <div className="container mx-auto my-auto xl:px-24">
        <div className="w-full my-14 flex flex-col md:flex-row items-center justify-between">
          <div className="hidden md:block w-full md:w-1/2 space-y-4">
            <ForgetImage />
          </div>
          <div className="w-auto md:w-2/5 space-y-10 shadow-lg flex flex-col items-center px-4 py-12">
            <div className="text-center space-y-2">
              <h3 className="font-GoshaSans text-2xl text-slate-700">
                Forget your Password?
              </h3>
              <p className="text-slate-300 text-sm">
                Enter your Email and set New Password
              </p>
              <form className="space-y-4 font-Roboto">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="form-input w-full px-4 py-3 border-0"
                />
                <button className="px-4 py-2 rounded-md bg-[#051B47]  w-3/4 hover:bg-[#051B47]/80 hover:ease-in-out duration-300 text-white">
                  Reset password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgetPassword;
