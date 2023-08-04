import { Icon } from "@iconify/react";
import identified from "../../image/identified.jpg";
export default function Card() {
  return (
    <div
      className="rounded-md group relative"
      style={{
        backgroundImage: `url(${identified})`,
        backgroundSize: "cover",
      }}
    >
      <p className="absolute rounded-sm bg-slate-700/50 p-1 left-3 top-3 group-hover:invisible">
        <Icon icon="bxs:crown" color="orange" />
      </p>

      <div className="invisible group-hover:visible transition group-hover:ease-in-out delay-150 duration-300">
        <div className="group-hover:bg-gray-700/80 flex flex-row items-center justify-between p-2 rounded-md">
          <div className="flex flex-col items-start justify-between mr-2 overflow-hidden">
            <p className="truncate text-slate-50 text-sm font-medium overflow-hidden w-3/4">
              <Icon icon="bxs:crown" className="inline-block text-slate-300" />
              Cooperate Identity Card
            </p>
            <div className="text-sm mt-12 w-full flex flex-row flex-wrap group-hover:ease-in-out delay-100">
              <span className="truncate bg-gray-400/25 rounded-md text-white p-1 mr-2 mb-1 overflow-hidden">
                Identy Card
              </span>
              <span className="truncate bg-gray-400/25 rounded-md text-white p-1 mr-2 mb-1 overflow-hidden">
                Office Card
              </span>
              <span className="truncate bg-gray-400/25 rounded-md text-white p-1 mr-2 mb-1 overflow-hidden">
                QR Scan
              </span>
            </div>
          </div>
          <div className="space-y-3 group-hover:ease-linear delay-100">
            <div className="flex flex-row-reverse justify-between">
              <button className="rounded-md text-slate-600 px-3 py-2 bg-white peer">
                <Icon icon="ant-design:heart-outlined" />
              </button>
              <span className="invisible peer-hover:visible transition duration-300 peer-hover:ease-in-out bg-white rounded-sm p-3 font-medium text-sm text-slate-600 relative">
                Like
                <span className="absolute text-white top-1/4 -right-2">
                  <Icon icon="ant-design:caret-right-filled" />
                </span>
              </span>
            </div>

            <div className="flex flex-row-reverse justify-between">
              <button className="rounded-md text-slate-600 px-3 py-2 bg-white peer">
                <Icon icon="akar-icons:folder-add" />
              </button>
              <span className="invisible peer-hover:visible transition duration-300 -ml-5 peer-hover:ease-in-out bg-white rounded-sm p-3 font-medium text-sm text-slate-600 relative">
                Collect
                <span className="absolute text-white top-1/4 -right-2">
                  <Icon icon="ant-design:caret-right-filled" />
                </span>
              </span>
            </div>
            <div className="flex flex-row-reverse justify-between">
              <button className="rounded-md text-slate-600 px-3 py-2 bg-white block peer">
                <Icon icon="fluent:save-copy-20-regular" />
              </button>
              <span className="invisible peer-hover:visible mr-2 transition duration-300 peer-hover:ease-in-out bg-white rounded-sm p-3 font-medium text-slate-600 text-sm relative">
                Save
                <span className="absolute text-white top-1/4 -right-2">
                  <Icon icon="ant-design:caret-right-filled" />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
