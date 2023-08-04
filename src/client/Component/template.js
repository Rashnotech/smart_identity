import { Icon } from "@iconify/react";
export default function Template(props) {
  return (
    <>
      <div className="w-1/3 h-full bg-gray-600/30 border-l p-3 border-l-slate-500">
        <div className="flex flex-row items-center justify-between mb-4">
          <h1 className="text-xl font-GoshaSans text-slate-400 font-medium">
            Template
          </h1>
          <button onClick={props.handleTemplate}>
            <Icon icon="bx:chevron-left" className="text-2xl" />
          </button>
        </div>
        <div>
          <form action="#">
            <input
              type="search"
              className="form-input focus:outline-none rounded-md w-full border-0 bg-gray-900/30 placeholder:text-slate-500  focus:ring-1 focus:ring-slate-500 text-sm placeholder:text-sm "
              placeholder="Search Template..."
            />
          </form>
        </div>
      </div>
    </>
  );
}
