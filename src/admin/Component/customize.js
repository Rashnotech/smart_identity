import { Icon } from "@iconify/react";
export default function Customize(props) {
  function Upload() {
    const el = document.querySelector("#front");
    el.click();
  }
  function backUpload() {
    const el = document.querySelector("#back");
    el.click();
  }
  function imageChange(e) {
    const front = document.querySelector("#frontUpload");
    let files = e.target.files;
    const img = document.createElement("img");
    img.src = URL.createObjectURL(files[0]);
    img.classList = "h-full w-full absolute top-0 left-0";
    img.onload = function () {
      URL.revokeObjectURL(this.src);
    };
    front.appendChild(img);
  }
  function backChange(e) {
    const back = document.querySelector("#backUpload");
    let files = e.target.files;
    const img = document.createElement("img");
    img.src = URL.createObjectURL(files[0]);
    img.classList = "h-full w-full absolute top-0 left-0";
    img.onload = function () {
      URL.revokeObjectURL(this.src);
    };
    back.appendChild(img);
  }
  return (
    <div className="transition ease-linear duration-200 delay-150 flex-col items-center justify-between">
      <form>
        <div
          id="frontUpload"
          onClick={Upload}
          onChange={imageChange}
          className="bg-sky-50 rounded relative border-2 flex flex-col space-y-2 justify-center items-center p-6 border-sky-500/50 border-dashed mt-2"
        >
          <input
            type="file"
            id="front"
            className="form-file hidden"
            accept="image/*"
          />
          <span>
            <Icon
              icon="fa6-regular:address-card"
              className="text-4xl opacity-10 contrast-more:opacity-100 text-slate-600"
            />
          </span>
          <p className="text-slate-600 text-sm opacity-10 contrast-more:opacity-100">
            Upload the front page of your ID Card
          </p>
        </div>
        <div
          id="backUpload"
          onClick={backUpload}
          onChange={backChange}
          className="bg-sky-50 rounded relative border-2 p-6 space-y-2 flex flex-col justify-center items-center border-sky-500/50 border-dashed mt-2"
        >
          <input
            id="back"
            type="file"
            className="form-file hidden"
            accept="image/*"
          />
          <span>
            <Icon
              icon="fa6-regular:address-card"
              className="text-4xl opacity-10 contrast-more:opacity-100 text-slate-600"
            />
          </span>
          <p className="text-slate-600 text-sm opacity-10 contrast-more:opacity-100">
            Upload the Back page of your ID Card
          </p>
        </div>
        <button
          onClick={props.handleClick}
          type="button"
          className="px-4 py-2 rounded mt-2 mr-2 border border-blue-700 bg-slate-50 text-slate-600 hover:ease-in-out duration-150 hover:bg-slate-400 hover:text-slate-50"
        >
          Back
        </button>
        <button
          type="submit"
          className="rounded mt-2 text-slate-50 bg-blue-700 px-4 py-2 hover:bg-blue-900 duration-150 hover:ease-in-out"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
