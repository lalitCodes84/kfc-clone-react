import React from "react";

function MenuContainer() {
  return (
    <div className="w-[78vw] m-auto mt-2 mb-2 p-2">
      {/* Main Section Heading Section */}
      <h1 className="m-3 font-extrabold">MENU</h1>

      {/* Menu Container Main Div section */}

      <div className="grid grid-cols-4 w-[76vw] justify-around gap-6 p-2">
        {/* Menu Cards section css */}
        <div className="w-50 h-fit rounded-t-xl bg-[#f8f7f5] shadow-md">
          <img
            className="rounded-t-xl h-40"
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT289.jpg?ver=59.13"
            alt=""
          />
          <h2 className="text-xs text-center font-bold m-4">
            INTERNATIONAL BURGER FEST
          </h2>
        </div>

        <div className="w-50 h-fit rounded-t-xl bg-[#f8f7f5] shadow-md">
          <img
            className="rounded-t-xl h-40"
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=59.13"
            alt=""
          />
          <h2 className="text-xs text-center font-bold m-4">
            MATCH DAY COMBOS
          </h2>
        </div>

        <div className="w-50 h-fit rounded-t-xl bg-[#f8f7f5] shadow-md">
          <img
            className="rounded-t-xl h-40"
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT228.jpg?ver=59.13"
            alt=""
          />
          <h2 className="text-xs text-center font-bold m-4">
            VALUE LUNCH SPECIALS
          </h2>
        </div>

        <div className="w-50 h-fit rounded-t-xl bg-[#f8f7f5] shadow-md">
          <img
            className="rounded-t-xl h-40"
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=59.13"
            alt=""
          />
          <h2 className="text-xs text-center font-bold m-4">BOX MEALS</h2>
        </div>

        {/* Second Row Menus */}

        <div className="w-50 h-fit rounded-t-xl bg-[#f8f7f5] shadow-md">
          <img
            className="rounded-t-xl h-40"
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=59.13"
            alt=""
          />
          <h2 className="text-xs text-center font-bold m-4">BURGERS</h2>
        </div>

        <div className="w-50 h-fit rounded-t-xl bg-[#f8f7f5] shadow-md">
          <img
            className="rounded-t-xl h-40"
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=59.13"
            alt=""
          />
          <h2 className="text-xs text-center font-bold m-4">CHICKEN BUCKETS</h2>
        </div>

        <div className="w-50 h-fit rounded-t-xl bg-[#f8f7f5] shadow-md">
          <img
            className="rounded-t-xl h-40"
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT213.jpg?ver=59.13"
            alt=""
          />
          <h2 className="text-xs text-center font-bold m-4">RICE BOWLZ</h2>
        </div>

        <div className="w-50 h-fit rounded-t-xl bg-[#f8f7f5] shadow-md">
          <img
            className="rounded-t-xl h-40"
            src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg"
            alt=""
          />
          <h2 className="text-xs text-center font-bold m-4">
            FINGER LICKING GOOD
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MenuContainer;
