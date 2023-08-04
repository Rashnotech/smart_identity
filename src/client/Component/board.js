import { Icon } from "@iconify/react";
import { Menu } from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Project from "./create";
import Folder from "./folder";

export default function DrawingBoard(props) {
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
  function handleRename(myfile) {
    const updatingInput = document.querySelector("#foldername");
    updatingInput.value = myfile;
    setPrevFolder(myfile);
    handleShow();
    setUpdate((prevUpdate) => !prevUpdate);
    setFolder((prevFolder) => {
      return prevFolder.map((file) => {
        return file.name === myfile ? { ...file, menu: !file.menu } : file;
      });
    });
  }
  function addFolder(event) {
    event.preventDefault();
    const input = event.target.childNodes[0];
    const result = folders.some((folder) => folder.name === input.value);
    if (result) {
      document.querySelector("#feedback").textContent =
        "Folder name already exist, try again!";
    } else {
      setFolder((prevFolder) => {
        return [
          ...prevFolder,
          {
            name: input.value,
            items: [],
            menu: false,
          },
        ];
      });
      handleClose();
    }
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
          <h4 className="text-xl font-semibold text-gray-800">My Creations</h4>
          <div className="flex flex-row md:items-center md:justify-end md:space-x-3 justify-between w-full">
            <button
              onClick={handleShow}
              className="font-semibold text-blue-600 border-2 hover:text-slate-50 hover:bg-blue-600 md:w-1/4 flex items-center justify-center duration-200 hover:ease-in-out text-sm border-blue-600 px-2 py-3 rounded-md"
            >
              <span className="inline-block text-xl mr-2">
                <Icon icon="akar-icons:folder-add" />
              </span>
              Organize your work!
            </button>
            <button
              onClick={createProject}
              className="font-semibold font-Roboto text-slate-50 flex flex-row  items-center justify-center text-sm hover:bg-blue-700 duration-200 hover:ease-in-out bg-blue-600 p-3 rounded-md"
            >
              <span className="inline-block text-xl mr-2">
                <Icon icon="carbon:add-filled" />
              </span>
              Create a new project
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-2">
          {folders.map((folder, index) => (
            <div
              key={index}
              className="relative cursor-pointer border-slate-600 hover:bg-gray-400/30 flex items-center justify-between rounded-md p-2 font-semibold text-slate-500 font-Roboto text-sm border-2"
            >
              <Link to={`/folder/${folder.name}`}>
                <span className="grid grid-flow-col gap-2">
                  <Icon icon="clarity:folder-open-line" className="text-xl" />
                  <span>{folder.name}</span>
                </span>
              </Link>
              <div>
                <Menu as="div">
                  <span className="grid grid-flow-col gap-1 items-center group">
                    <span className="bg-slate-300 rounded px-2 py-1 ">
                      {folder.items.length}
                    </span>
                    <Menu.Button>
                      <Icon
                        icon="bx:dots-vertical-rounded"
                        className="text-xl"
                      />
                    </Menu.Button>
                    <Menu.Items>
                      <div className="divide-y rounded absolute top-3/4 right-0 w-3/4 font-normal cursor-pointer bg-white shadow-md font-Roboto">
                        <Menu.Item>
                          <div
                            className="p-2 hover:text-blue-500"
                            onClick={() => handleRename(folder.name)}
                          >
                            <Icon
                              icon="eva:edit-2-outline"
                              className="inline-block mr-2"
                            />
                            Rename
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div
                            className="p-2 hover:text-blue-500"
                            onClick={() => handleDelete(folder.name)}
                          >
                            <Icon
                              icon="gg:trash"
                              className="inline-block mr-2"
                            />
                            Delete
                          </div>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </span>
                </Menu>
              </div>
            </div>
          ))}
        </div>
        <div className="container my-10 mx-auto space-y-4 bg-blue-50 text-center flex flex-col items-center justify-center w-full md:w-3/4 p-12 rounded-lg text-slate-600">
          <span>
            <Icon icon="akar-icons:file" className="text-5xl" />
          </span>
          <h3 className="text-xl font-semibold">Templates</h3>
          <p className="text-sm">
            You don't have any template yet, you can create one
            <span className="text-blue-600 text-sm font-semibold px-1">
              <Link>here</Link>
            </span>
          </p>
        </div>
      </div>
      <Project show={createProject} handleClose={closeProject} />
      <Folder
        update={update}
        handleUpdate={handleUpdate}
        addFolder={addFolder}
        handleClose={handleClose}
      />
    </div>
  );
}
