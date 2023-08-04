import React from "react";
function PriceTag(props) {
  return (
    <div id="pricing" className="md:w-1/3 w-full shadow-sm border rounded-lg">
      <div className="p-10">
        <div className="mb-2 space-y-4 ">
          <h4 className="font-Roboto text-xl font-semibold">{props.type}</h4>
          <h1 className="font-Roboto text-5xl font-black">{props.price}</h1>
          <p className="font-Roboto text-slate-500">{props.details}</p>
        </div>
      </div>
      <div className="px-10 pb-10 pt-0 space-y-10 flex flex-col font-Roboto">
        <ul className="ml-4 space-y-3 list-disc  text-slate-500">
          {props.categories.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
        <button
          className={
            props.active
              ? "px-4 py-2 bg-pink-700 text-slate-50 rounded-md hover:bg-pink-600 duration-200 hover:ease-in-out"
              : "px-4 py-2 bg-pink-100 text-pink-600 rounded-md hover:bg-pink-600 hover:text-pink-200 duration-200 hover:ease-in-out"
          }
        >
          Monthly billing
        </button>
      </div>
    </div>
  );
}
export default PriceTag;
