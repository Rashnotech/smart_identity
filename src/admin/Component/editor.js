import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { Fragment, useState } from "react";
import Photo from "./photo";
import Template from "./template";
import Text from "./text";
export default function Artboard() {
  const [template, setTemplate] = useState(false);
  const [text, setText] = useState(false);
  const [addphoto, setAddphoto] = useState(false);
  const [qrcode, setQR] = useState(false);
  function handleTemplate() {
    setTemplate((prev) => !prev);
    setAddphoto(false);
    setQR(false);
    setText(false);
  }
  function handleAddphoto() {
    setAddphoto((prev) => !prev);
    setTemplate(false);
    setQR(false);
    setText(false);
  }
  function handleText() {
    setText((prev) => !prev);
    setTemplate(false);
    setAddphoto(false);
    setQR(false);
  }
  function handleQR() {
    setQR((prev) => !prev);
    setTemplate(false);
    setAddphoto(false);
    setText(false);
  }
  return (
    <div className="w-screen h-screen bg-gray-800 flex flex-col overflow-hidden items-center text-slate-50 font-Roboto shadow-md">
      <div className="w-full bg-gray-900/40 flex items-center justify-between px-4 py-2">
        <p className="font-GoshaSans uppercase">Smart Identity</p>
        <ul className="flex relative space-x-4 items-center">
          <li>
            <div className="bg-slate-300/40 rounded text-center p-3">
              <Icon icon="entypo:share" className="text-xl" />
            </div>
          </li>
          <li>
            <button className="px-4 py-3 bg-green-400 text-slate-50 font-semibold text-base rounded">
              <Icon
                icon="eva:cloud-download-outline"
                className="inline-block text-xl mr-2"
              />
              Download
            </button>
          </li>
          <li>
            <Menu>
              <Menu.Button>
                <div className="rounded-full bg-slate-50 w-10 h-10"></div>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="flex flex-col left-0 w-52 space-y-2 text-sm rounded-sm absolute bg-slate-50 text-slate-500 p-2">
                  <Menu.Item>
                    <div className="flex flex-row items-center px-2 justify-between border-b border-gray-300">
                      <div className="bg-slate-300 w-10 h-10"></div>
                      <div className="text-sm ">
                        <p className="text-sm text-slate-700">
                          Abdulrasheed Aliyu
                        </p>
                        <p className="text-slate-400 text-xs">
                          rashnotech@gmail.com
                        </p>
                        <p className="text-sm text-sky-600 font-medium">
                          Edit Profile
                        </p>
                      </div>
                    </div>
                  </Menu.Item>
                  <Menu.Item className="px-3 py-2">
                    <span className="hover:text-blue-600 duration-150 hover:ease-in-out">
                      Projects
                    </span>
                  </Menu.Item>
                  <Menu.Item className="px-3 py-2">
                    <span>Report an error</span>
                  </Menu.Item>
                  <Menu.Item className="px-3 py-2">
                    <span>Logout</span>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
        </ul>
      </div>
      <div className="h-full w-full flex">
        <div className="bg-gray-600/30 py-4">
          <ul className="flex items-center justify-center flex-col space-y-10 text-center text-xs first:pt-4">
            <li className="group">
              <button
                onClick={handleTemplate}
                className={
                  template
                    ? "flex items-center bg-gray-400/50 justify-center flex-col px-1 py-2 rounded space-y-2"
                    : "flex items-center justify-center flex-col group-hover:text-slate-500 group-hover:ease-in-out duration-150 px-1 py-2 rounded space-y-2"
                }
              >
                <Icon icon="bxs:customize" className="text-xl" />
                <span className="cursor-pointer">Template</span>
              </button>
            </li>
            <li className="group">
              <button
                onClick={handleAddphoto}
                className={
                  addphoto
                    ? "flex items-center bg-gray-400/50 justify-center flex-col px-1 py-2 rounded space-y-2"
                    : "flex items-center justify-center flex-col group-hover:text-slate-500 group-hover:ease-in-out duration-150 px-1 py-2 rounded space-y-2"
                }
              >
                <Icon icon="bxs:image" className="text-xl" />
                <span className="cursor-pointer">Add Photo</span>
              </button>
            </li>
            <li className="group">
              <button
                onClick={handleText}
                className={
                  text
                    ? "flex items-center bg-gray-400/50 justify-center flex-col px-1 py-2 rounded space-y-2"
                    : "flex items-center justify-center flex-col group-hover:text-slate-500 group-hover:ease-in-out duration-150 px-1 py-2 rounded space-y-2"
                }
              >
                <Icon icon="cil:text-shapes" className="text-xl" />
                <span className="cursor-pointer">Add Text</span>
              </button>
            </li>
            <li className="group">
              <button
                onClick={handleQR}
                className={
                  qrcode
                    ? "flex items-center bg-gray-400/50 justify-center flex-col px-1 py-2 rounded space-y-2"
                    : "flex items-center justify-center flex-col group-hover:text-slate-500 group-hover:ease-in-out duration-150 px-1 py-2 rounded space-y-2"
                }
              >
                <Icon icon="iconoir:scan-qr-code" className="text-xl" />
                <span className="cursor-pointer">Add QR Code</span>
              </button>
            </li>
            <li className=" group">
              <button className="flex items-center justify-center flex-col group-hover:text-slate-500 group-hover:ease-in-out duration-150 px-4 py-2 rounded space-y-2">
                <Icon icon="dashicons:admin-customizer" className="text-xl" />
                <span className="cursor-pointer">Orientation</span>
              </button>
            </li>
          </ul>
        </div>
        {template && <Template handleTemplate={handleTemplate} />}
        {addphoto && <Photo handleAddphoto={handleAddphoto} />}
        {text && <Text handleText={handleText} />}
        {qrcode && (
          <div className="w-1/3 h-full bg-gray-600/30 border-l p-3 border-l-slate-500">
            <div className="flex flex-row items-center justify-between mb-4">
              <h1 className="text-xl font-GoshaSans text-slate-400 font-medium">
                QR Code
              </h1>
              <button onClick={handleQR}>
                <Icon icon="bx:chevron-left" className="text-2xl" />
              </button>
            </div>
            <div>Generate QR loading</div>
          </div>
        )}
        <div className="bg-dark flex w-full h-full items-center justify-center overflow-x-hidden relative">
          <div className="absolute bg-gray-700 flex bottom-8 rounded-md p-2 text-slate-400 font-GoshaSans items-center justify-between">
            <div className="hover:ease-in-out duration-150 hover:text-slate-100 cursor-pointer px-2">
              Next page
            </div>
          </div>
          <div className="absolute bg-gray-700 flex right-8 bottom-8 rounded-md p-2 text-slate-400 font-GoshaSans items-center justify-between">
            <div className="hover:ease-in-out duration-150 hover:text-slate-100 cursor-pointer px-2">
              -
            </div>
            <div className="hover:ease-in-out duration-150 hover:text-slate-100 cursor-pointer px-2">
              100%
            </div>
            <div className="hover:ease-in-out duration-150 hover:text-slate-100 cursor-pointer px-2">
              +
            </div>
          </div>
          <div className="bg-white w-[368px] h-[554px]"></div>
        </div>
      </div>
    </div>
  );
}
