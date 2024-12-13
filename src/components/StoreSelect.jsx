import React from "react";

function StoreSelect() {
  return (
    <button className="fixed top-[80px] h-12 bg-[#202125] text-white w-[100vw] z-1000">
      <div className="flex justify-center items-center gap-2">
        <svg
          viewBox="0 0 9 12"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3"
        >
          <path
            className="fill-red-600"
            d="M4.49 12c2.335-1.862 4.876-4.924 4.466-8.028C8.67 1.697 6.743 0 4.49 0 2.154 0 .228 1.78.023 4.138-.264 7.2 2.195 10.179 4.49 12zm0-8.98c.901 0 1.639.746 1.639 1.656 0 .91-.738 1.655-1.64 1.655-.901 0-1.639-.745-1.639-1.655S3.588 3.02 4.49 3.02z"
          ></path>
        </svg>
        <p className="text-xs">Select a store to start your order</p>
      </div>
    </button>
  );
}

export default StoreSelect;
