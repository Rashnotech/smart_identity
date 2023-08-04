import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Project from "./create";
import Folder from "./folder";
export default function Creation(props) {
  const { name } = useParams();
  const [folders, setFolder] = useState([]);
  const [update, setUpdate] = useState(false);
  const [prevFolders, setPrevFolder] = useState();

  function createProject() {
    const project = document.querySelector("#createProject");
    project.showModal();
  }
  function closeProject() {
    const project = document.querySelector("#createProject");
    project.close();
  }
  function handleUpdate(event) {
    event.preventDefault();
    const input = document.querySelector("#foldername").value;
    const result = folders.some((folder) => folder.name === input);
    if (result) {
      document.querySelector("#feedback").textContent =
        "Folder name already exist, try again!";
    } else {
      setFolder((prevFolder) => {
        return prevFolder.map((file) => {
          return file.name === prevFolders ? { ...file, name: input } : file;
        });
      });
      handleClose();
    }
  }

  function handleShow() {
    const folder = document.querySelector("#folder");
    document.querySelector("#feedback").textContent = "";
    folder.showModal();
  }
  function handleDelete(foldername) {
    setFolder((prevFolder) => {
      return prevFolder.filter((file) => file.name !== foldername);
    });
    setFolder((prevFolder) => {
      return prevFolder.map((file) => {
        return file.name === foldername ? { ...file, menu: !file.menu } : file;
      });
    });
  }
  function handleRename() {
    const updatingInput = document.querySelector("#foldername");
    updatingInput.value = name;
    setPrevFolder(name);
    handleShow();
    setUpdate((prevUpdate) => !prevUpdate);
    setFolder((prevFolder) => {
      return prevFolder.map((file) => {
        return file.name === name ? { ...file, menu: !file.menu } : file;
      });
    });
  }

  function handleClose() {
    const folder = document.querySelector("#folder");
    folder.close();
    setUpdate(false);
  }
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
              : "text-gray-700 text-2xl md:text-3xl font-bold text-right"
          }
        >
          Hi, Abdulrasheed
        </h2>
      </div>
      <div className="bg-white rounded-md px-8 py-12 font-Roboto">
        <div className="flex flex-row items-center justify-between flex-wrap">
          <h4 className="text-xl font-semibold text-gray-500">
            <Icon icon="bx:folder" className="inline-block text-2xl" />|{name}
          </h4>
          <div className="flex flex-row md:items-center md:justify-end md:space-x-3 justify-between w-full">
            <button
              onClick={handleRename}
              className="font-semibold border text-slate-500 hover:bg-slate-200 flex items-center justify-center duration-200 hover:ease-in-out text-sm border-blue-600 px-2 py-3 rounded-md"
            >
              <span className="inline-block text-xl mr-2">
                <Icon icon="bx:folder-open" />
              </span>
              Rename folder
            </button>
            <button
              onClick={handleDelete}
              className="font-semibold text-slate-500 flex flex-row  items-center justify-center text-sm hover:bg-slate-200 border border-blue-600 duration-200 hover:ease-in-out p-3 rounded-md"
            >
              <span className="inline-block text-xl mr-2">
                <Icon icon="bi:folder-x" />
              </span>
              Delete folder
            </button>
          </div>
        </div>

        <div className="container my-10 mx-auto space-y-4 bg-blue-50 text-center flex flex-col items-center justify-center w-full md:w-3/4 p-12 rounded-lg text-slate-600">
          <span>
            <Icon icon="bx:folder" className="text-5xl" />
          </span>
          <h3 className="text-xl font-semibold">Empty Folder</h3>
          <p className="text-sm">
            Go to
            <span className="text-blue-600 text-sm font-semibold px-1">
              <Link onClick={createProject}>your projects</Link>
            </span>
            and add a new creation in this folder
          </p>
        </div>
      </div>
      <Project show={createProject} handleClose={closeProject} />
      <Folder
        update={update}
        handleUpdate={handleUpdate}
        handleClose={handleClose}
      />
    </div>
  );
}
