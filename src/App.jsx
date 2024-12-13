import React from "react";
import Navbar from "./components/Navbar";
import StoreSelect from "./components/StoreSelect";
import Banner from "./components/Banner";
import MenuContainer from "./components/MenuContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <StoreSelect />
      </header>
      <Banner />
      <div className="flex justify-center border-2">
        <h1 className="font-bold text-3xl m-6 text-blue-500 ">
          BROWSE CATEGORIES
        </h1>
        <hr className="w-[50vw] inline-block mt-10 border-4 " />
      </div>
      <MenuContainer />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
