import { Icon } from "@iconify/react";
export default function Text(props) {
  return (
    <div className="w-1/3 h-full bg-gray-600/30 border-l p-3 border-l-slate-500">
      <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="text-xl font-GoshaSans text-slate-400 font-medium">
          Texts
        </h1>
        <button onClick={props.handleText}>
          <Icon icon="bx:chevron-left" className="text-2xl" />
        </button>
      </div>
      <div>
        <div className="flex items-center flex-col justify-center">
          <div className="w-full h-16 rounded bg-gray-600"></div>
          <span className="text-xs text-slate-50 font-Roboto inline-block text-center">
            Fullname
          </span>
        </div>
        <div className="flex items-center flex-col justify-center">
          <div className="w-full h-16 rounded bg-gray-600"></div>
          <span className="text-xs text-slate-50 font-Roboto inline-block text-center">
            Address
          </span>
        </div>
        <div className="flex items-center flex-col ">
          <div className="w-full h-16 rounded bg-gray-600"></div>
          <span className="text-xs text-slate-50 font-Roboto inline-block text-center">
            Phone Number
          </span>
        </div>
      </div>
    </div>
  );
}
