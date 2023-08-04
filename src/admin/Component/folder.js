import { Icon } from "@iconify/react";
export default function Folder(props) {
  return (
    <dialog
      className="p-12 w-full md:w-2/5 space-y-3 backdrop:bg-slate-700/50 backdrop-blur-lg rounded-md font-Roboto bg-white translate-y-3/4"
      id="folder"
    >
      <span className="flex items-center justify-between">
        <h3 className="text-gray-700 text-center font-medium text-xl">
          {props.update ? "Rename folder" : "Create new folder"}
        </h3>
        <Icon
          onClick={props.handleClose}
          icon="eva:close-fill"
          className="text-2xl text-slate-700 hover:text-slate-300 duration-150 hover:ease-in-out"
        />
      </span>

      <form onSubmit={props.update ? props.handleUpdate : props.addFolder}>
        <input
          id="foldername"
          name="folder"
          type="text"
          required
          className="form-input inset-1 text-sm w-full px-4 focus:ring-blue-600 py-3 border border-slate-400 rounded-sm placeholder:text-slate-500"
          placeholder="Folder name"
        />
        <span
          className="text-pink-500 text-sm font-medium"
          id="feedback"
        ></span>
        <div className="mt-3 flex items-center justify-center space-x-4">
          <button
            type="button"
            onClick={props.handleClose}
            className="border text-sm hover:bg-slate-300 duration-100 hover:ease-in-out border-slate-400 rounded-md font-medium text-gray-800 px-6 py-3"
          >
            Cancel
          </button>
          {props.update ? (
            <button
              type="submit"
              className="bg-blue-600 rounded-md font-medium text-sm text-white px-6 py-3 hover:border hover:border-blue-800 duration-100"
            >
              Done
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-600 rounded-md font-medium text-sm text-white px-6 py-3 hover:border hover:border-blue-800 duration-100"
            >
              Create folder
            </button>
          )}
        </div>
      </form>
    </dialog>
  );
}
