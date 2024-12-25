import React from "react";
import { kfcMenu } from "../../utils/data";

function MenuContainer() {
  return (
    <div className="">
      <h1 className="ml-[10vw] p-4 font-bold">MENU</h1>
      <div className="grid grid-cols-4 w-[80vw] place-items-center m-auto text-center gap-y-10 mb-6 rounded-md">
        {kfcMenu.map((item, index) => (
          <div key={index} className="bg-[#f8f7f5] h-[16vw] rounded-md">
            <img src={item.imgUrl} alt="" className="w-[16vw] rounded-md" />
            <p className="text-[1vw] font-bold mt-6">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuContainer;
